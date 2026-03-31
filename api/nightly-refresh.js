export const config = { runtime: "edge" };

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const SUPABASE_URL = process.env.SUPABASE_URL || "https://dewbyvlbmkersxjrcknm.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const TEAM_ID = "team_7PGzhT9wecJMLFkOWDGGxptE";
const PROJECT_ID = "prj_htbgIKYkHEwa0WNdPKVQ4sVy3iiE";
const SITE = "https://ir-zeta.vercel.app";
const CRON_SECRET = process.env.CRON_SECRET;

// All public pages to warm after deploy
const PAGES = [
  "/",
  "/solution",
  "/contact-instant-recall",
  "/about-us",
  "/portal",
  "/schedule",
  "/privacy-policy",
  "/terms-and-conditions",
  "/research",
  "/research/legal-case-data",
  "/research/industry-survey",
  "/research/regulatory-environment",
  "/incident-response",
  "/cost-recovery",
  "/technology-prowess",
  "/industry-standard",
  "/customer-quotes-solutions",
  "/support-request",
  "/who-trusts-us",
  "/geo-ledger",
  "/dashboard",
  "/crawl-stats",
  "/for-ai",
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/llms-full.txt",
  "/ai-content-index.json",
];

export default async function handler(req) {
  // Verify cron secret (Vercel sends this header for cron jobs)
  const authHeader = req.headers.get("authorization");
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const log = [];
  const start = Date.now();

  // Step 1: Force redeploy from staging (clears edge cache)
  try {
    const deployRes = await fetch(
      `https://api.vercel.com/v13/deployments?teamId=${TEAM_ID}&forceNew=1`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${VERCEL_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "ir",
          project: PROJECT_ID,
          target: "production",
          gitSource: {
            type: "github",
            org: "rjmjr1962831",
            repo: "ir",
            ref: "staging",
          },
        }),
      }
    );
    const deployData = await deployRes.json();
    log.push(`Deploy: ${deployData.id || "failed"} (${deployData.readyState || deployData.error?.message || "unknown"})`);

    // Wait for deploy to finish (poll up to 60s)
    if (deployData.id) {
      let ready = false;
      for (let i = 0; i < 12; i++) {
        await new Promise((r) => setTimeout(r, 5000));
        const checkRes = await fetch(
          `https://api.vercel.com/v13/deployments/${deployData.id}?teamId=${TEAM_ID}`,
          { headers: { Authorization: `Bearer ${VERCEL_TOKEN}` } }
        );
        const checkData = await checkRes.json();
        if (checkData.readyState === "READY") {
          ready = true;
          log.push(`Deploy ready in ${(i + 1) * 5}s`);
          break;
        }
        if (checkData.readyState === "ERROR") {
          log.push(`Deploy failed: ${checkData.readyState}`);
          break;
        }
      }
      if (!ready) log.push("Deploy timeout (60s)");
    }
  } catch (e) {
    log.push(`Deploy error: ${e.message}`);
  }

  // Step 2: Warm all pages (fire requests to populate edge cache)
  const warmResults = await Promise.allSettled(
    PAGES.map(async (path) => {
      const t0 = Date.now();
      const res = await fetch(`${SITE}${path}`, {
        headers: { "Cache-Control": "no-cache" },
      });
      const ttfb = Date.now() - t0;
      return { path, status: res.status, ttfb };
    })
  );

  const warmed = [];
  const failed = [];
  for (const r of warmResults) {
    if (r.status === "fulfilled") {
      warmed.push(r.value);
      if (r.value.status !== 200) failed.push(r.value);
    } else {
      failed.push({ path: "?", status: 0, ttfb: 0, error: r.reason?.message });
    }
  }

  log.push(`Warmed ${warmed.length}/${PAGES.length} pages`);
  if (failed.length > 0) {
    log.push(`Failed: ${JSON.stringify(failed)}`);
  }

  const avgTtfb = warmed.length > 0
    ? Math.round(warmed.reduce((s, w) => s + w.ttfb, 0) / warmed.length)
    : 0;
  log.push(`Avg TTFB: ${avgTtfb}ms`);

  // Step 3: Update site_freshness timestamp
  try {
    const now = new Date().toISOString();
    await fetch(`${SUPABASE_URL}/rest/v1/site_freshness?id=eq.1`, {
      method: "PATCH",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        last_content_update: now,
        last_ai_surface_update: now,
        updated_at: now,
      }),
    });
    log.push(`Freshness updated: ${now}`);
  } catch (e) {
    log.push(`Freshness update failed: ${e.message}`);
  }

  const elapsed = Date.now() - start;
  log.push(`Total time: ${elapsed}ms`);

  const body = JSON.stringify({
    ok: failed.length === 0,
    timestamp: new Date().toISOString(),
    elapsed_ms: elapsed,
    deployed: log[0],
    pages_warmed: warmed.length,
    pages_failed: failed.length,
    avg_ttfb_ms: avgTtfb,
    log,
    details: warmed.map((w) => ({ path: w.path, status: w.status, ttfb: w.ttfb })),
  }, null, 2);

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
