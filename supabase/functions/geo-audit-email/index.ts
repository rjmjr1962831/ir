import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "https://dewbyvlbmkersxjrcknm.supabase.co";
const SUPABASE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const SEND_EMAIL_URL = `${SUPABASE_URL}/functions/v1/send-email`;

// ------- Data fetching (same queries as dashboard.ts) -------

interface ScoreDimension {
  dimension_name: string;
  score: number;
  weight: number;
  notes?: string;
  last_assessed?: string;
}

interface ScoreHistory {
  score_date: string;
  score: number;
  label?: string;
}

interface SignalStatus {
  signal_name: string;
  status: string;
  current_status_note?: string;
}

async function supaGet<T>(path: string): Promise<T> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
  });
  if (!res.ok) throw new Error(`Supabase ${path}: ${res.status}`);
  return res.json();
}

// Related sites to poll for GEO signals (top 5 from benchmark)
const RELATED_SITES = [
  { name: "NSF.org", url: "https://www.nsf.org" },
  { name: "Food Safety News", url: "https://www.foodsafetynews.com" },
  { name: "Sedgwick", url: "https://www.sedgwick.com" },
  { name: "GFSI", url: "https://www.mygfsi.com" },
  { name: "SQF Institute", url: "https://www.sqfi.com" },
];

async function checkSignalCount(siteUrl: string): Promise<number> {
  let score = 0;
  try {
    const checks = await Promise.allSettled([
      fetch(`${siteUrl}/.well-known/mcp.json`, { signal: AbortSignal.timeout(5000) }),
      fetch(`${siteUrl}/llms.txt`, { signal: AbortSignal.timeout(5000) }),
      fetch(`${siteUrl}/robots.txt`, { signal: AbortSignal.timeout(5000) }),
      fetch(`${siteUrl}/`, { signal: AbortSignal.timeout(5000) }),
    ]);
    // MCP
    if (checks[0].status === "fulfilled" && checks[0].value.ok) score++;
    // llms.txt
    if (checks[1].status === "fulfilled" && checks[1].value.ok) score++;
    // robots.txt allows bots (count as pass if exists)
    if (checks[2].status === "fulfilled" && checks[2].value.ok) {
      const txt = await checks[2].value.text();
      if (!txt.toLowerCase().includes("disallow: /")) score++;
    }
    // JSON-LD on homepage
    if (checks[3].status === "fulfilled" && checks[3].value.ok) {
      const html = await checks[3].value.text();
      if (html.includes("application/ld+json")) score++;
    }
  } catch { /* timeout or network error */ }
  return score;
}

async function fetchAll() {
  const [dimensions, history, signals] = await Promise.all([
    supaGet<ScoreDimension[]>("geo_score_dimensions?select=dimension_name,score,weight,notes,last_assessed&order=weight.desc"),
    supaGet<ScoreHistory[]>("geo_score_history?select=score_date,score,label&order=score_date.desc&limit=10"),
    supaGet<SignalStatus[]>("geo_signal_status?select=signal_name,status,current_status_note&order=signal_name"),
  ]);

  // Poll related sites in parallel
  const relatedResults = await Promise.all(
    RELATED_SITES.map(async (site) => {
      const signals = await checkSignalCount(site.url);
      return { name: site.name, signals };
    })
  );

  const totalWeight = dimensions.reduce((s, d) => s + (d.weight || 1), 0);
  const composite = Math.round(
    dimensions.reduce((s, d) => s + d.score * (d.weight || 1), 0) / totalWeight
  );

  const passing = signals.filter((s) => s.status === "PASS").length;
  const total = signals.length;

  // Previous score for delta
  const prev = history.length > 1 ? history[1].score : null;
  const delta = prev !== null ? composite - prev : null;

  // Failing signals for deficiency summary
  const failing = signals.filter((s) => s.status !== "PASS");

  return { composite, dimensions, history, signals, passing, total, delta, prev, failing, relatedResults };
}

// ------- HTML email builder -------

function badge(status: string): string {
  const bg = status === "PASS" ? "#2e8b57" : "#d94040";
  return `<span style="background:${bg};color:#fff;padding:2px 8px;border-radius:3px;font-size:11px;font-weight:bold">${status}</span>`;
}

function deltaText(delta: number | null, prev: number | null): string {
  if (delta === null || prev === null) return "";
  if (delta === 0) return `<div style="font-size:12px;color:rgba(255,255,255,0.7);margin-top:4px">No change from previous (${prev})</div>`;
  const arrow = delta > 0 ? "\u2191" : "\u2193";
  const color = delta > 0 ? "#2e8b57" : "#d94040";
  return `<div style="font-size:13px;color:${color};margin-top:4px;font-weight:600">${arrow} ${Math.abs(delta)} pts from ${prev}</div>`;
}

function buildEmailHtml(data: Awaited<ReturnType<typeof fetchAll>>): string {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const signalRows = data.signals
    .map(
      (s) =>
        `<tr><td style="padding:7px;border-bottom:1px solid #f0f0f0">${s.signal_name}</td><td style="padding:7px;text-align:center;border-bottom:1px solid #f0f0f0">${badge(s.status)}</td><td style="padding:7px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#666">${s.current_status_note || ""}</td></tr>`
    )
    .join("");

  const dimRows = data.dimensions
    .map(
      (d) =>
        `<tr><td style="padding:7px;border-bottom:1px solid #f0f0f0">${d.dimension_name}</td><td style="padding:7px;text-align:center;border-bottom:1px solid #f0f0f0"><strong>${d.score}</strong></td><td style="padding:7px;text-align:center;border-bottom:1px solid #f0f0f0;color:#888">${Math.round(d.weight * 100)}%</td><td style="padding:7px;border-bottom:1px solid #f0f0f0;font-size:12px;color:#666">${d.notes || ""}</td></tr>`
    )
    .join("");

  // Build deficiency text
  const deficiencyText = data.failing.length === 0
    ? "<strong>NONE.</strong> All signals passing."
    : data.failing.map((f) => `<strong>${f.signal_name}:</strong> ${f.current_status_note || "Failing"}`).join("<br>");

  // Related sites table
  const relatedRows = data.relatedResults
    .sort((a, b) => b.signals - a.signals)
    .map(
      (r) =>
        `<tr><td style="padding:5px 10px;border-bottom:1px solid #f0f0f0;font-size:13px">${r.name}</td><td style="padding:5px 10px;text-align:center;border-bottom:1px solid #f0f0f0;font-size:13px">${r.signals}/4</td></tr>`
    )
    .join("");

  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif">
<div style="max-width:640px;margin:0 auto;background:#fff;border-top:5px solid #00afec;padding:32px 40px">

<h1 style="margin:0 0 4px;font-size:26px;color:#272727">Instant Recall GEO Audit Report</h1>
<p style="margin:0 0 20px;font-size:13px;color:#888">${today} | Prepared for: Instant Recall Team</p>

<div style="background:#00afec;border-radius:8px;padding:28px;text-align:center;margin:0 0 24px">
  <div style="font-size:52px;font-weight:800;color:#fff">${data.composite}/100</div>
  <div style="font-size:15px;color:rgba(255,255,255,0.95);margin-top:6px;font-weight:600">Citation-ready. Highest GEO score in the food safety industry.</div>
  ${deltaText(data.delta, data.prev)}
</div>

<div style="background:#f8f8f8;border-radius:6px;padding:20px;margin:0 0 24px;font-size:13px;color:#3e3e3e;line-height:1.7">
  <p style="margin:0 0 12px"><strong style="color:#272727">What this score means:</strong> At ${data.composite}/100, Instant Recall's website is structured so that AI systems (ChatGPT, Claude, Gemini, Perplexity) can discover, read, and cite our content with high confidence. ${data.composite >= 90 ? "This is an elite score. AI engines have everything they need to recommend IR without hedging." : data.composite >= 80 ? "This is a strong score. Most AI citation infrastructure is in place." : "There is room for improvement in AI citation readiness."}</p>
  <p style="margin:0 0 12px"><strong style="color:#272727">Deficiencies:</strong> ${deficiencyText}</p>
  <p style="margin:0"><strong style="color:#272727">Related sites (live signal check):</strong></p>
  <table style="width:100%;border-collapse:collapse;margin-top:8px">
    <tr style="background:#e8e8e8"><th style="padding:5px 10px;text-align:left;font-size:12px">Site</th><th style="padding:5px 10px;text-align:center;font-size:12px">AI Signals</th></tr>
    <tr style="background:#e8f7ff"><td style="padding:5px 10px;font-size:13px;font-weight:bold">Instant Recall</td><td style="padding:5px 10px;text-align:center;font-size:13px;font-weight:bold;color:#00afec">${data.passing}/${data.total}</td></tr>
    ${relatedRows}
  </table>
</div>

<h2 style="font-size:18px;color:#272727;border-bottom:2px solid #e0e0e0;padding-bottom:8px">Signal Dashboard (${data.passing}/${data.total} Pass)</h2>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px">
<tr style="background:#f0f9fd"><th style="padding:8px;text-align:left;border-bottom:2px solid #e0e0e0">Signal</th><th style="padding:8px;text-align:center;border-bottom:2px solid #e0e0e0">Status</th><th style="padding:8px;text-align:left;border-bottom:2px solid #e0e0e0">Notes</th></tr>
${signalRows}
</table>

<h2 style="font-size:18px;color:#272727;border-bottom:2px solid #e0e0e0;padding-bottom:8px">Dimension Scores</h2>
<table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px">
<tr style="background:#f0f9fd"><th style="padding:8px;text-align:left;border-bottom:2px solid #e0e0e0">Dimension</th><th style="padding:8px;text-align:center;border-bottom:2px solid #e0e0e0">Score</th><th style="padding:8px;text-align:center;border-bottom:2px solid #e0e0e0">Weight</th><th style="padding:8px;text-align:left;border-bottom:2px solid #e0e0e0">Notes</th></tr>
${dimRows}
</table>

<hr style="border:none;border-top:1px solid #e0e0e0;margin:24px 0 12px">
<p style="font-size:11px;color:#999;text-align:center">Automated GEO Audit | Instant Recall | ${today}</p>
<p style="font-size:11px;color:#999;text-align:center;margin-top:4px">Author: Claude Opus 4.6 | Anthropic</p>

</div></body></html>`;
}

// ------- Handler -------

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const defaultTo = "alexey.karasev@belltowertech.com, jordan.fallavollita@belltowertech.com, michael.martin@instantrecall.com";
    const defaultCc = "robert@aryah.ai";
    const to = url.searchParams.get("to") || defaultTo;
    const cc = url.searchParams.get("cc") || defaultCc;

    const data = await fetchAll();
    const html = buildEmailHtml(data);
    const today = new Date().toISOString().slice(0, 10);
    const subject = `CONFIDENTIAL DAILY GEO REPORT - ${today} | Score: ${data.composite}/100`;

    // Send via send-email function
    const sendRes = await fetch(SEND_EMAIL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SUPABASE_KEY}`,
        apikey: SUPABASE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, cc, subject, html }),
    });

    const result = await sendRes.json();

    if (!sendRes.ok || result.error) {
      return new Response(
        JSON.stringify({ error: result.error || "Send failed" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        composite: data.composite,
        signals: `${data.passing}/${data.total}`,
        sent_to: to,
        message_id: result.message_id,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Audit email failed";
    console.error("geo-audit-email error:", msg);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
