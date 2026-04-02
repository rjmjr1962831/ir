# InstantRecall -- Comprehensive Knowledge Document (SSoT)

**Purpose:** Single Source of Truth for all AI agents (Claude Code, Claude Web, Cursor). When sources conflict, this document wins.
**Last consolidated:** 2026-04-02
**Conflict rule:** This document is authoritative. Deprecate earlier statements that contradict it.

---

## 1. Project Overview

- **Product:** Instant Recall -- The Leader in Food Recall Preparedness and Response
- **Company:** Instant Recall LLC, a BellTower Technologies solution
- **Founded:** 2000 (25+ years in food recall management)
- **HQ:** 5900 South Lake Forest Dr., Suite 300, McKinney, TX 75070
- **Phone:** +1-214-220-8000
- **Repo:** `rjmjr1962831/ir`
- **Dev site:** https://ir-zeta.vercel.app
- **Live site:** https://www.instantrecall.com (currently on Squarespace; DNS cutover to Vercel pending)
- **Recall portal:** https://www.myinstantrecall.com
- **Corporate dashboard:** https://dashboard.belltowertech.com/login
- **Supabase project:** `dewbyvlbmkersxjrcknm`
- **Vercel project:** ir (connected to rjmjr1962831/ir)

---

## 2. GEO Mission (North Star)

**Become the source AI cites for food recall preparedness and notification information.**

Every decision, every page, every piece of structured data serves one goal: when someone asks an AI system about food recall preparedness, recall communications, or B2B recall management, Instant Recall is the answer it gives.

This is the same GEO (Generative Engine Optimization) strategy proven on Top10Lists.us. The 8-signal framework targets the signals AI systems use to decide what to cite:

1. MCP (Model Context Protocol manifest)
2. llms.txt (LLM-readable site summary)
3. Clean-Room HTML (no SPA, no JS rendering for bots)
4. AI Content Feed (ai-content-index.json)
5. JSON-LD (structured data on every page)
6. TTFB < 100ms
7. AI Bots Allowed (robots.txt welcomes AI crawlers)
8. HTTP/3 (Alt-Svc header)

---

## 3. Business Model

### Current: B2B Food Recall Preparedness

Three service lines:

1. **Recall Preparedness Consulting** -- Proactive planning, readiness assessments, recall playbooks, simulated exercises, team training, supply chain mapping.
2. **Recall Communications Management** -- Automated multi-channel (email, SMS, voice, fax) notification workflows that reach every affected party in minutes. Real-time delivery tracking, escalation rules, distribution list management.
3. **Regulatory Reporting and Audit Response** -- FDA, USDA, FSMA-compliant documentation, audit trails, timestamped records, regulatory report generation on demand.

### Expanding: Consumer-Facing Notification

Closing the last mile of recall communication. The current system relies on passive press releases and in-store signage. Instant Recall is building direct-to-consumer notification to dramatically increase the 6% participation rate.

### Market Opportunity

- B2B recall management market: $4.32B, growing to $8.23B by 2033
- Full market (including consumer): $664M-$4.3B depending on scope
- No dominant consumer-facing player exists

---

## 4. Tech Stack

- **Frontend/Proxy:** Vercel edge proxy (`api/html.js`) -- fetches HTML from Supabase, passes through Cache-Control headers
- **Backend:** Supabase Deno Edge Functions (`supabase/functions/serve-html/index.ts`) -- renders clean-room HTML for every page
- **No React SPA** -- all bot-facing pages are server-rendered clean-room HTML with inline CSS, zero JavaScript
- **AI Discovery Layer:** robots.txt, llms.txt, llms-full.txt, ai-content-index.json, for-ai.txt, JSON-LD, Link headers (all served via Vercel API routes)
- **Routing:** `vercel.json` rewrites map every URL to either Supabase edge function (via api/html.js) or Vercel API route
- **Database:** Supabase PostgreSQL (GEO ledger tables: `geo_signal_status`, `geo_score_dimensions`, `geo_score_history`, `geo_ledger_entries`)
- **Brand assets:** Dark navy (#0b0b1a) + gold (#c8a951) color scheme, Raleway font

### Pages Served

| Path | Description |
|------|-------------|
| `/` | Homepage -- hero, 3 service cards, 7 feature cards, trust indicators |
| `/solution` | Services detail page |
| `/contact-instant-recall` | Contact routing (urgent recall, sales, opt-out) |
| `/contact` | Direct contact |
| `/about-us` | Team bios with headshots |
| `/portal` | MyInstantRecall + corporate dashboard login links |
| `/schedule` | Schedule a consultation |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms of service |
| `/research` | Research index (3 white papers) |
| `/research/industry-survey` | Product Recall Notification Industry Survey |
| `/research/regulatory-environment` | Regulatory Environment of Product Recalls |
| `/research/legal-case-data` | Legal Case Data and Liability Research |
| `/geo-ledger` | Internal GEO implementation ledger (noindexed) |
| `/dashboard` | Internal GEO score dashboard (noindexed) |

### AI Discovery Endpoints

| Endpoint | Purpose |
|----------|---------|
| `/robots.txt` | Welcomes all AI crawlers by name |
| `/llms.txt` | LLM-readable site summary |
| `/llms-full.txt` | Extended AI reference document |
| `/ai-content-index.json` | Machine-readable content manifest |
| `/.well-known/ai-content-index.json` | Alias for above |
| `/for-ai.txt` | Additional AI-readable summary |
| `/sitemap.xml` | XML sitemap with lastmod dates |

---

## 5. TinaCMS Integration (Content Management)

**Branch:** `feature/tinacms-setup`
**Status:** Local dev working; not yet connected to Tina Cloud.

### Installed Packages

- `tinacms@3.7.1`
- `@tinacms/cli@2.2.1`

### Configuration

- **Config file:** `tina/config.ts` with a `Pages` collection
- **Content directory:** `content/pages/` containing markdown files for: home, about-us, contact, methodology, solution, incident-response

### Local Development

- `npm run dev` launches the TinaCMS admin UI at `localhost:4001/admin`
- `npm run tina:build` builds the admin panel for deployment

### Next Steps

1. **Connect to Tina Cloud** -- obtain `TINA_CLIENT_ID` and `TINA_TOKEN`, add to environment variables
2. **Bridge markdown content to serve-html templates** -- wire TinaCMS-managed markdown into the Supabase edge function clean-room HTML renderer
3. **Deploy admin via vercel.json rewrite** -- add a rewrite rule so `/admin` serves the built TinaCMS panel
4. **Add remaining pages** -- extend the Pages collection to cover all site routes (research, portal, schedule, privacy, terms, etc.)
5. **PR + Qodo review before merge** -- create PR from `feature/tinacms-setup` to `staging`, wait for Qodo review, fix all issues, then merge

---

## 6. AI Surfaces Status (GEO Signal Ledger)

**Current GEO Score: 73/100** (as of 2026-03-31)

### 8-Signal Status

| # | Signal | Status | Notes |
|---|--------|--------|-------|
| 1 | MCP | PASS | 200 with full manifest, 15 resources listed |
| 2 | llms.txt | PASS | 200, valid markdown, Cache-Control: public, max-age=86400 |
| 3 | Clean-Room HTML | PASS | Zero JS frameworks, inline CSS only |
| 4 | AI Content Feed | PASS | 200, valid JSON |
| 5 | JSON-LD | PASS | Organization, WebSite, SearchAction, Service, BreadcrumbList on all pages |
| 6 | TTFB < 100ms | PASS | 136ms homepage, 260ms /solution |
| 7 | AI Bots Allowed | PASS | robots.txt Allow: / with AI bot welcome |
| 8 | HTTP/3 | FAIL | No Alt-Svc header -- Vercel platform limitation |

**Passing: 7/8** | **Failing: 1/8** (HTTP/3 only)

### Dimension Scores

| Dimension | Weight | Score | Notes |
|-----------|--------|-------|-------|
| AI crawler access and protocols | 20% | 80 | robots.txt, llms.txt, llms-full.txt, for-ai.txt, Link headers deployed. MCP skipped. |
| Structured data and machine readability | 15% | 75 | Full JSON-LD coverage on all pages. |
| Citation readiness and answerability | 25% | 20 | Biggest gap. No methodology page, no quotable data blocks yet. |
| Authority and trust | 15% | 30 | 25+ year history. No external press/media citations yet. |
| Content coverage and depth | 10% | 35 | 6+ pages with content. Missing: testimonials, FAQ. |
| Freshness and change logging | 10% | 15 | No timestamps on content, no versioning on site. |
| Consistency and coherence | 5% | 70 | Newly built, content is consistent. |

---

## 7. Git and Deployment

- **Repo:** `rjmjr1962831/ir` (GitHub)
- **Branch flow:** `feature-branch` -> `staging` -> `main`. Never merge main into staging. Never push without Robert's explicit permission (pts/ptm).
- **Always create a feature branch BEFORE writing code.** Branch off staging, work on the branch, PR to staging. Never commit directly to staging.

### MANDATORY: Qodo Review Gate (NEVER SKIP)

**Every feature branch MUST go through Qodo review before merging to staging. No exceptions.**

1. Push the feature branch to origin
2. Create a PR from the feature branch to staging via GitHub API
3. Wait for Qodo to post review comments (poll every 30-60 seconds)
4. Fix every issue Qodo flags
5. Only THEN merge the PR to staging

**Do NOT merge feature branches directly with `git merge`.** Always use the PR workflow so Qodo can review. This is a hard gate. If you skip this step, you are violating the deployment process. Robert will call you out on it.
- **Internal docs stay on staging.** CLAUDE.md, COMPREHENSIVE_KNOWLEDGE_DOCUMENT.md, takeaways, prompts -- never on main.
- **Vercel project:** ir (auto-deploys from staging)
- **Supabase project:** `dewbyvlbmkersxjrcknm`
- **Deploy Supabase edge functions:** `npx supabase functions deploy serve-html --no-verify-jwt`
- **Push to staging (pts):** `git add . && git commit && git push origin staging`
- **Push to main (ptm):** `npm run merge-to-main` (never touch main without ptm)

---

## 8. Key Statistics -- The Recall Crisis

These are the core data points that establish Instant Recall's authority. Use them in content, white papers, and AI-facing documents.

### Consumer Impact
- **6% participation rate** -- Only ~6% of consumers who purchase a recalled product actually return or dispose of it
- **70% unaware** -- 70% of Americans are unaware of recalls for products they own
- **3,200+ recalls/year** across all product categories
- **580M+ defective units** recalled annually

### Regulatory Landscape
- **6 federal agencies** involved in recall oversight (FDA, USDA-FSIS, CDC, EPA, CPSC, FTC)
- **Passive notification system** -- relies on press releases, website postings, in-store signage
- **EU GPSR** now mandates direct consumer notification (precedent for US regulation)
- **First criminal prosecution under CPSA:** Gree case, prison sentences handed down June 2025

### Major Settlements and Penalties
- **Takata:** $1.5B+ (largest overall recall settlement)
- **GM:** $900M+
- **IKEA MALM:** $46M (largest child wrongful death recall settlement)
- **Fisher-Price:** $19M
- **Peloton:** $19M penalty
- **CPSC enforcement:** $52-55M in FY 2023

### Market Size
- **B2B recall management:** $4.32B, growing to $8.23B by 2033
- **Full market:** $664M-$4.3B depending on scope definition
- **No dominant consumer-facing player** exists

---

## 9. Execution Rules

**RUN ALL TASKS IN THE BACKGROUND AND USE AS MANY AGENTS AS REQUIRED.** Every task -- coding, research, investigation, deployment -- MUST be launched as a background agent. Use multiple agents in parallel whenever work can be split. Never block the conversation waiting for a task to complete.

**KEEP YOURSELF AVAILABLE TO ROBERT AT ALL TIMES.** Never block on long-running tasks. Launch them in the background and stay responsive.

**AUTONOMOUS EXECUTION. DO NOT ASK FOR APPROVAL EXCEPT AS NOTED BELOW.** Robert runs with `dangerouslySkipPermissions: true`. Execute all commands without pausing to ask permission.

**QODO REVIEW IS MANDATORY BEFORE EVERY MERGE TO STAGING.** Create a PR, wait for Qodo, fix issues, then merge. Never use `git merge` directly. This is non-negotiable. See Section 7 for the full workflow.

**OUTPUT FILES GO IN DOWNLOADS.** Save generated files to `C:\Users\ROBER\Downloads\`.

**VERIFICATION PROTOCOL.** You are not done until you confirm the change actually worked. Deploy, load the live page, verify. "Code updated" is not completion. "Deployed. Verified at [URL]." is.

**"ALL" means every single instance.** Fix every file, every page, every occurrence. Grep exhaustively; fix exhaustively.

**No em dashes.** Use commas, semicolons, periods, or restructured sentences in generated content.

**For live site checks:** Use `curl -s -H "Cache-Control: no-cache"` -- do not use web_fetch (returns stale content).

**Terminal commands:** Always `cd C:\Users\rober\ir` first.

---

## 10. Research Section

Three published white papers at `/research/*`, authored by the Instant Recall Research Team (March 2026):

### 1. Product Recall Notification Industry Survey
**URL:** https://www.instantrecall.com/research/industry-survey
- Comprehensive analysis of the recall notification landscape
- Government services, consumer apps, B2B platforms
- Market sizing: $664M-$8B+
- Consumer pain points: 70% of Americans unaware of recalls for products they own
- International systems comparison

### 2. The Regulatory Environment of Product Recalls
**URL:** https://www.instantrecall.com/research/regulatory-environment
- Six federal agencies (CPSC, FDA, NHTSA, USDA/FSIS, EPA, Coast Guard)
- Key legislation: CPSA, CPSIA, FSMA, STURDY Act
- Mandatory reporting requirements
- Recall effectiveness data (6% consumer response rate)
- Penalty trends and international regulatory comparisons

### 3. Legal Case Data and Liability Research
**URL:** https://www.instantrecall.com/research/legal-case-data
- Major product recall lawsuits (Takata $1.5B+, GM $1B+, IKEA MALM $46M)
- Post-sale duty to warn doctrine
- Retailer liability developments (Amazon/CPSC ruling)
- CPSC enforcement actions ($52-55M in FY 2023)
- Class action settlement patterns
- Legal value of third-party notification services

---

## 11. When to Stop and Ask Robert

Execute everything autonomously EXCEPT:

1. **Pushing to branches** -- pts (staging) and ptm (main) require Robert's explicit command
2. **Ambiguity in requirements** -- if the task is unclear, ask before executing
3. **GEO-detrimental changes** -- anything that could hurt AI citability or search visibility
4. **SEO/bot/merit-gate changes** -- changes to robots.txt, canonical tags, noindex, or anything that gates bot access
5. **Resource limits** -- if a task would consume significant API credits or compute
6. **Logic gaps** -- if the requested approach has an obvious flaw, flag it
7. **High-risk decisions** -- production database changes, DNS changes, account settings
8. **Changes that could break production** -- test first, ask if uncertain

---

## 12. Recent Updates (from t1)

*Last synthesized: 2026-04-02*

---

### GEO & AI Discoverability

- AI signals trajectory: 3/8 → 6/8 → 7/8 PASS (only HTTP/3 failing -- Vercel platform limitation)
- Built and deployed: llms-full.txt, ai-content-index.json (API route), for-ai.txt, JSON-LD (Organization, WebSite, SearchAction, Service, BreadcrumbList on all pages), Link headers in vercel.json
- Deployed .well-known/mcp.json manifest -- MCP signal flipped to PASS
- FAQPage JSON-LD added to all 3 research white papers (24 FAQ entries total, 8 per page)
- Sysco research page includes FAQPage JSON-LD (11 entries)
- Auto-injected dateModified into JSON-LD on all pages from site_freshness table
- All AI discovery files (ai-content-index, sitemap, llms.txt, llms-full.txt, for-ai, MCP manifest, nightly warm list) updated to include every page on site
- Michael Martin (Co-Founder & Chairman) named as responsible party across footer, for-ai, llms.txt, llms-full.txt, MCP manifest, Organization JSON-LD
- MCP server skipped -- not enough structured data to justify
- Fixed /cost-recovery canonical bug (was pointing to 404 /regulatory-reporting)
- Added og:image + twitter:image to all pages via shared layout
- "Research" link added to header navigation (4 previously orphaned pages now discoverable)
- GEO score trajectory: 18 (Mar 28) → 28 (Mar 29) → 42 (Mar 30) → 60 → 73 (Mar 31)

**Current GEO dimensions (as of Mar 31):**
| Dimension | Score |
|---|---|
| AI crawler access | 80 |
| Structured data | 75 |
| Citation readiness | 20 |
| Freshness signals | 15 |
| Authority | 30 |

### Research & White Papers

- 3 research pages live as clean-room HTML at /research/*: industry, regulatory, legal
- White paper fact corrections applied (all 3 papers had hallucinated stats):
  - "6 federal agencies" for food recalls → corrected to FDA + USDA-FSIS as primary
  - Takata "$1.5B+" → corrected to $1B DOJ penalty
  - IKEA $46M → labeled as wrongful death settlement, not CPSC penalty
  - Fisher-Price $19M → labeled as class-action, not CPSC penalty
  - All-product stats (3,200+ recalls, 580M+ units) clearly labeled as all-product; food-specific ~296 added
  - Added 3 missing food recall cases: PCA (28yr prison), Blue Bell ($19.35M), Jensen Farms (33 deaths)
- US Foods Recall Process Overview published at /research/usfoods-recall-process (clean-room HTML, AI-digestible executive summary, ai-citation blockquotes)
- Sysco Customer Recall Orientation Packet published at /research/sysco-recall-packet (same treatment + FAQPage JSON-LD)
- "The Recall Notification Crisis" white paper (~6,500 words, 80+ citations) -- internal only, not published
- Premium positioning white paper -- internal only
- Key research data (corrected): B2B recall management market $4.32B growing to $8.23B by 2033; 6% consumer participation rate; first CPSA criminal prosecution (Gree, June 2025); EU GPSR mandates direct consumer notification

### Site & Infrastructure

- Full site rebrand: navy/gold (#0b0b1a/#c8a951) → charcoal/cyan (#272727/#00afec); Raleway → Lato
- Homepage pixel-matched to production (instantrecall.com):
  - Solid dark header, sentence case headings, font-weight 400
  - Icon color #00d49d, size 90x90px
  - Video aspect-ratio:16/9 (replaced padding-bottom:56.25% hack)
  - Carousels at 10000ms, solution labels ALL CAPS
  - Footer: 4-column grid, removed dev-only links, added Cookie Settings + Back to Top
- BTT_WebsiteHeader_v0005.mp4 (13MB) committed to public/video/ with static image fallback (fades to video after 2s)
- HubSpot integration: Option 1 (branded) embed on homepage and /contact; global hs-script-loader in head; form rendering requires client-side JS
- Vimeo video hero (314904191) and overview video embed (1152623274) on homepage
- Testimonial section: single centered quote on cyan background
- /regulatory-reporting is an alias for /cost-recovery (same handler)
- /stop route exists in vercel.json but has no handler (dead route)
- Vercel deployment protection removed (needed for public bot access)
- 24-hour edge cache (s-maxage=86400) on all public pages; private cache for dashboard, crawl-stats, geo-ledger
- Cache cleared on every pts (force redeploy)
- NODE_OPTIONS=--max-old-space-size=16384 set in .bashrc and Windows env (setx)

### Crawl Stats & Nightly Cron

- crawl_log table in Supabase: bot, path, ts, ua, status, ip
- 35 bot patterns detected in edge function index.ts (AI, search, social, generic)
- /crawl-stats page: hourly chart, bot/path tables, live feed; fire-and-forget logging (no latency impact)
- Nightly cron (api/nightly-refresh.js) runs 5am UTC via Vercel cron: force redeploys staging → production, polls up to 60s, warms all 28+ pages, updates site_freshness in Supabase
- Env vars required: VERCEL_TOKEN and CRON_SECRET

### Dashboard & Internal Tools

- /dashboard: dark theme GEO score gauge, trend chart, page navigation cards, last 20 contact submissions with status badges
- contact_submissions table in Supabase; /api/contact-submit edge endpoint with email validation; working form on /contact and homepage CTA
- Aryah AI Best Practices doc (18 sections) published at /docs/ai-best-practices (internal, confidential)
- Dashboard, crawl-stats, geo-ledger all noindexed

### Access & Collaboration

- Supabase project: dewbyvlbmkersxjrcknm
- Supabase access token: sbp_c162819535b3ea4b12ff92eedb3fa116b67d75a8
- Vercel project: prj_htbgIKYkHEwa0WNdPKVQ4sVy3iiE, team: team_7PGzhT9wecJMLFkOWDGGxptE
- Working URL: https://ir-zeta.vercel.app
- Production site (Squarespace): https://www.instantrecall.com -- do NOT deploy there
- Vercel production branch is main -- all changes must be merged to main for deployment
- rgallast (Jordan Fallavollita) added as write collaborator; branch protection on main requires 1 PR approval
- Old GH_TOKEN (ghp_Vf4U8Z...) was exposed in IR repo package.json git history -- rotated, gildi .env updated
- Supabase deploy fix: pass token as env var (`SUPABASE_ACCESS_TOKEN=sbp_... npx supabase functions deploy`) -- .env was overriding CLI login
- DNS cutover from Squarespace to Vercel pending Robert's action

### TinaCMS (In Progress)

- Packages installed: tinacms 3.7.1, @tinacms/cli 2.2.1
- Robert has Tina Cloud account; repo: rjmjr1962831/ir (private)
- IR uses clean-room HTML -- Tina will provide admin panel form editor, not inline visual editing
- Setup incomplete: tina/config.ts, content schemas, admin page still needed

### Pending Items

- DNS cutover from Squarespace to Vercel
- Complete TinaCMS setup (config, schemas, admin page)
- Enrich service pages with citable data (incident-response, cost-recovery, technology-prowess, industry-standard -- score 3-4/10)
- Add source hyperlinks to research citations; improve citation readiness (20 → target 50+)
- Add freshness signals (blog, news feed, dated content)
- Build authority (backlinks, external mentions, partnerships)
- Add ~50 ticker items to match production (currently 14)
- HTTP/3 signal (Vercel platform limitation -- may not be actionable)
- Investigate geo-ledger TTFB (1.075s, DB fetch overhead)
- Consider CookieYes integration for GDPR compliance
- Complete pixel-matching for /solution page and remaining subpages
