# Claude Takeaways -- 2026-03-31 18:00 UTC

## Session Summary
Massive IR build session. Took the dev site from a basic scaffold to a fully branded, GEO-optimized platform mirroring production instantrecall.com.

## GEO Score Progress
- Started: 60/100 (from previous session)
- Ended: 73/100
- Trajectory: 18 -> 28 -> 60 -> 73 over 3 days
- Signals: 7/8 PASS (only HTTP/3 failing, Vercel platform limitation)

## Infrastructure Built

### Crawl Stats System
- `crawl_log` table in Supabase with bot, path, ts, ua, status, ip
- 35 bot patterns (AI, search, social, generic) detected in edge function index.ts
- `/crawl-stats` page with hourly chart, bot/path tables, live feed
- Fire-and-forget logging, no latency impact on page responses

### Nightly Cron (api/nightly-refresh.js)
- Runs at 5am UTC daily via Vercel cron
- Force redeploys from staging to production (clears edge cache)
- Waits for deploy to finish (polls up to 60s)
- Warms all 28+ pages (populates fresh edge cache)
- Updates site_freshness timestamp in Supabase
- Env vars: VERCEL_TOKEN and CRON_SECRET set in Vercel

### 24-Hour Vercel Edge Cache
- s-maxage=86400 on all public pages
- Private cache for dashboard, crawl-stats, geo-ledger (live data)
- api/html.js respects upstream private cache headers
- Cache cleared on every pts (force redeploy)

### Contact Form System
- `contact_submissions` table in Supabase
- `/api/contact-submit` Vercel edge endpoint with email validation
- Working form on /contact page and homepage CTA
- Dashboard shows last 20 submissions with status badges

## GEO Optimizations Applied

### P0 Fixes
- Fixed /cost-recovery canonical bug (was pointing to 404 /regulatory-reporting)
- Added og:image + twitter:image to all pages via shared layout
- Resolved dead URL confusion (/who-trusts-us and /methodology confirmed live)

### P1 Improvements
- Added "Research" link to header navigation (4 orphaned pages now discoverable)
- Added FAQPage JSON-LD to all 3 research white papers (24 FAQ entries total)
- 8 questions each for legal, industry, regulatory research pages

### P2 Polish
- Deployed .well-known/mcp.json manifest (MCP signal flipped to PASS, 7/8 signals)
- Auto-injected dateModified into JSON-LD on all pages from site_freshness table
- All AI discovery files updated with every page on site (ai-content-index, sitemap, llms.txt, llms-full.txt, for-ai, MCP manifest, nightly warm list)
- Michael Martin (Co-Founder & Chairman) named as responsible party across footer, for-ai, llms.txt, llms-full.txt, MCP manifest, Organization JSON-LD

## Customer Documents Published
- US Foods Recall Process Overview as clean-room HTML at /research/usfoods-recall-process
- Sysco Customer Recall Orientation Packet as clean-room HTML at /research/sysco-recall-packet
- Both include AI-digestible executive summaries at top
- Sysco page includes FAQPage JSON-LD (11 FAQ entries from Section 2)
- ai-citation blockquotes on both pages
- These are customer-authored documents providing independent third-party validation

## Full Site Rebrand
- Colors: navy/gold (#0b0b1a/#c8a951) to charcoal/cyan (#272727/#00afec)
- Font: Raleway to Lato
- Homepage rebuilt: Vimeo video hero (314904191), overview video embed (1152623274), alternating white/cyan/gray sections matching production
- Testimonial section: single centered quote on cyan background (not grid cards)
- Service icons: circular cyan circles with white icons (not photo cards)
- Contact Us nav link styled as filled button
- "Learn More" outline button style
- Footer: 4-column grid (Company, Research, For AI Systems, BellTower badge, LinkedIn, founder)
- 21 page files + styles.ts + layout.ts updated
- Internal pages (dashboard, crawl-stats, geo-ledger) kept dev theme

## Tina CMS (In Progress)
- npm packages installed (tinacms, @tinacms/cli)
- Robert has created a Tina Cloud account
- Repo: rjmjr1962831/ir (private)
- NOTE: Visual "edit on page" requires React. IR uses clean-room HTML, so Tina will provide admin panel form editor, not inline visual editing
- Setup needs to be completed in next session: tina/config.ts, content schemas, admin page

## Key Technical Notes
- Supabase access token changed: now sbp_c162819535b3ea4b12ff92eedb3fa116b67d75a8
- Vercel project: prj_htbgIKYkHEwa0WNdPKVQ4sVy3iiE, team: team_7PGzhT9wecJMLFkOWDGGxptE
- Working URL: https://ir-zeta.vercel.app
- Dashboard: https://ir-zeta.vercel.app/dashboard
- Production site (Squarespace): https://www.instantrecall.com -- do NOT deploy there
- PTS workflow: git push staging + Supabase edge deploy + Vercel force redeploy
- /stop route exists in vercel.json but has no handler (dead route)
- /regulatory-reporting is an alias for /cost-recovery (same handler)

## Pending Items for Next Session
1. Finish Tina CMS setup (config, schemas, admin page)
2. Enrich service pages with citable data (incident-response, cost-recovery, technology-prowess, industry-standard score 3-4/10)
3. Add source hyperlinks to research citations
4. HTTP/3 signal (Vercel platform limitation)
5. Investigate geo-ledger TTFB (1.075s, DB fetch overhead)
