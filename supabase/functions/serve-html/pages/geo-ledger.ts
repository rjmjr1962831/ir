import { CSS } from "../shared/styles.ts";

const LEDGER_CSS = `
${CSS}

/* Ledger report styles */
.ledger-hero{background:linear-gradient(135deg,#1a1a2e 0%,#2d2d4e 100%);color:#fff;padding:2.5rem 2rem;text-align:center}
.ledger-hero h1{font-size:2rem;font-weight:800;margin-bottom:.5rem;letter-spacing:.5px}
.ledger-hero .subtitle{font-size:1rem;opacity:.8;margin-bottom:0}

.ledger{max-width:960px;margin:0 auto;padding:2rem}

.meta-block{background:#f8f9fa;border:1px solid #e0e0e0;border-radius:8px;padding:1.25rem 1.5rem;margin-bottom:2rem;font-size:.9rem;color:#444;line-height:1.8}
.meta-block strong{color:#1a1a2e}

/* GEO Score block */
.geo-score-block{background:linear-gradient(135deg,#0d47a1 0%,#1565c0 100%);color:#fff;border-radius:12px;padding:2rem;margin-bottom:2rem;display:flex;align-items:flex-start;gap:2rem;flex-wrap:wrap}
.geo-score-left{flex:1;min-width:200px}
.geo-score-label{font-size:.85rem;text-transform:uppercase;letter-spacing:1px;opacity:.8;margin-bottom:.5rem}
.geo-score-value{font-size:3.5rem;font-weight:800;line-height:1}
.geo-score-max{font-size:1.5rem;font-weight:400;opacity:.6}
.geo-score-note{font-size:.85rem;opacity:.7;margin-top:.5rem}
.score-chart{display:flex;align-items:flex-end;gap:1.5rem;height:200px;padding:0 1rem}
.score-col{display:flex;flex-direction:column;align-items:center;gap:.25rem}
.score-col-bar{width:60px;border-radius:4px 4px 0 0;transition:height .3s ease;min-height:4px}
.score-col-value{font-size:.85rem;font-weight:700;color:#fff}
.score-col-date{font-size:.75rem;color:rgba(255,255,255,.7)}
.score-col-label{font-size:.7rem;color:rgba(255,255,255,.5);max-width:80px;text-align:center}
.bar-red{background:#ef5350}
.bar-yellow{background:#ffa726}
.bar-green{background:#66bb6a}

/* How section in entries */
.entry-body .how-section{background:#f0f7ff;border:1px solid #d0e3f7;border-radius:6px;padding:1rem 1.25rem;margin:.75rem 0}
.entry-body .how-section h4{color:#0d47a1;margin-top:0}
.entry-body .how-section ol{padding-left:1.5rem;margin:.5rem 0}
.entry-body .how-section ol li{font-size:.85rem;color:#333;line-height:1.7;margin-bottom:.35rem}
.entry-body .pending-section{background:#fff8e1;border:1px solid #ffe082;border-radius:6px;padding:1rem 1.25rem;margin:.75rem 0}
.entry-body .pending-section h4{color:#e65100;margin-top:0}
.entry-body .pending-section ul{padding-left:1.25rem;margin:.5rem 0}
.entry-body .pending-section ul li{font-size:.85rem;color:#333;line-height:1.7;margin-bottom:.35rem}

/* Summary table */
.summary-section h2{font-size:1.4rem;color:#1a1a2e;margin-bottom:1rem;font-weight:700;border-bottom:2px solid #0d47a1;padding-bottom:.5rem}
.summary-table{width:100%;border-collapse:collapse;margin-bottom:2rem;font-size:.9rem}
.summary-table th{background:#1a1a2e;color:#fff;padding:.6rem .75rem;text-align:left;font-weight:600;font-size:.8rem;text-transform:uppercase;letter-spacing:.5px}
.summary-table td{padding:.6rem .75rem;border-bottom:1px solid #e0e0e0}
.summary-table tr:hover{background:#f5f7fa}
.status-pass{background:#e8f5e9;color:#2e7d32;font-weight:700;border-radius:3px;padding:2px 8px;display:inline-block;font-size:.8rem}
.status-fail{background:#ffebee;color:#c62828;font-weight:700;border-radius:3px;padding:2px 8px;display:inline-block;font-size:.8rem}


/* Entries */
.entries-section h2{font-size:1.4rem;color:#1a1a2e;margin-bottom:1rem;font-weight:700;border-bottom:2px solid #0d47a1;padding-bottom:.5rem}
.entry{border:1px solid #e0e0e0;border-radius:8px;margin-bottom:1.5rem;overflow:hidden}
.entry-header{background:#f0f4f8;padding:.75rem 1.25rem;display:flex;align-items:center;gap:.75rem;flex-wrap:wrap}
.entry-date{font-weight:700;color:#1a1a2e;font-size:.95rem}
.entry-category{background:#0d47a1;color:#fff;font-size:.75rem;font-weight:600;padding:2px 10px;border-radius:12px;text-transform:uppercase;letter-spacing:.5px}
.entry-body{padding:1.25rem}
.entry-body h4{font-size:.85rem;text-transform:uppercase;letter-spacing:.5px;color:#0d47a1;margin:1rem 0 .35rem;font-weight:700}
.entry-body h4:first-child{margin-top:0}
.entry-body p{font-size:.9rem;color:#444;line-height:1.65;margin-bottom:.5rem}
.entry-body ul{padding-left:1.25rem;margin-bottom:.5rem}
.entry-body li{font-size:.85rem;color:#444;line-height:1.6;margin-bottom:.25rem}
.entry-body code{background:#f0f0f0;padding:1px 5px;border-radius:3px;font-size:.8rem;word-break:break-all}
.entry-status{display:inline-block;font-size:.8rem;font-weight:600;padding:2px 10px;border-radius:3px;margin-top:.25rem}
.entry-status-deployed{background:#e8f5e9;color:#2e7d32}
.entry-status-pending{background:#fff3e0;color:#e65100}
.entry-status-blocked{background:#ffebee;color:#c62828}

/* Auth page */
.auth-wrap{display:flex;align-items:center;justify-content:center;min-height:80vh;padding:2rem}
.auth-box{background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:2.5rem;max-width:400px;width:100%;text-align:center;box-shadow:0 2px 12px rgba(0,0,0,.06)}
.auth-box h2{font-size:1.3rem;color:#1a1a2e;margin-bottom:.5rem}
.auth-box p{font-size:.9rem;color:#666;margin-bottom:1.5rem}
.auth-box input[type="text"]{width:100%;padding:.65rem .75rem;border:1px solid #ccc;border-radius:4px;font-size:.9rem;margin-bottom:1rem;box-sizing:border-box}
.auth-box input[type="text"]:focus{outline:none;border-color:#0d47a1;box-shadow:0 0 0 2px rgba(13,71,161,.15)}
.auth-box button{background:#0d47a1;color:#fff;border:none;padding:.65rem 1.5rem;border-radius:4px;font-size:.9rem;font-weight:600;cursor:pointer}
.auth-box button:hover{background:#1565c0}

/* Details/Summary expander styles */
details{border:1px solid #e0e0e0;border-radius:8px;margin-bottom:.75rem;overflow:hidden;transition:border-color .2s ease}
details[open]{border-color:#0d47a1;background:#fafbfd}
details summary{cursor:pointer;padding:.75rem 1.25rem;font-size:.9rem;font-weight:600;color:#1a1a2e;list-style:none;display:flex;align-items:center;gap:.75rem;flex-wrap:wrap;user-select:none;position:relative;padding-right:2.5rem}
details summary::-webkit-details-marker{display:none}
details summary::after{content:"";position:absolute;right:1rem;top:50%;transform:translateY(-50%) rotate(0deg);border:5px solid transparent;border-bottom:6px solid #666;transition:transform .2s ease}
details[open] summary::after{transform:translateY(-50%) rotate(180deg)}
details summary:hover{background:#f0f4f8}
details[open] summary{background:#e8edf4;border-bottom:1px solid #d0d8e4}
.details-body{padding:1.25rem}

/* Summary expander (wraps all signal cards) */
.summary-expander{border:none;margin-bottom:1.5rem}
.summary-expander>summary{padding:.5rem 0;padding-right:2rem;border-bottom:2px solid #0d47a1;margin-bottom:1rem}
.summary-expander>summary::after{border-top-color:#0d47a1}
.summary-expander[open]{background:transparent}
.summary-expander[open]>summary{background:transparent;border-bottom:2px solid #0d47a1}

/* Signal cards */
.signal-card{border:1px solid #e0e0e0;border-radius:8px;margin-bottom:.5rem}
.signal-card summary{display:flex;align-items:center;gap:.5rem;padding:.65rem 1rem;padding-right:2.5rem;font-size:.9rem}
.signal-card summary .signal-num{font-weight:700;color:#666;min-width:1.5rem}
.signal-card summary .signal-name{font-weight:700;color:#1a1a2e}
.signal-card summary .signal-def{font-weight:400;color:#666;font-size:.82rem;flex:1}
.signal-card summary .signal-touched{font-size:.8rem;color:#888;margin-left:auto;padding-right:1rem}
.signal-card .signal-detail{padding:1rem 1.25rem;font-size:.88rem;color:#444;line-height:1.7;border-top:1px solid #e8ecf0}
.signal-card .signal-detail p{margin:.4rem 0}
.signal-card .signal-detail strong{color:#1a1a2e}

/* Entry expander overrides */
.entry-expander{border:1px solid #e0e0e0;border-radius:8px;margin-bottom:1.5rem;overflow:hidden}
.entry-expander[open]{border-color:#0d47a1}
.entry-expander summary{background:#f0f4f8;padding:.75rem 1.25rem;padding-right:2.5rem;gap:.75rem}
.entry-expander[open] summary{background:#e8edf4;border-bottom:1px solid #d0d8e4}
.entry-expander .entry-action{flex:1;font-weight:400;color:#444;font-size:.88rem}


/* Dimension breakdown */
.dimensions-expander{border:none;margin-bottom:1.5rem;margin-top:1rem}
.dimensions-expander>summary{padding:.5rem 0;padding-right:2rem;border-bottom:2px solid rgba(255,255,255,.3);margin-bottom:1rem;color:#fff}
.dimensions-expander>summary::after{border-bottom-color:rgba(255,255,255,.6)}
.dimensions-expander[open]{background:transparent}
.dimensions-expander[open]>summary{background:transparent;border-bottom:2px solid rgba(255,255,255,.3)}
.dimensions-grid{display:flex;flex-direction:column;gap:.5rem}
.dim-row{display:grid;grid-template-columns:1fr 60px 50px 120px 60px;align-items:center;gap:.5rem;font-size:.85rem;color:rgba(255,255,255,.9);padding:.4rem .5rem;border-radius:4px;background:rgba(255,255,255,.06)}
.dim-row .dim-name{font-weight:600}
.dim-row .dim-weight{text-align:center;opacity:.7;font-size:.8rem}
.dim-row .dim-score{text-align:center;font-weight:700}
.dim-row .dim-bar{height:8px;border-radius:4px;background:rgba(255,255,255,.15);overflow:hidden}
.dim-row .dim-bar-fill{height:100%;border-radius:4px}
.dim-bar-green{background:#4caf50}
.dim-bar-yellow{background:#ff9800}
.dim-bar-red{background:#f44336}
.dim-row .dim-contrib{text-align:right;font-size:.8rem;opacity:.7}
.dim-notes{font-size:.78rem;color:rgba(255,255,255,.6);padding-left:.5rem;margin-top:-.15rem;margin-bottom:.25rem}

/* Footer override for dark bg */
.site-footer{margin-top:0}

@media(max-width:768px){
  .ledger-hero h1{font-size:1.5rem}
  .ledger{padding:1rem}
  .entry-header{flex-direction:column;align-items:flex-start;gap:.35rem}
  .summary-table{font-size:.8rem}
  details summary{padding-right:2rem;gap:.5rem}
  .signal-card summary .signal-touched{display:none}
}
`;

// --- Supabase client helpers ---

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SUPABASE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || Deno.env.get("SUPABASE_ANON_KEY") || "";

interface SignalRow {
  signal_num: number;
  signal_name: string;
  signal_def: string;
  status: string;
  date_last_touched: string | null;
  pass_requires: string;
  current_status_note: string | null;
}

interface EntryRow {
  id: number;
  entry_date: string;
  signal_category: string;
  action_summary: string;
  rationale: string | null;
  how_steps: string[] | null;
  evidence_before: string | null;
  evidence_after: string | null;
  verification_cmd: string | null;
  status: string;
  impact: string | null;
  pending_items: string[] | null;
}

interface DimensionRow {
  dimension_name: string;
  weight: number;
  score: number;
  notes: string | null;
  last_assessed: string | null;
}

async function fetchSignals(): Promise<SignalRow[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/geo_signal_status?order=signal_num`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

async function fetchEntries(): Promise<EntryRow[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/geo_ledger_entries?order=entry_date.desc,created_at.desc`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

async function fetchDimensions(): Promise<DimensionRow[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/geo_score_dimensions?order=weight.desc`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

interface ScoreHistoryRow {
  score_date: string;
  score: number;
  label: string | null;
}

async function fetchScoreHistory(): Promise<ScoreHistoryRow[]> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/geo_score_history?select=score_date,score,label&order=score_date`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

// --- HTML helpers ---

function scoreColorClass(score: number): string {
  if (score >= 80) return "dim-bar-green";
  if (score >= 50) return "dim-bar-yellow";
  return "dim-bar-red";
}

function barColorClass(score: number): string {
  if (score >= 80) return "bar-green";
  if (score >= 50) return "bar-yellow";
  return "bar-red";
}

function renderScoreChart(history: ScoreHistoryRow[]): string {
  if (history.length === 0) return "";
  const cols = history.map((h) => {
    const heightPx = Math.round((h.score / 100) * 200);
    const color = barColorClass(h.score);
    const d = new Date(h.score_date + "T00:00:00");
    const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const labelParts = h.label ? h.label.split("(") : [];
    const shortLabel = labelParts.length > 1 ? labelParts[0].trim() : (h.label || "");
    return `<div class="score-col">
      <span class="score-col-value">${h.score}</span>
      <div class="score-col-bar ${color}" style="height:${heightPx}px"></div>
      <span class="score-col-date">${escapeHtml(dateStr)}</span>
      ${shortLabel ? `<span class="score-col-label">${escapeHtml(shortLabel)}</span>` : ""}
    </div>`;
  }).join("\n    ");
  return `<div class="score-chart">\n    ${cols}\n  </div>`;
}

function renderDimensionRows(dimensions: DimensionRow[]): string {
  return dimensions.map((d) => {
    const contrib = (d.score * Number(d.weight)).toFixed(1);
    const weightPct = Math.round(Number(d.weight) * 100);
    const colorClass = scoreColorClass(d.score);
    const notesHtml = d.notes ? `<div class="dim-notes">${escapeHtml(d.notes)}</div>` : "";
    return `
      <div class="dim-row">
        <span class="dim-name">${escapeHtml(d.dimension_name)}</span>
        <span class="dim-weight">${weightPct}%</span>
        <span class="dim-score">${d.score}</span>
        <span class="dim-bar"><span class="dim-bar-fill ${colorClass}" style="width:${d.score}%"></span></span>
        <span class="dim-contrib">${contrib}</span>
      </div>${notesHtml}`;
  }).join("\n");
}

function header(): string {
  return `<header class="site-header">
  <a href="/" class="logo">Instant Recall</a>
  <nav>
    <a href="/">Home</a>
    <a href="/solution">Solution</a>
    <a href="/portal">Login</a>
    <a href="/contact-instant-recall">Contact Us</a>
  </nav>
</header>`;
}

function footer(): string {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
  <div class="footer-links">
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/terms-and-conditions">Terms of Service</a>
    <a href="/contact-instant-recall">Contact</a>
  </div>
  <p>&copy; ${year} Instant Recall LLC. All rights reserved.</p>
  <p>A <a href="https://www.belltowertech.com" rel="noopener">BellTower Technologies</a> solution.</p>
</footer>`;
}

function renderAuthPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Required -- GEO Implementation Ledger</title>
  <meta name="robots" content="noindex, nofollow">
  <style>${LEDGER_CSS}</style>
</head>
<body>
${header()}
<div class="auth-wrap">
  <div class="auth-box">
    <h2>Access Required</h2>
    <p>Enter your access token to view the GEO Implementation Ledger.</p>
    <form method="GET" action="/geo-ledger">
      <input type="text" name="token" placeholder="Access token" autocomplete="off" required>
      <button type="submit">View Ledger</button>
    </form>
  </div>
</div>
${footer()}
</body>
</html>`;
}

function statusBadge(status: string): string {
  const s = status.trim().toUpperCase();
  if (s === "PASS") return `<span class="status-pass">PASS</span>`;
  return `<span class="status-fail">FAIL</span>`;
}

function entryStatusClass(status: string): string {
  const s = status.trim().toLowerCase();
  if (s === "deployed") return "entry-status entry-status-deployed";
  if (s.includes("pending")) return "entry-status entry-status-pending";
  return "entry-status entry-status-blocked";
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderSignalCard(s: SignalRow): string {
  const touched = s.date_last_touched
    ? `<span class="signal-touched">${escapeHtml(s.date_last_touched)}</span>`
    : "";
  return `
    <details class="signal-card">
      <summary>
        <span class="signal-num">${s.signal_num}.</span>
        <span class="signal-name">${escapeHtml(s.signal_name)}</span>
        <span class="signal-def">${escapeHtml(s.signal_def)}</span>
        ${touched}
        ${statusBadge(s.status)}
      </summary>
      <div class="signal-detail">
        <p><strong>What PASS requires:</strong> ${escapeHtml(s.pass_requires)}</p>
        ${s.current_status_note ? `<p><strong>Current status:</strong> ${escapeHtml(s.current_status_note)}</p>` : ""}
      </div>
    </details>`;
}

function renderHowSection(steps: string[]): string {
  const items = steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("\n            ");
  return `
        <div class="how-section">
          <h4>How (Step by Step)</h4>
          <ol>
            ${items}
          </ol>
        </div>`;
}

function renderPendingSection(items: string[]): string {
  const lis = items.map((s) => `<li>${escapeHtml(s)}</li>`).join("\n            ");
  return `
        <div class="pending-section">
          <h4>Pending Action Items</h4>
          <ul>
            ${lis}
          </ul>
        </div>`;
}

function renderEntryCard(e: EntryRow): string {
  const rationale = e.rationale
    ? `<h4>Rationale</h4>\n        <p>${escapeHtml(e.rationale)}</p>`
    : "";

  const howSection =
    e.how_steps && Array.isArray(e.how_steps) && e.how_steps.length > 0
      ? renderHowSection(e.how_steps)
      : "";

  const evidenceItems: string[] = [];
  if (e.evidence_before) {
    evidenceItems.push(`<li><strong>Before:</strong> ${escapeHtml(e.evidence_before)}</li>`);
  }
  if (e.evidence_after) {
    evidenceItems.push(`<li><strong>After:</strong> ${escapeHtml(e.evidence_after)}</li>`);
  }
  if (e.verification_cmd) {
    evidenceItems.push(
      `<li><strong>Verification:</strong> <code>${escapeHtml(e.verification_cmd)}</code></li>`
    );
  }
  const evidenceBlock =
    evidenceItems.length > 0
      ? `<h4>Evidence</h4>\n        <ul>\n          ${evidenceItems.join("\n          ")}\n        </ul>`
      : "";

  const pendingSection =
    e.pending_items && Array.isArray(e.pending_items) && e.pending_items.length > 0
      ? renderPendingSection(e.pending_items)
      : "";

  const impactBlock = e.impact
    ? `<h4>Impact</h4>\n        <p>${escapeHtml(e.impact)}</p>`
    : "";

  return `
    <details class="entry-expander">
      <summary>
        <span class="entry-date">${escapeHtml(e.entry_date)}</span>
        <span class="entry-category">${escapeHtml(e.signal_category)}</span>
        <span class="entry-action">${escapeHtml(e.action_summary)}</span>
        <span class="${entryStatusClass(e.status)}">${escapeHtml(e.status)}</span>
      </summary>
      <div class="entry-body">
        ${rationale}
        ${howSection}
        ${evidenceBlock}
        ${pendingSection}
        ${impactBlock}
      </div>
    </details>`;
}

async function renderLedgerPage(): Promise<string> {
  const [signals, entries, dimensions, scoreHistory] = await Promise.all([fetchSignals(), fetchEntries(), fetchDimensions(), fetchScoreHistory()]);

  const passCount = signals.filter((s) => s.status === "PASS").length;
  const total = signals.length || 8;

  // Calculate composite GEO score from dimensions
  const compositeScore = dimensions.length > 0
    ? Math.round(dimensions.reduce((sum, d) => sum + d.score * Number(d.weight), 0))
    : 0;
  const signalCards = signals.map(renderSignalCard).join("\n");
  const entryCards = entries.map(renderEntryCard).join("\n");
  const dimensionRows = renderDimensionRows(dimensions);
  const chartHtml = renderScoreChart(scoreHistory);

  const body = `
<div class="ledger-hero">
  <h1>GEO Implementation Ledger</h1>
  <p class="subtitle">InstantRecall.com / Generative Engine Optimization Progress Report</p>
</div>

<div class="ledger">

  <div class="meta-block">
    <strong>Client:</strong> Instant Recall LLC / BellTower Technologies<br>
    <strong>Domain:</strong> instantrecall.com<br>
    <strong>Engagement Start:</strong> 2026-03-29<br>
    <strong>Consultant:</strong> Robert Maynard<br>
    <strong>Framework:</strong> MCP, llms.txt, Clean-Room HTML, AI Content Feed, JSON-LD, TTFB, AI Bot Access, HTTP/3
  </div>

  <div class="geo-score-block">
    <div class="geo-score-left">
      <div class="geo-score-label">Current GEO Score</div>
      <div class="geo-score-value">${compositeScore} <span class="geo-score-max">/ 100</span></div>
      <div class="geo-score-note">Composite score across 7 weighted dimensions. Target: 85+.</div>
      ${dimensions.length > 0 ? `
      <details class="dimensions-expander">
        <summary><strong>Score Breakdown by Dimension</strong></summary>
        <div class="dimensions-grid">
          <div class="dim-row" style="opacity:.6;font-size:.75rem;font-weight:600">
            <span>Dimension</span><span class="dim-weight">Weight</span><span class="dim-score">Score</span><span>Bar</span><span class="dim-contrib">Points</span>
          </div>
          ${dimensionRows}
        </div>
      </details>` : ""}
    </div>
    ${chartHtml}
  </div>

  <details class="summary-expander" open>
    <summary><h2 style="display:inline;margin:0;font-size:1.4rem;color:#1a1a2e;font-weight:700">Infrastructure Checklist (${passCount}/${total} signals)</h2></summary>
    <div style="padding:.75rem 0">
    ${signalCards}
    </div>
  </details>

  <div class="entries-section">
    <h2>Entries</h2>
    ${entryCards}
  </div>

</div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GEO Implementation Ledger -- InstantRecall</title>
  <meta name="robots" content="noindex, nofollow">
  <style>${LEDGER_CSS}</style>
</head>
<body>
${header()}
${body}
${footer()}
</body>
</html>`;
}

export async function handleGeoLedger(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  const expectedToken = Deno.env.get("LEDGER_TOKEN");

  // If LEDGER_TOKEN is set, enforce auth
  if (expectedToken) {
    if (!token || token !== expectedToken) {
      return new Response(renderAuthPage(), {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    }
  }

  const html = await renderLedgerPage();
  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store",
    },
  });
}
