export function renderDashboard(): string {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return `<!DOCTYPE html>
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

    /* Header */
    .dash-header{background:linear-gradient(135deg,#0f1923 0%,#1a2a3a 100%);border-bottom:2px solid #00d4aa;padding:1.5rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
    .dash-header h1{font-size:1.5rem;font-weight:800;color:#fff;letter-spacing:.5px}
    .dash-header h1 span{color:#00d4aa}
    .dash-header-meta{text-align:right;font-size:.85rem;color:#8899aa}
    .env-badge{display:inline-block;padding:2px 10px;border-radius:12px;font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px}
    .env-staging{background:#ffd93d;color:#0f1923}
    .env-production{background:#00d4aa;color:#0f1923}

    /* Main container */
    .dash-container{max-width:1200px;margin:0 auto;padding:2rem}

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
    .badge-planned{background:#556677;color:#ccc}

    /* AI surfaces table */
    .ai-table{width:100%;border-collapse:collapse}
    .ai-table th,.ai-table td{text-align:left;padding:.6rem 1rem;border-bottom:1px solid #1a2a3a}
    .ai-table th{font-size:.75rem;text-transform:uppercase;letter-spacing:1px;color:#556677;font-weight:600}
    .ai-table td{font-size:.9rem}
    .ai-table td a{font-family:"SF Mono",Monaco,Consolas,monospace;font-size:.85rem}
    .status-pass{color:#00d4aa;font-weight:700}
    .status-fail{color:#ff6b6b;font-weight:700}
    .status-skip{color:#ffd93d;font-weight:700}

    /* GEO section */
    .geo-signals{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.75rem;margin-top:1rem}
    .geo-signal{background:#1a2a3a;border:1px solid #253545;border-radius:6px;padding:.75rem 1rem;display:flex;justify-content:space-between;align-items:center;font-size:.85rem}
    .geo-signal .name{color:#ccc}

    /* Quick actions */
    .actions-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1rem}
    .action-card{background:#1a2a3a;border:1px solid #253545;border-radius:8px;padding:1.25rem}
    .action-card h3{font-size:.95rem;color:#fff;margin-bottom:.5rem}
    .action-card p,.action-card code{font-size:.85rem;color:#8899aa}
    .action-card code{display:block;background:#0f1923;padding:.5rem .75rem;border-radius:4px;margin-top:.5rem;font-family:"SF Mono",Monaco,Consolas,monospace;font-size:.8rem;color:#00d4aa;overflow-x:auto}

    /* Checklist */
    .checklist{list-style:none;padding:0}
    .checklist li{padding:.5rem 0;border-bottom:1px solid #1a2a3a;font-size:.9rem;display:flex;align-items:center;gap:.5rem}
    .check-done{color:#00d4aa}
    .check-todo{color:#556677}
    .check-label-done{color:#ccc}
    .check-label-todo{color:#8899aa}

    /* Footer */
    .dash-footer{text-align:center;padding:2rem;font-size:.8rem;color:#556677;border-top:1px solid #1a2a3a;margin-top:2rem}

    @media(max-width:600px){
      .dash-header{flex-direction:column;align-items:flex-start}
      .dash-header-meta{text-align:left}
      .page-grid{grid-template-columns:1fr}
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

  <!-- SITE PAGES -->
  <div class="dash-section">
    <h2>Site Pages</h2>
    <div class="page-grid">
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
        <h3>GEO Ledger</h3>
        <a href="/geo-ledger" class="route">/geo-ledger</a>
        <div class="desc">GEO implementation ledger, signal tracking, and score history.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Stop Page</h3>
        <a href="/stop" class="route">/stop</a>
        <div class="desc">Emergency stop/redirect page.</div>
        <span class="badge badge-live">Live</span>
      </div>
      <div class="page-card">
        <h3>Dashboard</h3>
        <a href="/dashboard" class="route">/dashboard</a>
        <div class="desc">This page. Dev navigation hub and build status.</div>
        <span class="badge badge-live">Live</span>
      </div>
    </div>
  </div>

  <!-- AI SURFACES -->
  <div class="dash-section">
    <h2>AI Surfaces</h2>
    <table class="ai-table">
      <thead>
        <tr><th>Surface</th><th>Endpoint</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr><td>robots.txt</td><td><a href="/robots.txt">/robots.txt</a></td><td class="status-pass">PASS</td></tr>
        <tr><td>llms.txt</td><td><a href="/llms.txt">/llms.txt</a></td><td class="status-pass">PASS</td></tr>
        <tr><td>llms-full.txt</td><td><a href="/llms-full.txt">/llms-full.txt</a></td><td class="status-pass">PASS</td></tr>
        <tr><td>sitemap.xml</td><td><a href="/sitemap.xml">/sitemap.xml</a></td><td class="status-pass">PASS</td></tr>
        <tr><td>ai-content-index.json</td><td><a href="/ai-content-index.json">/ai-content-index.json</a></td><td class="status-pass">PASS</td></tr>
        <tr><td>for-ai.txt</td><td><a href="/for-ai.txt">/for-ai.txt</a></td><td class="status-pass">PASS</td></tr>
        <tr><td>JSON-LD</td><td>All pages</td><td class="status-pass">PASS</td></tr>
        <tr><td>Link Headers</td><td>All responses</td><td class="status-pass">PASS</td></tr>
        <tr><td>MCP</td><td>--</td><td class="status-skip">SKIPPED</td></tr>
      </tbody>
    </table>
  </div>

  <!-- GEO LEDGER -->
  <div class="dash-section">
    <h2>GEO Ledger</h2>
    <p style="margin-bottom:1rem"><a href="/geo-ledger" style="font-size:1.1rem;font-weight:600">Open GEO Ledger</a></p>
    <div class="geo-signals">
      <div class="geo-signal"><span class="name">robots.txt</span><span class="status-pass">PASS</span></div>
      <div class="geo-signal"><span class="name">llms.txt</span><span class="status-pass">PASS</span></div>
      <div class="geo-signal"><span class="name">Sitemap</span><span class="status-pass">PASS</span></div>
      <div class="geo-signal"><span class="name">Structured Data</span><span class="status-pass">PASS</span></div>
      <div class="geo-signal"><span class="name">Content Index</span><span class="status-pass">PASS</span></div>
      <div class="geo-signal"><span class="name">Link Headers</span><span class="status-pass">PASS</span></div>
      <div class="geo-signal"><span class="name">for-ai.txt</span><span class="status-pass">PASS</span></div>
      <div class="geo-signal"><span class="name">MCP</span><span class="status-skip">SKIPPED</span></div>
    </div>
    <p style="margin-top:1rem;font-size:.85rem;color:#8899aa">
      Supabase project:
      <a href="https://supabase.com/dashboard/project/dewbyvlbmkersxjrcknm" target="_blank" rel="noopener">dewbyvlbmkersxjrcknm</a>
    </p>
  </div>

  <!-- QUICK ACTIONS -->
  <div class="dash-section">
    <h2>Quick Actions</h2>
    <div class="actions-grid">
      <div class="action-card">
        <h3>GitHub Repo</h3>
        <p><a href="https://github.com/rjmjr1962831/ir" target="_blank" rel="noopener">rjmjr1962831/ir</a></p>
      </div>
      <div class="action-card">
        <h3>Vercel Project</h3>
        <p><a href="https://vercel.com" target="_blank" rel="noopener">Open Vercel Dashboard</a></p>
      </div>
      <div class="action-card">
        <h3>Supabase Dashboard</h3>
        <p><a href="https://supabase.com/dashboard/project/dewbyvlbmkersxjrcknm" target="_blank" rel="noopener">Open Supabase</a></p>
      </div>
      <div class="action-card">
        <h3>Deploy to Staging</h3>
        <code>git push origin staging</code>
        <p style="margin-top:.5rem">Vercel auto-deploys staging branch to preview URL.</p>
      </div>
      <div class="action-card">
        <h3>Deploy to Production</h3>
        <code>npm run merge-to-main</code>
        <p style="margin-top:.5rem">Merges staging to main. Vercel auto-deploys main to production.</p>
      </div>
    </div>
  </div>

  <!-- BUILD STATUS -->
  <div class="dash-section">
    <h2>Build Status</h2>
    <ul class="checklist">
      <li><span class="check-done">&#10003;</span> <span class="check-label-done">Clean-room HTML architecture</span></li>
      <li><span class="check-done">&#10003;</span> <span class="check-label-done">robots.txt</span></li>
      <li><span class="check-done">&#10003;</span> <span class="check-label-done">llms.txt + llms-full.txt</span></li>
      <li><span class="check-done">&#10003;</span> <span class="check-label-done">sitemap.xml</span></li>
      <li><span class="check-done">&#10003;</span> <span class="check-label-done">ai-content-index.json</span></li>
      <li><span class="check-done">&#10003;</span> <span class="check-label-done">for-ai.txt</span></li>
      <li><span class="check-done">&#10003;</span> <span class="check-label-done">JSON-LD on all pages</span></li>
      <li><span class="check-done">&#10003;</span> <span class="check-label-done">Link headers</span></li>
      <li><span class="check-done">&#10003;</span> <span class="check-label-done">GEO Ledger</span></li>
      <li><span class="check-todo">&#9744;</span> <span class="check-label-todo">Page content rendering (actual recall data)</span></li>
      <li><span class="check-todo">&#9744;</span> <span class="check-label-todo">Consumer notification flow</span></li>
      <li><span class="check-todo">&#9744;</span> <span class="check-label-todo">Product registration/scanning</span></li>
      <li><span class="check-todo">&#9744;</span> <span class="check-label-todo">Multi-agency recall ingestion</span></li>
      <li><span class="check-todo">&#9744;</span> <span class="check-label-todo">Push notification system</span></li>
      <li><span class="check-todo">&#9744;</span> <span class="check-label-todo">B2B portal</span></li>
      <li><span class="check-todo">&#9744;</span> <span class="check-label-todo">Custom domain (instantrecall.com)</span></li>
    </ul>
  </div>

</div>

<div class="dash-footer">
  Instant Recall Dev Dashboard. Internal use only. Not indexed by search engines.
</div>

</body>
</html>`;
}
