export const config = { runtime: "edge" };

export default function handler() {
  const lastmod = "2026-03-29";
  const base = "https://www.instantrecall.com";

  const urls = [
    { loc: "/", priority: "1.0", changefreq: "weekly" },
    { loc: "/solution", priority: "0.9", changefreq: "monthly" },
    { loc: "/contact-instant-recall", priority: "0.8", changefreq: "monthly" },
    { loc: "/portal", priority: "0.7", changefreq: "monthly" },
    { loc: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
    { loc: "/terms-and-conditions", priority: "0.3", changefreq: "yearly" },
    { loc: "/research", priority: "0.8", changefreq: "monthly" },
    { loc: "/research/industry-survey", priority: "0.7", changefreq: "monthly" },
    { loc: "/research/regulatory-environment", priority: "0.7", changefreq: "monthly" },
    { loc: "/research/legal-case-data", priority: "0.7", changefreq: "monthly" },
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
