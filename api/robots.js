export const config = { runtime: "edge" };

export default function handler() {
  const body = `# www.instantrecall.com
# We welcome all AI bots and crawlers.

User-agent: *
Allow: /

Sitemap: https://www.instantrecall.com/sitemap.xml
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
