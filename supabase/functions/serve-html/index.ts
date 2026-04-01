import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getFreshness, setCurrentFreshness } from "./shared/freshness.ts";
import { renderHome } from "./pages/home.ts";
import { renderSolution } from "./pages/solution.ts";
import { renderContact, renderContactDirect } from "./pages/contact.ts";
import { renderPortal } from "./pages/portal.ts";
import { renderPrivacy } from "./pages/privacy.ts";
import { renderTerms } from "./pages/terms.ts";
import { handleGeoLedger } from "./pages/geo-ledger.ts";
import { renderAbout } from "./pages/about.ts";
import { handleDashboard } from "./pages/dashboard.ts";
import { renderSchedule } from "./pages/schedule.ts";
import { renderResearchIndex } from "./pages/research-index.ts";
import { renderResearchIndustry } from "./pages/research-industry.ts";
import { renderResearchRegulatory } from "./pages/research-regulatory.ts";
import { renderResearchLegal } from "./pages/research-legal.ts";
import { renderIncidentResponse } from "./pages/incident-response.ts";
import { renderCostRecovery } from "./pages/cost-recovery.ts";
import { renderTechnologyProwess } from "./pages/technology-prowess.ts";
import { renderIndustryStandard } from "./pages/industry-standard.ts";
import { renderCustomerQuotes } from "./pages/customer-quotes.ts";
import { renderSupportRequest } from "./pages/support-request.ts";
import { renderMethodology } from "./pages/methodology.ts";
import { handleCrawlStats } from "./pages/crawl-stats.ts";
import { renderPress } from "./pages/press.ts";
import { renderUSFoodsRecallProcess } from "./pages/usfoods-recall-process.ts";
import { renderSyscoRecallPacket } from "./pages/sysco-recall-packet.ts";
import { renderAiBestPractices } from "./pages/ai-best-practices.ts";
import { renderProjectKnowledge } from "./pages/project-knowledge.ts";

// --- Bot detection and logging ---
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "https://dewbyvlbmkersxjrcknm.supabase.co";
const SUPABASE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const BOT_PATTERNS: [RegExp, string][] = [
  [/GPTBot/i, "GPTBot"],
  [/ChatGPT-User/i, "ChatGPT-User"],
  [/OAI-SearchBot/i, "OAI-SearchBot"],
  [/ClaudeBot/i, "ClaudeBot"],
  [/Claude-Web/i, "Claude-Web"],
  [/anthropic-ai/i, "Anthropic"],
  [/PerplexityBot/i, "PerplexityBot"],
  [/Gemini/i, "Gemini"],
  [/Google-Extended/i, "Google-Extended"],
  [/Googlebot/i, "Googlebot"],
  [/bingbot/i, "Bingbot"],
  [/Applebot/i, "Applebot"],
  [/DuckDuckBot/i, "DuckDuckBot"],
  [/YandexBot/i, "YandexBot"],
  [/Baiduspider/i, "Baiduspider"],
  [/Bytespider/i, "Bytespider"],
  [/facebookexternalhit/i, "Facebook"],
  [/Twitterbot/i, "Twitterbot"],
  [/LinkedInBot/i, "LinkedInBot"],
  [/Slackbot/i, "Slackbot"],
  [/Discordbot/i, "Discordbot"],
  [/WhatsApp/i, "WhatsApp"],
  [/Amazonbot/i, "Amazonbot"],
  [/CCBot/i, "CCBot"],
  [/Cohere-ai/i, "Cohere"],
  [/YouBot/i, "YouBot"],
  [/AI2Bot/i, "AI2Bot"],
  [/Scrapy/i, "Scrapy"],
  [/python-requests/i, "python-requests"],
  [/Go-http-client/i, "Go-http-client"],
  [/curl/i, "curl"],
  [/wget/i, "wget"],
  [/bot/i, "other-bot"],
  [/crawler/i, "other-crawler"],
  [/spider/i, "other-spider"],
];

function detectBot(ua: string): string | null {
  if (!ua) return null;
  for (const [re, name] of BOT_PATTERNS) {
    if (re.test(ua)) return name;
  }
  return null;
}

function logCrawl(bot: string, path: string, ua: string, status: number, ip: string): void {
  // Fire and forget -- do not await
  fetch(`${SUPABASE_URL}/rest/v1/crawl_log`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ bot, path, ua, status, ip }),
  }).catch(() => {});
}

const ROUTES: Record<string, () => string> = {
  "/": renderHome,
  "/solution": renderSolution,
  "/contact-instant-recall": renderContact,
  "/contact": renderContactDirect,
  "/portal": renderPortal,
  "/schedule": renderSchedule,
  "/privacy-policy": renderPrivacy,
  "/terms-and-conditions": renderTerms,
  "/about-us": renderAbout,
  "/research": renderResearchIndex,
  "/research/industry-survey": renderResearchIndustry,
  "/research/regulatory-environment": renderResearchRegulatory,
  "/research/legal-case-data": renderResearchLegal,
  "/incident-response": renderIncidentResponse,
  "/cost-recovery": renderCostRecovery,
  "/regulatory-reporting": renderCostRecovery,
  "/technology-prowess": renderTechnologyProwess,
  "/industry-standard": renderIndustryStandard,
  "/customer-quotes-solutions": renderCustomerQuotes,
  "/support-request": renderSupportRequest,
  "/methodology": renderMethodology,
  "/who-trusts-us": renderPress,
  "/research/usfoods-recall-process": renderUSFoodsRecallProcess,
  "/research/sysco-recall-packet": renderSyscoRecallPacket,
};

function render404(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found -- Instant Recall</title>
  <style>
    body{font-family:'Raleway',-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#0b0b1a;color:#fff;text-align:center}
    .wrap{max-width:500px;padding:2rem}
    h1{font-size:3rem;color:#c8a951;margin-bottom:.5rem}
    p{font-size:1.1rem;color:rgba(255,255,255,.7);margin-bottom:1.5rem}
    a{color:#c8a951;font-weight:600}
  </style>
</head>
<body>
  <div class="wrap">
    <h1>404</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/">Return to Home</a>
  </div>
</body>
</html>`;
}

serve(async (req: Request) => {
  const url = new URL(req.url);
  // Use x-forwarded-path header if present (set by Vercel proxy), else use URL path
  let path = req.headers.get("x-forwarded-path") || url.pathname;

  // Normalize: strip trailing slash (except root)
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  // Load freshness data (cached, non-blocking on failure)
  const freshness = await getFreshness();
  setCurrentFreshness(freshness);

  // Bot detection (uses forwarded UA from Vercel proxy)
  const ua = req.headers.get("x-forwarded-user-agent") || req.headers.get("user-agent") || "";
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "";
  const bot = detectBot(ua);

  // Routes that need request access (for auth, query params, etc.)
  if (path === "/geo-ledger") {
    const resp = await handleGeoLedger(req);
    if (bot) logCrawl(bot, path, ua, resp.status, ip);
    return resp;
  }

  if (path === "/dashboard") {
    return await handleDashboard(req);
  }

  if (path === "/crawl-stats") {
    return await handleCrawlStats(req);
  }

  if (path === "/internal/ai-best-practices") {
    const html = renderAiBestPractices();
    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "private, max-age=30",
      },
    });
  }

  if (path === "/internal/project-knowledge") {
    const html = renderProjectKnowledge();
    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "private, max-age=30",
      },
    });
  }

  const renderFn = ROUTES[path];

  if (renderFn) {
    const html = renderFn();
    if (bot) logCrawl(bot, path, ua, 200, ip);
    const headers: Record<string, string> = {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
    };
    if (freshness?.lastContentUpdate) {
      headers["Last-Modified"] = new Date(freshness.lastContentUpdate).toUTCString();
    }
    return new Response(html, { status: 200, headers });
  }

  if (bot) logCrawl(bot, path, ua, 404, ip);
  return new Response(render404(), {
    status: 404,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    },
  });
});
