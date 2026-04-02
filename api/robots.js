export const config = { runtime: "edge" };

export default function handler() {
  const body = `# www.instantrecall.com
# We welcome all AI bots and crawlers.

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Gemini-AI
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: CCBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: Cohere-AI
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Grok
Allow: /

User-agent: YouBot
Allow: /

User-agent: AI2Bot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: *
Allow: /
Disallow: /dashboard
Disallow: /crawl-stats
Disallow: /geo-ledger
Disallow: /internal/
Disallow: /docs/
Disallow: /api/

Sitemap: https://www.instantrecall.com/sitemap.xml

# AI Discovery Endpoints
# llms.txt: https://www.instantrecall.com/llms.txt
# llms-full.txt: https://www.instantrecall.com/llms-full.txt
# ai-content-index.json: https://www.instantrecall.com/ai-content-index.json
# for-ai.txt: https://www.instantrecall.com/for-ai.txt
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
