const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "https://dewbyvlbmkersxjrcknm.supabase.co";
const SUPABASE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

interface ScoreDimension {
  dimension_name: string;
  score: number;
  weight: number;
}

interface ScoreHistory {
  score_date: string;
  score: number;
}

async function fetchGeoScore(): Promise<{ composite: number; dimensions: ScoreDimension[] }> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/geo_score_dimensions?select=dimension_name,score,weight&order=weight.desc`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } },
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const dims: ScoreDimension[] = await res.json();
    if (!dims.length) return { composite: 0, dimensions: [] };
    const totalWeight = dims.reduce((s, d) => s + (d.weight || 1), 0);
    const composite = Math.round(dims.reduce((s, d) => s + d.score * (d.weight || 1), 0) / totalWeight);
    return { composite, dimensions: dims };
  } catch {
    return { composite: 0, dimensions: [] };
  }
}

async function fetchScoreHistory(): Promise<ScoreHistory[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/geo_score_history?select=score_date,score&order=score_date.asc&limit=30`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } },
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return [];
  }
}

function scoreColor(score: number): string {
  if (score >= 80) return "#00d4aa";
  if (score >= 50) return "#ffd93d";
  return "#ff6b6b";
}

function renderGauge(score: number): string {
  const color = scoreColor(score);
  const radius = 70;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(score, 100) / 100;
  const dashOffset = circumference * (1 - pct);

  return `<svg viewBox="0 0 180 180" width="180" height="180" style="display:block">
    <circle cx="90" cy="90" r="${radius}" fill="none" stroke="#1a2a3a" stroke-width="${stroke}"/>
    <circle cx="90" cy="90" r="${radius}" fill="none" stroke="${color}" stroke-width="${stroke}"
      stroke-dasharray="${circumference}" stroke-dashoffset="${dashOffset}"
      stroke-linecap="round" transform="rotate(-90 90 90)"/>
    <text x="90" y="82" text-anchor="middle" fill="${color}" font-size="42" font-weight="800" font-family="-apple-system,BlinkMacSystemFont,sans-serif">${score}</text>
    <text x="90" y="105" text-anchor="middle" fill="#8899aa" font-size="13" font-family="-apple-system,BlinkMacSystemFont,sans-serif">/ 100</text>
    <text x="90" y="130" text-anchor="middle" fill="#556677" font-size="11" font-family="-apple-system,BlinkMacSystemFont,sans-serif">Target: 90+</text>
  </svg>`;
}

function renderColumnChart(history: ScoreHistory[], liveScore: number): string {
  const W = 520, H = 220, PAD_L = 45, PAD_R = 20, PAD_T = 30, PAD_B = 45;
  const plotW = W - PAD_L - PAD_R;
  const plotH = H - PAD_T - PAD_B;
  const maxScore = 100;

  // Build data: historical + today live
  const today = new Date().toISOString().slice(0, 10);
  const data: { date: string; score: number; isLive: boolean }[] = [];

  for (const h of history) {
    if (h.score_date === today) continue; // skip DB row for today, we use live
    data.push({ date: h.score_date, score: h.score, isLive: false });
  }
  data.push({ date: today, score: liveScore, isLive: true });

  const n = data.length;
  if (n === 0) return '<div style="color:#556677;font-size:.85rem">No score data yet.</div>';

  const barGap = 12;
  const totalGaps = (n - 1) * barGap;
  const barWidth = Math.min(80, Math.max(40, (plotW - totalGaps) / n));
  const totalBarsWidth = n * barWidth + totalGaps;
  const offsetX = PAD_L + (plotW - totalBarsWidth) / 2;

  const fmtDate = (s: string) => {
    const parts = s.split("-");
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return `${months[parseInt(parts[1], 10) - 1]} ${parseInt(parts[2], 10)}`;
  };

  // Y-axis grid lines at 0, 25, 50, 75, 100
  const yTicks = [0, 25, 50, 75, 100];

  let bars = "";
  let labels = "";
  let values = "";

  for (let i = 0; i < n; i++) {
    const d = data[i];
    const x = offsetX + i * (barWidth + barGap);
    const barH = (d.score / maxScore) * plotH;
    const y = PAD_T + plotH - barH;
    const color = scoreColor(d.score);

    // Bar with rounded top corners
    bars += `<rect x="${x}" y="${y}" width="${barWidth}" height="${barH}" rx="4" ry="4" fill="${color}" opacity="${d.isLive ? 1 : 0.85}"/>`;

    // Score value on top of bar
    values += `<text x="${x + barWidth / 2}" y="${y - 8}" text-anchor="middle" fill="${color}" font-size="14" font-weight="800" font-family="-apple-system,BlinkMacSystemFont,sans-serif">${d.score}</text>`;

    // Date label below x-axis
    labels += `<text x="${x + barWidth / 2}" y="${H - PAD_B + 18}" text-anchor="middle" fill="#8899aa" font-size="11" font-weight="600" font-family="-apple-system,BlinkMacSystemFont,sans-serif">${fmtDate(d.date)}</text>`;

    // "LIVE" indicator for today
    if (d.isLive) {
      labels += `<text x="${x + barWidth / 2}" y="${H - PAD_B + 33}" text-anchor="middle" fill="#00d4aa" font-size="9" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,sans-serif" letter-spacing="1.5">LIVE</text>`;
    }
  }

  const gridLines = yTicks.map(v => {
    const y = PAD_T + plotH - (v / maxScore) * plotH;
    return `<line x1="${PAD_L}" y1="${y}" x2="${W - PAD_R}" y2="${y}" stroke="#1a2a3a" stroke-width="1"/>
    <text x="${PAD_L - 8}" y="${y + 4}" text-anchor="end" fill="#556677" font-size="10" font-family="monospace">${v}</text>`;
  }).join("\n");

  return `<div style="position:relative">
    <svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block;max-width:100%">
      <rect width="${W}" height="${H}" rx="8" fill="#111d28"/>
      ${gridLines}
      ${bars}
      ${values}
      ${labels}
    </svg>
  </div>`;
}

export async function handleDashboard(_req: Request): Promise<Response> {
  const [scoreData, history] = await Promise.all([fetchGeoScore(), fetchScoreHistory()]);

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "2-digit", minute: "2-digit", timeZoneName: "short",
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dev Dashboard - Instant Recall</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,sans-serif;background:#0f1923;color:#e8e8e8;line-height:1.6;min-height:100vh}
    a{color:#00d4aa;text-decoration:none}
    a:hover{text-decoration:underline;color:#33e0be}

    .dash-header{background:linear-gradient(135deg,#0f1923 0%,#1a2a3a 100%);border-bottom:2px solid #00d4aa;padding:1.5rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
    .dash-header h1{font-size:1.5rem;font-weight:800;color:#fff;letter-spacing:.5px}
    .dash-header h1 span{color:#00d4aa}
    .dash-header-meta{text-align:right;font-size:.85rem;color:#8899aa}
    .env-badge{display:inline-block;padding:2px 10px;border-radius:12px;font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px}
    .env-staging{background:#ffd93d;color:#0f1923}
    .env-production{background:#00d4aa;color:#0f1923}

    .dash-container{max-width:1200px;margin:0 auto;padding:2rem}

    /* GEO Score hero */
    .geo-hero{display:flex;align-items:center;gap:2.5rem;flex-wrap:wrap;margin-bottom:2.5rem;padding:1.5rem;background:#111d28;border:1px solid #1a2a3a;border-radius:12px}
    .geo-hero-left{display:flex;flex-direction:column;align-items:center;min-width:200px}
    .geo-hero-label{font-size:.8rem;text-transform:uppercase;letter-spacing:1.5px;color:#556677;margin-bottom:.75rem}
    .geo-hero-right{flex:1;min-width:300px}
    .geo-hero-right h3{font-size:.8rem;text-transform:uppercase;letter-spacing:1.5px;color:#556677;margin-bottom:.75rem}

    /* Section */
    .dash-section{margin-bottom:2.5rem}
    .dash-section h2{font-size:1.2rem;font-weight:700;color:#00d4aa;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:1rem;padding-bottom:.5rem;border-bottom:1px solid #1a2a3a}

    /* Page cards grid */
    .page-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem}
    .page-card{background:#1a2a3a;border:1px solid #253545;border-radius:8px;padding:1.25rem;transition:border-color .2s,box-shadow .2s}
    .page-card:hover{border-color:#00d4aa;box-shadow:0 4px 20px rgba(0,212,170,.1)}
    .page-card h3{font-size:1rem;font-weight:600;color:#fff;margin-bottom:.25rem}
    .page-card .route{font-family:"SF Mono",Monaco,Consolas,monospace;font-size:.8rem;color:#00d4aa;margin-bottom:.5rem;display:block}
    .page-card .desc{font-size:.85rem;color:#8899aa;margin-bottom:.75rem}
    .badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px}
    .badge-live{background:#00d4aa;color:#0f1923}
    .badge-progress{background:#ffd93d;color:#0f1923}

    /* GEO Ledger featured card */
    .page-card.featured{border-color:#00d4aa;background:linear-gradient(135deg,#1a2a3a 0%,#0f2a2a 100%)}
    .page-card.featured h3{color:#00d4aa;font-size:1.1rem}

    .dash-footer{text-align:center;padding:2rem;font-size:.8rem;color:#556677;border-top:1px solid #1a2a3a;margin-top:2rem}

    @media(max-width:600px){
      .dash-header{flex-direction:column;align-items:flex-start}
      .dash-header-meta{text-align:left}
      .page-grid{grid-template-columns:1fr}
      .geo-hero{flex-direction:column;align-items:stretch}
      .geo-hero-right{min-width:0}
    }
  </style>
  <script>
    document.addEventListener("DOMContentLoaded",function(){
      var host=window.location.hostname;
      var badge=document.getElementById("env-badge");
      if(host==="www.instantrecall.com"||host==="instantrecall.com"){
        badge.textContent="Production";badge.className="env-badge env-production";
      } else {
        badge.textContent="Staging";badge.className="env-badge env-staging";
      }
      var dt=document.getElementById("live-datetime");
      function tick(){var d=new Date();dt.textContent=d.toLocaleString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});}
      tick();setInterval(tick,1000);
    });
  </script>
</head>
<body>

<div class="dash-header">
  <h1>Instant Recall <span>Dev Dashboard</span></h1>
  <div class="dash-header-meta">
    <div id="live-datetime">${dateStr} ${timeStr}</div>
    <span id="env-badge" class="env-badge env-staging">Staging</span>
  </div>
</div>

<div class="dash-container">

  <!-- GEO SCORE HERO -->
  <div class="geo-hero">
    <div class="geo-hero-left">
      <div class="geo-hero-label">GEO Composite Score</div>
      ${renderGauge(scoreData.composite)}
    </div>
    <div class="geo-hero-right">
      <h3>Score Trend</h3>
      ${renderColumnChart(history, scoreData.composite)}
    </div>
  </div>

  <!-- SITE PAGES -->
  <div class="dash-section">
    <h2>Site Pages</h2>
    <div class="page-grid">
      <a href="/geo-ledger" class="page-card featured" style="text-decoration:none;color:inherit">
        <h3>GEO Ledger</h3>
        <span class="route">/geo-ledger</span>
        <div class="desc">GEO implementation ledger, signal tracking, and score history.</div>
        <span class="badge badge-live">Live</span>
      </a>
      <a href="/crawl-stats" class="page-card featured" style="text-decoration:none;color:inherit">
        <h3>Crawl Stats</h3>
        <span class="route">/crawl-stats</span>
        <div class="desc">Bot crawl logging, AI vs search vs social breakdown, hourly chart.</div>
        <span class="badge badge-live">Live</span>
      </a>
      <div class="page-card">
        <h3>Homepage</h3>
        <a href="/" class="route">/</a>
        <div class="desc">Main landing page. Company overview, value proposition, call to action.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Solution</h3>
        <a href="/solution" class="route">/solution</a>
        <div class="desc">Recall preparedness and response platform details.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Contact</h3>
        <a href="/contact-instant-recall" class="route">/contact-instant-recall</a>
        <div class="desc">Contact form and company address information.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>About Us</h3>
        <a href="/about-us" class="route">/about-us</a>
        <div class="desc">Company history, mission, and team background.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Portal (Login)</h3>
        <a href="/portal" class="route">/portal</a>
        <div class="desc">Client login portal for recall management.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Privacy Policy</h3>
        <a href="/privacy-policy" class="route">/privacy-policy</a>
        <div class="desc">Data handling, cookies, and privacy practices.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Terms &amp; Conditions</h3>
        <a href="/terms-and-conditions" class="route">/terms-and-conditions</a>
        <div class="desc">Terms of service and usage agreement.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>For AI</h3>
        <a href="/for-ai" class="route">/for-ai</a>
        <div class="desc">Machine-readable summary page for AI discovery.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Recall Communications</h3>
        <a href="/incident-response" class="route">/incident-response</a>
        <div class="desc">24/7/365 expert recall team, multi-channel notification, real-time visibility.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Regulatory Reporting</h3>
        <a href="/cost-recovery" class="route">/cost-recovery</a>
        <div class="desc">Audit-ready documentation, automated FDA/USDA reporting, cost recovery tracking.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Technology Prowess</h3>
        <a href="/technology-prowess" class="route">/technology-prowess</a>
        <div class="desc">Purpose-built recall infrastructure, mobile portals, automated escalation.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Industry Gold Standard</h3>
        <a href="/industry-standard" class="route">/industry-standard</a>
        <div class="desc">Trusted by the world's leading food companies for 20+ years.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Customer Testimonials</h3>
        <a href="/customer-quotes-solutions" class="route">/customer-quotes-solutions</a>
        <div class="desc">What Performance Food Group, US Foods, Chick-fil-A, Casey's, and others say.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Support Request</h3>
        <a href="/support-request" class="route">/support-request</a>
        <div class="desc">Client support form. Processed within 1 business day.</div>
        <span class="badge badge-live">Live</span>
      </div>
    </div>
  </div>

  <!-- RESEARCH PAGES -->
  <div class="dash-section">
    <h2>Research</h2>
    <div class="page-grid">
      <div class="page-card">
        <h3>Research Hub</h3>
        <a href="/research" class="route">/research</a>
        <div class="desc">Index page linking to all research reports.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Legal Case Data</h3>
        <a href="/research/legal-case-data" class="route">/research/legal-case-data</a>
        <div class="desc">Major recall lawsuits, post-sale duty to warn, CPSC enforcement, class action settlements.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Industry Survey</h3>
        <a href="/research/industry-survey" class="route">/research/industry-survey</a>
        <div class="desc">Competitive landscape, market size, consumer pain points, international systems.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Regulatory Environment</h3>
        <a href="/research/regulatory-environment" class="route">/research/regulatory-environment</a>
        <div class="desc">Federal agencies (CPSC, FDA, NHTSA, USDA), legislation, enforcement, and penalties.</div>
        <span class="badge badge-live">Live</span>
      </div>
    </div>
  </div>

</div>

<div class="dash-footer">
  Instant Recall Dev Dashboard. Internal use only. Not indexed by search engines.
</div>

</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=300",
    },
  });
}
