export const config = { runtime: "edge" };

const SUPABASE_URL = "https://dewbyvlbmkersxjrcknm.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

async function getFreshnessDate() {
  try {
    const resp = await fetch(
      `${SUPABASE_URL}/rest/v1/site_freshness?id=eq.1&select=last_content_update`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } }
    );
    if (!resp.ok) return null;
    const rows = await resp.json();
    return rows[0] ? rows[0].last_content_update.slice(0, 10) : null;
  } catch { return null; }
}

export default async function handler() {
  const lastmod = (await getFreshnessDate()) || new Date().toISOString().slice(0, 10);
  const base = "https://www.instantrecall.com";

  const urls = [
    { loc: "/", priority: "1.0", changefreq: "weekly" },
    { loc: "/solution", priority: "0.9", changefreq: "monthly" },
    { loc: "/contact-instant-recall", priority: "0.8", changefreq: "monthly" },
    { loc: "/contact", priority: "0.8", changefreq: "monthly" },
    { loc: "/about-us", priority: "0.8", changefreq: "monthly" },
    { loc: "/portal", priority: "0.7", changefreq: "monthly" },
    { loc: "/schedule", priority: "0.7", changefreq: "monthly" },
    { loc: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
    { loc: "/terms-and-conditions", priority: "0.3", changefreq: "yearly" },
    { loc: "/methodology", priority: "0.7", changefreq: "monthly" },
    { loc: "/for-ai", priority: "0.5", changefreq: "monthly" },
    { loc: "/research", priority: "0.8", changefreq: "monthly" },
    { loc: "/research/industry-survey", priority: "0.7", changefreq: "monthly" },
    { loc: "/research/regulatory-environment", priority: "0.7", changefreq: "monthly" },
    { loc: "/research/legal-case-data", priority: "0.7", changefreq: "monthly" },
    { loc: "/research/usfoods-recall-process", priority: "0.7", changefreq: "monthly" },
    { loc: "/research/sysco-recall-packet", priority: "0.7", changefreq: "monthly" },
    { loc: "/incident-response", priority: "0.8", changefreq: "monthly" },
    { loc: "/cost-recovery", priority: "0.8", changefreq: "monthly" },
    { loc: "/technology-prowess", priority: "0.8", changefreq: "monthly" },
    { loc: "/industry-standard", priority: "0.8", changefreq: "monthly" },
    { loc: "/who-trusts-us", priority: "0.8", changefreq: "monthly" },
    { loc: "/support-request", priority: "0.6", changefreq: "monthly" },
    { loc: "/press", priority: "0.7", changefreq: "monthly" },
    { loc: "/llms.txt", priority: "0.4", changefreq: "monthly" },
    { loc: "/llms-full.txt", priority: "0.4", changefreq: "monthly" },
    { loc: "/ai-content-index.json", priority: "0.4", changefreq: "monthly" },
    { loc: "/.well-known/mcp.json", priority: "0.3", changefreq: "monthly" },
  ];

  const entries = urls
    .map(
      (u) => `  <url>
    <loc>${base}${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
