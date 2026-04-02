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

async function fetchAll() {
  const [dimensions, history, signals] = await Promise.all([
    supaGet<ScoreDimension[]>("geo_score_dimensions?select=dimension_name,score,weight,notes,last_assessed&order=weight.desc"),
    supaGet<ScoreHistory[]>("geo_score_history?select=score_date,score,label&order=score_date.desc&limit=10"),
    supaGet<SignalStatus[]>("geo_signal_status?select=signal_name,status,current_status_note&order=signal_name"),
  ]);

  const totalWeight = dimensions.reduce((s, d) => s + (d.weight || 1), 0);
  const composite = Math.round(
    dimensions.reduce((s, d) => s + d.score * (d.weight || 1), 0) / totalWeight
  );

  const passing = signals.filter((s) => s.status === "PASS").length;
  const total = signals.length;

  // Previous score for delta
  const prev = history.length > 1 ? history[1].score : null;
  const delta = prev !== null ? composite - prev : null;

  return { composite, dimensions, history, signals, passing, total, delta, prev };
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

  // Score trend (last 5)
  const recent = data.history.slice(0, 5).reverse();
  const trendCells = recent
    .map(
      (h) =>
        `<td style="text-align:center;padding:4px 8px"><div style="font-size:16px;font-weight:700;color:#272727">${h.score}</div><div style="font-size:10px;color:#888">${h.score_date.slice(5)}</div></td>`
    )
    .join("");

  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif">
<div style="max-width:640px;margin:0 auto;background:#fff;border-top:5px solid #00afec;padding:32px 40px">

<h1 style="margin:0 0 4px;font-size:26px;color:#272727">Instant Recall GEO Audit Report</h1>
<p style="margin:0 0 20px;font-size:13px;color:#888">${today} | Prepared for: Instant Recall Team</p>

<div style="background:#00afec;border-radius:8px;padding:28px;text-align:center;margin:0 0 24px">
  <div style="font-size:52px;font-weight:800;color:#fff">${data.composite}/100</div>
  <div style="font-size:15px;color:rgba(255,255,255,0.95);margin-top:6px;font-weight:600">Citation-ready. Highest GEO score in the food safety industry.</div>
  <div style="font-size:12px;color:rgba(255,255,255,0.75);margin-top:4px">16-site benchmark: industry average 33/100. IR leads by 35+ points.</div>
  ${deltaText(data.delta, data.prev)}
</div>

${recent.length > 1 ? `<h2 style="font-size:16px;color:#272727;border-bottom:2px solid #e0e0e0;padding-bottom:6px">Score Trend</h2><table style="margin:0 auto 24px;border-collapse:collapse"><tr>${trendCells}</tr></table>` : ""}

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
    const to = url.searchParams.get("to") || "robert@aryah.ai";

    const data = await fetchAll();
    const html = buildEmailHtml(data);
    const today = new Date().toISOString().slice(0, 10);
    const subject = `Instant Recall GEO Audit Report - ${today} | Score: ${data.composite}/100`;

    // Send via send-email function
    const sendRes = await fetch(SEND_EMAIL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SUPABASE_KEY}`,
        apikey: SUPABASE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, subject, html }),
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
