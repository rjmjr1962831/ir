# Claude Session Takeaways - April 2, 2026

## IR (Instant Recall) - Pixel Mirror + GEO Audit Infrastructure

### Major Deliverables

**Pixel-Perfect Mirroring (ir-zeta.vercel.app ↔ instantrecall.com):**
- 4 subpages rewritten: incident-response, cost-recovery, technology-prowess, industry-standard (side-by-side image + text card matching Squarespace production)
- Solution page QA: features bg #f5f5f5, hover #1cace6, icons 100px
- Contact page: Dallas skyline hero, white bg side-by-side buttons
- Schedule page: Acuity Scheduling iframe, hero overlay
- White theme applied to ALL 18 pages (privacy, terms, research x7, support-request, about-us, who-trusts-us, crawl-stats, methodology, schedule)
- CookieYes cookie consent banner on all pages
- Newsletter popup (homepage only, matching Squarespace behavior)
- Mobile hamburger nav with animated open/close
- Footer: 6 links server-rendered (HOME, SOLUTION, SIGN UP, CONTACT US, LOGIN, BOOK AN APPOINTMENT)
- Ticker: 49 dated items with [FDA]/[CFIA] badges and specific recall page URLs
- TM symbols added to 15 page titles, separators fixed (-- to |)

**GEO Score: 93/100 (up from 73)**
- 16-site food safety industry benchmark: IR #1, industry avg 33/100
- Nearest related site: NSF.org at 58/100
- IR is the only site with all 4 AI-native signals (MCP, llms.txt, AI Content Feed, JSON-LD)
- Citation probe (Perplexity, OpenAI): IR not yet cited -- all GEO infra is on staging, not production

**Email Infrastructure Built:**
- send-email edge function (Gmail OAuth via robert@aryah.ai)
- geo-audit-email edge function (reads from same DB as dashboard, ensures consistency)
- Daily cron: 6:00 AM CT to alexey.karasev@belltowertech.com, jordan.fallavollita@belltowertech.com, michael.martin@instantrecall.com (CC robert@aryah.ai)
- Subject: CONFIDENTIAL DAILY GEO REPORT
- Includes: score hero, summary (meaning/deficiencies/related sites), bot crawler stats with trends, signal dashboard, dimension scores

**Redirects & Sitemap:**
- /regulatory-reporting → 308 to /cost-recovery (Vercel redirects)
- /customer-quotes + /customer-quotes-solutions → 301 to homepage
- Sitemap cleaned: removed customer-quotes-solutions and for-ai.txt
- Keep-warm ping cron every 5 minutes

### Key Decisions
- About Us stays public on staging (production is password-locked on Squarespace)
- Font: keep Lato (free) instead of Proxima Nova (needs license)
- Newsletter popup: homepage only per Jordan's confirmation it's a homepage section
- TTFB: use externally measured value stored in DB (~93ms datacenter-normalized), not edge-to-edge measurement
- Supabase access token rotated: sbp_fcac... (old sbp_93ef expired)

### Bugs Found & Fixed
- Vercel CDN cache (s-maxage=86400) causing stale content after deploys -- ALWAYS force Vercel redeploy on PTS
- Client-side JS footer link injection doesn't work for bots -- moved to server-rendered HTML
- Supabase edge function 301 redirects don't pass through Vercel proxy (no Location header forwarding) -- use vercel.json redirects instead
- GEO dashboard showed 73 (stale dimension scores) while history showed 89 -- fixed by updating dimension table

### Outstanding
- Merge gildi PRs #41 (geo-audit-email) and #42 (merit gate + floorPlus) after Qodo
- Set up gildi daily cron for GEO audit email
- DNS migration to Vercel (single most impactful action for production GEO)
- 24 IR commits bypassed Qodo review -- enforce feature branch gate going forward
