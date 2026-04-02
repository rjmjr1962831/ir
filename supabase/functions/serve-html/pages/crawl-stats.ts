const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "https://dewbyvlbmkersxjrcknm.supabase.co";
const SUPABASE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

interface CrawlRow {
  bot: string;
  path: string;
  ts: string;
  ua: string;
  status: number;
  ip: string;
}

async function query(sql: string): Promise<CrawlRow[]> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/`, {
    method: "POST",
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ name: sql }),
  });
  if (res.ok) return await res.json();
  return [];
}

async function fetchRows(endpoint: string): Promise<CrawlRow[]> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${endpoint}`, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
  });
  if (!res.ok) return [];
  return await res.json();
}

function scoreColor(n: number): string {
  if (n >= 50) return "#00afec";
  if (n >= 10) return "#e6a817";
  return "#d94040";
}

export async function handleCrawlStats(_req: Request): Promise<Response> {
  const now = new Date();
  const h24 = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
  const h7d = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const h30d = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();

  // Fetch all crawls from last 30 days (should be manageable volume for a new site)
  const allRows = await fetchRows(
    `crawl_log?select=bot,path,ts,status&order=ts.desc&ts=gte.${h30d}&limit=5000`
  );

  // Last 50 raw entries for the live feed
  const recentRows = await fetchRows(
    `crawl_log?select=bot,path,ts,ua,status,ip&order=ts.desc&limit=50`
  );

  // Compute stats
  const last24h = allRows.filter(r => r.ts >= h24);
  const last7d = allRows.filter(r => r.ts >= h7d);

  // Bot counts (24h)
  const botCounts24: Record<string, number> = {};
  for (const r of last24h) {
    botCounts24[r.bot] = (botCounts24[r.bot] || 0) + 1;
  }

  // Bot counts (7d)
  const botCounts7d: Record<string, number> = {};
  for (const r of last7d) {
    botCounts7d[r.bot] = (botCounts7d[r.bot] || 0) + 1;
  }

  // Bot counts (30d)
  const botCounts30d: Record<string, number> = {};
  for (const r of allRows) {
    botCounts30d[r.bot] = (botCounts30d[r.bot] || 0) + 1;
  }

  // Path counts (24h)
  const pathCounts24: Record<string, number> = {};
  for (const r of last24h) {
    pathCounts24[r.path] = (pathCounts24[r.path] || 0) + 1;
  }

  // Path counts (7d)
  const pathCounts7d: Record<string, number> = {};
  for (const r of last7d) {
    pathCounts7d[r.path] = (pathCounts7d[r.path] || 0) + 1;
  }

  // AI vs search vs social vs other
  const AI_BOTS = new Set(["GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-Web", "Anthropic", "PerplexityBot", "Gemini", "Google-Extended", "Cohere", "YouBot", "AI2Bot", "CCBot"]);
  const SEARCH_BOTS = new Set(["Googlebot", "Bingbot", "Applebot", "DuckDuckBot", "YandexBot", "Baiduspider", "Bytespider", "Amazonbot"]);
  const SOCIAL_BOTS = new Set(["Facebook", "Twitterbot", "LinkedInBot", "Slackbot", "Discordbot", "WhatsApp"]);

  function classify(bot: string): string {
    if (AI_BOTS.has(bot)) return "AI";
    if (SEARCH_BOTS.has(bot)) return "Search";
    if (SOCIAL_BOTS.has(bot)) return "Social";
    return "Other";
  }

  const categories24: Record<string, number> = { AI: 0, Search: 0, Social: 0, Other: 0 };
  for (const r of last24h) {
    categories24[classify(r.bot)] += 1;
  }

  // Hourly chart data (last 24h)
  const hourlyBuckets: Record<string, number> = {};
  for (let i = 23; i >= 0; i--) {
    const h = new Date(now.getTime() - i * 60 * 60 * 1000);
    const key = h.toISOString().slice(0, 13);
    hourlyBuckets[key] = 0;
  }
  for (const r of last24h) {
    const key = r.ts.slice(0, 13);
    if (key in hourlyBuckets) hourlyBuckets[key]++;
  }

  // Sort helpers
  const sortedBots24 = Object.entries(botCounts24).sort((a, b) => b[1] - a[1]);
  const sortedBots7d = Object.entries(botCounts7d).sort((a, b) => b[1] - a[1]);
  const sortedBots30d = Object.entries(botCounts30d).sort((a, b) => b[1] - a[1]);
  const sortedPaths24 = Object.entries(pathCounts24).sort((a, b) => b[1] - a[1]);
  const sortedPaths7d = Object.entries(pathCounts7d).sort((a, b) => b[1] - a[1]);

  // Build hourly chart SVG
  const hourlyEntries = Object.entries(hourlyBuckets);
  const maxHourly = Math.max(...hourlyEntries.map(e => e[1]), 1);
  const W = 700, H = 200, PAD_L = 40, PAD_R = 10, PAD_T = 20, PAD_B = 35;
  const plotW = W - PAD_L - PAD_R;
  const plotH = H - PAD_T - PAD_B;
  const barW = Math.floor(plotW / 24) - 2;

  let chartBars = "";
  let chartLabels = "";
  hourlyEntries.forEach(([key, count], i) => {
    const x = PAD_L + i * (barW + 2);
    const barH = (count / maxHourly) * plotH;
    const y = PAD_T + plotH - barH;
    const color = count > 0 ? "#00afec" : "#e0e0e0";
    chartBars += `<rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="2" fill="${color}" opacity="0.85"/>`;
    if (count > 0) {
      chartBars += `<text x="${x + barW / 2}" y="${y - 4}" text-anchor="middle" fill="#272727" font-size="9" font-weight="700">${count}</text>`;
    }
    if (i % 4 === 0) {
      const hour = key.slice(11, 13) + ":00";
      chartLabels += `<text x="${x + barW / 2}" y="${H - PAD_B + 14}" text-anchor="middle" fill="#888888" font-size="9">${hour}</text>`;
    }
  });

  const chartSvg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="display:block;max-width:100%">
    <rect width="${W}" height="${H}" rx="8" fill="#f8f8f8"/>
    <line x1="${PAD_L}" y1="${PAD_T + plotH}" x2="${W - PAD_R}" y2="${PAD_T + plotH}" stroke="#e0e0e0" stroke-width="1"/>
    ${chartBars}
    ${chartLabels}
  </svg>`;

  // Render bot table
  function botTable(entries: [string, number][], label: string): string {
    if (entries.length === 0) return `<p style="color:#888888;font-size:.85rem">No crawls recorded for ${label}.</p>`;
    return `<table><thead><tr><th>Bot</th><th>Type</th><th>Crawls</th></tr></thead><tbody>${
      entries.map(([bot, count]) => {
        const cat = classify(bot);
        const catColor = cat === "AI" ? "#00afec" : cat === "Search" ? "#e6a817" : cat === "Social" ? "#7c5cbf" : "#888888";
        return `<tr><td>${bot}</td><td><span style="color:${catColor};font-weight:600;font-size:.8rem">${cat}</span></td><td style="text-align:right;font-weight:800">${count}</td></tr>`;
      }).join("")
    }</tbody></table>`;
  }

  // Render path table
  function pathTable(entries: [string, number][]): string {
    if (entries.length === 0) return `<p style="color:#888888;font-size:.85rem">No crawls recorded.</p>`;
    return `<table><thead><tr><th>Path</th><th>Crawls</th></tr></thead><tbody>${
      entries.slice(0, 20).map(([path, count]) =>
        `<tr><td><a href="${path}" style="color:#00afec">${path}</a></td><td style="text-align:right;font-weight:800">${count}</td></tr>`
      ).join("")
    }</tbody></table>`;
  }

  // Recent feed
  const feedRows = recentRows.map(r => {
    const t = new Date(r.ts);
    const timeStr = t.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
    const dateStr = t.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const cat = classify(r.bot);
    const catColor = cat === "AI" ? "#00afec" : cat === "Search" ? "#e6a817" : cat === "Social" ? "#7c5cbf" : "#888888";
    return `<tr>
      <td style="white-space:nowrap;font-size:.8rem;color:#888888">${dateStr} ${timeStr}</td>
      <td><span style="color:${catColor};font-weight:600">${r.bot}</span></td>
      <td><a href="${r.path}" style="color:#00afec;font-size:.85rem">${r.path}</a></td>
      <td style="text-align:center">${r.status === 200 ? '<span style="color:#2e8b57">200</span>' : `<span style="color:#d94040">${r.status}</span>`}</td>
    </tr>`;
  }).join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crawl Stats - Instant Recall</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:#ffffff;color:#3e3e3e;line-height:1.6;min-height:100vh}
    a{color:#00afec;text-decoration:none}
    a:hover{text-decoration:underline;color:#008ecc}

    .dash-header{background:#272727;border-bottom:2px solid #00afec;padding:1.5rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
    .dash-header h1{font-size:1.5rem;font-weight:800;color:#ffffff}
    .dash-header h1 span{color:#00afec}
    .dash-header-meta{text-align:right;font-size:.85rem;color:#cccccc}
    .dash-header-nav{display:flex;gap:1rem;font-size:.85rem}
    .dash-header-nav a{color:#cccccc;font-weight:500}
    .dash-header-nav a:hover{color:#00afec;text-decoration:none}

    .container{max-width:1200px;margin:0 auto;padding:2rem}

    .stats-hero{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin-bottom:2rem}
    .stat-card{background:#f8f8f8;border:1px solid #e0e0e0;border-radius:8px;padding:1.25rem;text-align:center}
    .stat-card .stat-value{font-size:2rem;font-weight:800;color:#00afec}
    .stat-card .stat-label{font-size:.75rem;text-transform:uppercase;letter-spacing:1.5px;color:#888888;margin-top:.25rem}

    .section{margin-bottom:2.5rem}
    .section h2{font-size:1.1rem;font-weight:700;color:#272727;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:1rem;padding-bottom:.5rem;border-bottom:1px solid #e0e0e0}

    .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem}

    table{width:100%;border-collapse:collapse;font-size:.9rem}
    th{text-align:left;padding:.5rem .75rem;color:#888888;font-size:.75rem;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #e0e0e0}
    td{padding:.45rem .75rem;border-bottom:1px solid #f0f0f0;color:#3e3e3e}
    tr:hover td{background:#f5f5f5}

    .chart-wrap{background:#f8f8f8;border:1px solid #e0e0e0;border-radius:8px;padding:1rem;margin-bottom:1.5rem}

    .category-bar{display:flex;height:24px;border-radius:4px;overflow:hidden;margin-bottom:.5rem}
    .category-bar div{display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#ffffff}
    .cat-legend{display:flex;gap:1.5rem;font-size:.8rem;color:#666666;flex-wrap:wrap}
    .cat-legend span{display:flex;align-items:center;gap:.35rem}
    .cat-dot{width:10px;height:10px;border-radius:50%;display:inline-block}

    .footer{text-align:center;padding:2rem;font-size:.8rem;color:#888888;border-top:1px solid #e0e0e0;margin-top:2rem}

    @media(max-width:768px){
      .grid-2{grid-template-columns:1fr}
      .stats-hero{grid-template-columns:repeat(2,1fr)}
    }
  </style>
</head>
<body>

<div class="dash-header">
  <h1>Instant Recall <span>Crawl Stats</span></h1>
  <div class="dash-header-nav">
    <a href="/dashboard">Dashboard</a>
    <a href="/geo-ledger">GEO Ledger</a>
  </div>
</div>

<div class="container">

  <!-- Hero stats -->
  <div class="stats-hero">
    <div class="stat-card">
      <div class="stat-value">${last24h.length}</div>
      <div class="stat-label">Last 24 Hours</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${last7d.length}</div>
      <div class="stat-label">Last 7 Days</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${allRows.length}</div>
      <div class="stat-label">Last 30 Days</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${sortedBots30d.length}</div>
      <div class="stat-label">Unique Bots</div>
    </div>
    <div class="stat-card">
      <div class="stat-value" style="color:${scoreColor(categories24.AI)}">${categories24.AI}</div>
      <div class="stat-label">AI Crawls (24h)</div>
    </div>
  </div>

  <!-- Category breakdown -->
  <div class="section">
    <h2>Crawl Categories (24h)</h2>
    ${last24h.length > 0 ? `
    <div class="category-bar">
      ${categories24.AI > 0 ? `<div style="width:${(categories24.AI / last24h.length * 100).toFixed(1)}%;background:#00afec">${categories24.AI}</div>` : ""}
      ${categories24.Search > 0 ? `<div style="width:${(categories24.Search / last24h.length * 100).toFixed(1)}%;background:#e6a817">${categories24.Search}</div>` : ""}
      ${categories24.Social > 0 ? `<div style="width:${(categories24.Social / last24h.length * 100).toFixed(1)}%;background:#7c5cbf">${categories24.Social}</div>` : ""}
      ${categories24.Other > 0 ? `<div style="width:${(categories24.Other / last24h.length * 100).toFixed(1)}%;background:#aaaaaa">${categories24.Other}</div>` : ""}
    </div>
    ` : '<p style="color:#888888;font-size:.85rem">No crawls in the last 24 hours.</p>'}
    <div class="cat-legend">
      <span><span class="cat-dot" style="background:#00afec"></span> AI (${categories24.AI})</span>
      <span><span class="cat-dot" style="background:#e6a817"></span> Search (${categories24.Search})</span>
      <span><span class="cat-dot" style="background:#7c5cbf"></span> Social (${categories24.Social})</span>
      <span><span class="cat-dot" style="background:#aaaaaa"></span> Other (${categories24.Other})</span>
    </div>
  </div>

  <!-- Hourly chart -->
  <div class="section">
    <h2>Crawls Per Hour (24h)</h2>
    <div class="chart-wrap">${chartSvg}</div>
  </div>

  <!-- Bot and path tables -->
  <div class="grid-2">
    <div class="section">
      <h2>Bots (24h)</h2>
      ${botTable(sortedBots24, "the last 24 hours")}
    </div>
    <div class="section">
      <h2>Pages Crawled (24h)</h2>
      ${pathTable(sortedPaths24)}
    </div>
  </div>

  <div class="grid-2">
    <div class="section">
      <h2>Bots (7 Days)</h2>
      ${botTable(sortedBots7d, "the last 7 days")}
    </div>
    <div class="section">
      <h2>Pages Crawled (7 Days)</h2>
      ${pathTable(sortedPaths7d)}
    </div>
  </div>

  <div class="section">
    <h2>All Bots (30 Days)</h2>
    ${botTable(sortedBots30d, "the last 30 days")}
  </div>

  <!-- Live feed -->
  <div class="section">
    <h2>Recent Crawls (Last 50)</h2>
    <table>
      <thead><tr><th>Time</th><th>Bot</th><th>Path</th><th>Status</th></tr></thead>
      <tbody>${feedRows || '<tr><td colspan="4" style="color:#888888;text-align:center;padding:1rem">No crawls recorded yet.</td></tr>'}</tbody>
    </table>
  </div>

</div>

<div class="footer">
  Instant Recall Crawl Stats. Internal use only. Not indexed by search engines.
</div>

</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
