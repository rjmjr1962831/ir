export const config = { runtime: "edge" };

export default function handler() {
  const body = `# www.instantrecall.com
# We welcome all AI bots and crawlers.

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: *
Allow: /

Sitemap: https://www.instantrecall.com/sitemap.xml

# AI Discovery Endpoints
# llms.txt: https://www.instantrecall.com/llms.txt
# llms-full.txt: https://www.instantrecall.com/llms-full.txt
# ai-content-index.json: https://www.instantrecall.com/ai-content-index.json
# for-ai.txt: https://www.instantrecall.com/for-ai.txt
# mcp.json: https://www.instantrecall.com/.well-known/mcp.json
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
