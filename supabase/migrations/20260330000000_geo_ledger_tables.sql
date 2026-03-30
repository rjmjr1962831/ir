-- GEO Implementation Ledger tables
-- Tracks the 8-signal GEO framework status and all implementation entries

CREATE TABLE IF NOT EXISTS geo_signal_status (
  id serial PRIMARY KEY,
  signal_num integer NOT NULL UNIQUE CHECK (signal_num BETWEEN 1 AND 8),
  signal_name text NOT NULL,
  signal_def text NOT NULL,
  status text NOT NULL DEFAULT 'FAIL' CHECK (status IN ('PASS', 'FAIL')),
  date_last_touched date,
  pass_requires text NOT NULL,
  current_status_note text,
  updated_at timestamptz DEFAULT now()
);

INSERT INTO geo_signal_status (signal_num, signal_name, signal_def, status, pass_requires, current_status_note) VALUES
(1, 'MCP', 'Model Context Protocol manifest at /.well-known/mcp.json', 'FAIL', 'Valid JSON file served at the well-known URL with company info, page resources, and citation policy.', 'Not yet implemented.'),
(2, 'llms.txt', 'LLM-readable site summary at /llms.txt', 'FAIL', 'Accessible /llms.txt with company identity, services, citation guidance, and key pages.', 'Not yet implemented.'),
(3, 'Clean-Room HTML', 'Bot-facing pages serve static HTML, not SPA', 'FAIL', 'Every page returns semantic HTML with inline CSS, no React/Vue/Angular, no client-side hydration.', 'Not yet deployed. Architecture built in edge functions.'),
(4, 'AI Content Feed', 'Machine-readable content index at /ai-content-index.json', 'FAIL', 'Valid JSON with page listings, service descriptions, sample queries, and citation guidance.', 'Not yet implemented.'),
(5, 'JSON-LD', 'Structured data (schema.org) on pages', 'FAIL', 'Organization, Service, BreadcrumbList, and/or other relevant schemas in script tags on every page.', 'Not yet implemented.'),
(6, 'TTFB < 100ms', 'Time to first byte under 100 milliseconds', 'FAIL', 'Consistent sub-100ms TTFB measured from major regions.', 'Not yet measured. Current Squarespace site likely exceeds 100ms.'),
(7, 'AI Bots Allowed', 'robots.txt explicitly allows AI crawlers', 'FAIL', 'robots.txt with explicit Allow directives for GPTBot, ClaudeBot, PerplexityBot, and other AI user agents.', 'Not yet deployed. Squarespace blocks AI bots by default.'),
(8, 'HTTP/3', 'Alt-Svc header advertises h3 support', 'FAIL', 'Alt-Svc response header advertising h3 protocol.', 'Not yet implemented.');

CREATE TABLE IF NOT EXISTS geo_ledger_entries (
  id serial PRIMARY KEY,
  entry_date date NOT NULL DEFAULT CURRENT_DATE,
  signal_category text NOT NULL,
  action_summary text NOT NULL,
  rationale text,
  how_steps jsonb,
  evidence_before text,
  evidence_after text,
  verification_cmd text,
  status text NOT NULL DEFAULT 'Pending Review' CHECK (status IN ('Deployed', 'Pending Review', 'Blocked')),
  impact text,
  pending_items jsonb,
  created_at timestamptz DEFAULT now()
);

INSERT INTO geo_ledger_entries (entry_date, signal_category, action_summary, rationale, how_steps, evidence_before, evidence_after, verification_cmd, status, impact, pending_items) VALUES
('2026-03-29', 'General', 'Built clean-room HTML edge function architecture in rjmjr1962831/ir repo.', 'Replacing Squarespace with Vercel + Supabase edge functions serving clean-room HTML. This is the same architecture that scores 92-95 GEO on a proven reference implementation.', '["Cloned the rjmjr1962831/ir repo and set up the project structure","Built api/html.js Vercel edge proxy that fetches from Supabase and corrects Content-Type to text/html","Created serve-html Supabase edge function with path-based router","Built 6 page renderers (home, solution, contact, portal, privacy, terms) as clean-room HTML with inline CSS","Added shared layout module (header, footer, meta tags, OG tags, canonical URLs)","Added shared styles module (professional inline CSS, responsive design, no external stylesheets)","Created api/robots.js that explicitly welcomes all AI bots (GPTBot, ClaudeBot, PerplexityBot, etc.)","Created api/llms.js with company summary, services, and citation guidance","Created api/sitemap.js with all pages and lastmod dates","Configured vercel.json with rewrites for all page paths, robots.txt, llms.txt, and sitemap.xml","Added JSON-LD structured data (Organization, Service, BreadcrumbList) to each page renderer"]', 'No alternative infrastructure existed.', 'Full edge function codebase created: serve-html router with 6 page renderers, api/html.js Vercel proxy, api/robots.js (AI-welcoming), api/llms.js, api/sitemap.js, vercel.json with all rewrites.', 'curl -s https://ir-zeta.vercel.app/ | head -20', 'Pending Review', 'Clean-Room HTML: FAIL (not yet on production domain). Architecture ready for all 8 signals.', '["Point instantrecall.com DNS to Vercel (pending client approval)","Create and deploy ai-content-index.json","Create and deploy .well-known/mcp.json","Verify TTFB from multiple regions","Confirm HTTP/3 Alt-Svc header on Vercel"]'),
('2026-03-29', 'General', 'Completed baseline audit of instantrecall.com current infrastructure.', 'Establishing the starting point for all 8 GEO signals. Current site is on Squarespace, which blocks AI bots, has no structured data, no llms.txt, no MCP, and requires heavy JS rendering.', '["Fetched instantrecall.com homepage, /solution, /contact-instant-recall, /portal, /privacy-policy, /terms-and-conditions via curl","Checked robots.txt: confirmed all AI bots blocked (GPTBot, ClaudeBot, CCBot, Google-Extended, etc.)","Checked /llms.txt: not present (returns homepage HTML, soft 404)","Checked /.well-known/mcp.json: not present (returns homepage HTML, soft 404)","Checked /sitemap.xml: Squarespace default sitemap with 11 URLs","Inspected response headers: Server: Squarespace, no structured data, no JSON-LD, heavy JS bundles","Extracted all content from each page (headings, copy, images, testimonials, CTAs) for rebuild","Documented findings in GEO_REBUILD_PLAN.md with 8-phase implementation roadmap"]', 'Squarespace site with all AI bots blocked via robots.txt. No llms.txt, no .well-known/mcp.json, no ai-content-index.json, no JSON-LD structured data. Site serves heavy JS-rendered pages.', 'Baseline documented. Rebuild plan created at docs/GEO_REBUILD_PLAN.md.', 'curl -sI https://www.instantrecall.com/ | grep Server', 'Deployed', 'All 8 signals confirmed FAIL. Baseline established.', '["Complete DNS cutover from Squarespace to Vercel (requires client coordination)","Verify all 8 signals pass after cutover","Run GEO score audit across Perplexity, ChatGPT, Claude, and Gemini"]');
