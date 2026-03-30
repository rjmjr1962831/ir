# GEO Implementation Ledger -- InstantRecall.com

**Client:** Instant Recall LLC / BellTower Technologies
**Domain:** instantrecall.com
**Engagement Start Date:** 2026-03-29
**Consultant:** Robert Maynard

**Purpose:** Running record of all GEO implementation work. Each entry is timestamped, categorized by signal, and includes evidence.

**8-Signal Framework:** MCP, llms.txt, Clean-Room HTML, AI Content Feed, JSON-LD, TTFB, AI Bot Access, HTTP/3

---

## Signal Summary

| # | Signal | Status | Date Last Touched | Notes |
|---|--------|--------|-------------------|-------|
| 1 | MCP | FAIL | -- | |
| 2 | llms.txt | FAIL | -- | |
| 3 | Clean-Room HTML | FAIL | -- | |
| 4 | AI Content Feed | FAIL | -- | |
| 5 | JSON-LD | FAIL | -- | |
| 6 | TTFB < 100ms | FAIL | -- | |
| 7 | AI Bots Allowed | FAIL | -- | |
| 8 | HTTP/3 | FAIL | -- | |

---

## Entry Template

```
---
#### YYYY-MM-DD -- [Signal Category]

**Action:** One sentence describing what was done.

**Rationale:** Why this improves AI citability. Tie to a specific signal or GEO principle.

**Evidence:**
- Before: (curl output, header snapshot, or "not present")
- After: (curl output, header snapshot, or URL to verify)
- Verification command: (the exact curl or test command anyone can re-run)

**Status:** Deployed / Pending Review / Blocked

**Impact:** Which of the 8 signals this moved (e.g., "MCP: FAIL to PASS")
```

---

## Signal Categories

1. **MCP** -- Model Context Protocol server at /.well-known/mcp.json
2. **llms.txt** -- LLM-readable site summary at /llms.txt
3. **Clean-Room HTML** -- Bot-facing pages serve static HTML, not SPA
4. **AI Content Feed** -- Machine-readable content index
5. **JSON-LD** -- Structured data (schema.org) on pages
6. **TTFB** -- Time to first byte under 100ms
7. **AI Bot Access** -- robots.txt explicitly allows AI crawlers
8. **HTTP/3** -- Alt-svc header advertises h3 support
9. **General** -- Architecture, DNS, hosting, or cross-cutting changes

---

## Entries

---
#### 2026-03-29 -- General

**Action:** Built clean-room HTML edge function architecture in rjmjr1962831/ir repo.

**Rationale:** Replacing Squarespace with Vercel + Supabase edge functions serving clean-room HTML. This is the same architecture that scores 92-95 GEO on a proven reference implementation.

**Evidence:**
- Before: No alternative infrastructure existed.
- After: Full edge function codebase created: serve-html router with 6 page renderers, api/html.js Vercel proxy, api/robots.js (AI-welcoming), api/llms.js, api/sitemap.js, vercel.json with all rewrites.
- Verification command: `ls C:\Users\rober\ir\supabase\functions\serve-html\pages\` (shows home.ts, solution.ts, contact.ts, portal.ts, privacy.ts, terms.ts)

**Status:** Pending Review

**Impact:** Clean-Room HTML: FAIL (not yet deployed). Architecture ready for all 8 signals.

---
#### 2026-03-29 -- General

**Action:** Completed baseline audit of instantrecall.com current infrastructure.

**Rationale:** Establishing the starting point for all 8 GEO signals. Current site is on Squarespace, which blocks AI bots, has no structured data, no llms.txt, no MCP, and requires heavy JS rendering.

**Evidence:**
- Before: Squarespace site with all AI bots blocked via robots.txt. No llms.txt, no .well-known/mcp.json, no ai-content-index.json, no JSON-LD structured data. Site serves heavy JS-rendered pages.
- After: Baseline documented. Rebuild plan created at docs/GEO_REBUILD_PLAN.md.
- Verification command: `curl -sI https://www.instantrecall.com/ | grep Server` (returns "Server: Squarespace")

**Status:** Deployed

**Impact:** All 8 signals confirmed FAIL. Baseline established.
