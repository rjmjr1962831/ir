import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

/**
 * refresh-site-freshness
 *
 * Designed to run daily (via pg_cron, an external scheduler, or manual invocation).
 * Queries current page/research counts and the latest FDA recall from openFDA,
 * then upserts the singleton row in site_freshness.
 */

const SUPABASE_URL =
  Deno.env.get("SUPABASE_URL") || "https://dewbyvlbmkersxjrcknm.supabase.co";
const SUPABASE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

// Known static pages (keep in sync with serve-html ROUTES)
const PAGES = [
  "/",
  "/solution",
  "/contact-instant-recall",
  "/contact",
  "/portal",
  "/schedule",
  "/privacy-policy",
  "/terms-and-conditions",
  "/about-us",
  "/research",
  "/research/industry-survey",
  "/research/regulatory-environment",
  "/research/legal-case-data",
  "/incident-response",
  "/cost-recovery",
  "/technology-prowess",
  "/industry-standard",
  "/customer-quotes-solutions",
  "/support-request",
];

const RESEARCH_PAGES = [
  "/research/industry-survey",
  "/research/regulatory-environment",
  "/research/legal-case-data",
];

interface FdaRecallResult {
  report_date?: string;
  reason_for_recall?: string;
  product_description?: string;
  recalling_firm?: string;
}

async function fetchLatestFdaRecall(): Promise<{
  date: string | null;
  title: string | null;
}> {
  try {
    const resp = await fetch(
      "https://api.fda.gov/food/recall.json?limit=1&sort=report_date:desc"
    );
    if (!resp.ok) return { date: null, title: null };
    const data = await resp.json();
    const result: FdaRecallResult = data?.results?.[0];
    if (!result) return { date: null, title: null };

    const date = result.report_date
      ? `${result.report_date.slice(0, 4)}-${result.report_date.slice(4, 6)}-${result.report_date.slice(6, 8)}`
      : null;
    const title = result.reason_for_recall
      ? result.reason_for_recall.slice(0, 200)
      : result.product_description
        ? result.product_description.slice(0, 200)
        : null;
    return { date, title };
  } catch {
    return { date: null, title: null };
  }
}

serve(async (req: Request) => {
  // Optional: verify an Authorization header or shared secret for security
  const now = new Date().toISOString();
  const pageCount = PAGES.length;
  const researchCount = RESEARCH_PAGES.length;

  const fda = await fetchLatestFdaRecall();

  const payload: Record<string, unknown> = {
    id: 1,
    last_content_update: now,
    last_ai_surface_update: now,
    page_count: pageCount,
    research_count: researchCount,
    updated_at: now,
  };

  if (fda.date) payload.latest_fda_recall_date = fda.date;
  if (fda.title) payload.latest_fda_recall_title = fda.title;

  // Upsert the singleton row
  const upsertResp = await fetch(
    `${SUPABASE_URL}/rest/v1/site_freshness?on_conflict=id`,
    {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=representation",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!upsertResp.ok) {
    const err = await upsertResp.text();
    return new Response(JSON.stringify({ error: err }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const result = await upsertResp.json();
  return new Response(
    JSON.stringify({
      success: true,
      updated_at: now,
      page_count: pageCount,
      research_count: researchCount,
      latest_fda_recall_date: fda.date,
      data: result,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
});
