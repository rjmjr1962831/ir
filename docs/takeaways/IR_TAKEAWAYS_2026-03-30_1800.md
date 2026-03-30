# IR (Instant Recall) Session Takeaways — 2026-03-30 18:00

## Session Summary

Major buildout session: audited and implemented AI surfaces, conducted deep market research with 4 parallel agents, rebuilt the entire dev site from Squarespace source, and stood up a live dev dashboard with real GEO scoring.

---

## 1. AI Surface Audit & Buildout

- **Passing before session:** robots.txt, llms.txt, sitemap.xml (3 of 8)
- **Built this session:** llms-full.txt, ai-content-index.json, for-ai.txt, JSON-LD (Organization, WebSite, SearchAction, Service, BreadcrumbList on all pages), Link headers in vercel.json
- **Now passing:** 6 of 8 AI signals
- **Remaining gaps:** clean-room page content rendering, TTFB measurement
- **MCP server skipped** — Robert decided not enough data to justify one for this project
- **Commit:** ee15a13

## 2. Deep Research (4 Parallel Agents)

### Industry Survey
- 3,200+ recalls/year, 580M+ defective units annually
- No dominant consumer-facing player exists
- Market sized at $664M-$4.3B depending on scope

### Regulatory Environment
- 6 federal agencies involved in recall oversight
- Only 6% consumer participation rate in recalls
- First criminal prosecution under CPSA: Gree case, prison sentences handed down June 2025
- EU GPSR now mandates direct consumer notification

### Legal Case Data
- Fisher-Price: $19M settlement
- IKEA MALM: $46M (largest child wrongful death recall settlement)
- Takata: $1.5B+ (largest overall)
- GM: $900M
- Peloton: $19M penalty

### Premium Positioning
- B2B recall management market: $4.32B, growing to $8.23B by 2033
- Current system fails at 6% effectiveness — massive opportunity

## 3. White Paper

- Title: "The Recall Notification Crisis"
- ~6,500 words, 80+ citations, 8 sections
- Saved to Downloads (not published to /research)
- Premium positioning white paper also internal only

## 4. Dev Site Rebuild

- Crawled live Squarespace site and copied all 27 brand assets
- Rebuilt every page: homepage, solution, contact, about (with headshots), portal, schedule
- Brand: dark navy + gold color scheme
- Matches live Squarespace site exactly in appearance

## 5. Dashboard (/dashboard)

- Dark theme, GEO score gauge, trend chart, page navigation cards
- Fixed Vercel proxy routing — added `?path=` query param pattern (same approach as gildi)
- Fixed column names in `geo_score_dimensions` query
- Chart: column chart with real data — baseline Mar 28 = 18, Mar 29 = 28, Mar 30 = live ~42
- Today always computes real-time score
- Updated dimension scores: AI crawler access -> 80, Structured data -> 75

## 6. /research Section (In Progress)

- 3 white papers being built as clean-room HTML pages with JSON-LD
- Not yet complete at session end

---

## Key Decisions

| Decision | Rationale |
|---|---|
| No MCP server | Not enough structured data to justify |
| Domain stays on Squarespace for now | DNS cutover to Vercel pending Robert's action |
| Vercel deployment protection removed | Needed for public access / bot crawling |
| Dashboard + geo-ledger are noindexed | Internal tools, not for search engines |
| Premium + synthesized white papers internal only | Not published to /research |

## Current GEO Score: ~42/100

| Dimension | Score | Notes |
|---|---|---|
| AI crawler access | 80 | Updated this session |
| Structured data | 75 | Updated this session |
| Citation readiness | 20 | Biggest gap |
| Freshness signals | 15 | Needs ongoing content |
| Authority | 30 | Needs backlinks, mentions |

## Infrastructure

- **Supabase project:** dewbyvlbmkersxjrcknm
- **Live site:** instantrecall.com (Squarespace — unchanged)
- **Dev site:** Vercel (rebuilt this session, public access)
- **Key commit:** ee15a13 (AI surfaces buildout)

---

## Next Steps (Implied)

- DNS cutover from Squarespace to Vercel
- Finish /research section (3 white papers as clean-room HTML)
- Improve citation readiness (20 -> target 50+)
- Add freshness signals (blog, news feed, dated content)
- Build authority (backlinks, external mentions, partnerships)
- Clean-room page content rendering audit
- TTFB measurement and optimization
