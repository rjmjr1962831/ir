# InstantRecall -- Comprehensive Knowledge Document

**Purpose:** Single consolidated reference for Claude Code, Claude Web, and Cursor. Use latest updates as source of truth.
**Last consolidated:** 2026-03-29
**Conflict rule:** When sources conflict, this document wins. Deprecate earlier statements.

---

## 1. Project Overview

- **Product:** InstantRecall (instantrecall.com)
- **Repo:** `rjmjr1962831/ir`
- **Base URL (production):** TBD
- **Staging:** TBD

---

## 2. Architecture

- **Clean-room HTML for bots.** All pages served as self-contained HTML via Supabase edge functions. No React SPA, no JS rendering, no client-side hydration.
- **Vercel proxy:** `api/html.js` (edge runtime) fetches from Supabase and sets `Content-Type: text/html`. Passes through upstream `Cache-Control` headers.
- **Supabase Edge Functions:** Deno runtime. Project ref: TBD (set in `.env`).

---

## 3. Git & Deployment

### Branch Flow
- **staging** -> **main** only. Never merge main into staging.
- **pts** or "push to staging": `git add ...`, `git commit -m "..."`, `git push origin staging`. Only when Robert says pts.
- **ptm** or "push to main": Run `npm run merge-to-main` only. Do not touch main without ptm.

### Feature Branch Workflow
- ALWAYS create the feature branch BEFORE writing any code.
- Branch off staging, do your work on the branch, then PR to staging.
- Never commit directly to staging.
- ALWAYS run code through Qodo before merging to staging.

### Internal Documents (Excluded from Main)
- CLAUDE.md
- docs/COMPREHENSIVE_KNOWLEDGE_DOCUMENT.md
- docs/takeaways/
- docs/prompts/

---

## 4. Verification Protocol

**You are not done until you confirm the change actually worked.**

- Deploy, load the live page, verify the specific change.
- "Code updated" is not completion. "Deployed. Verified at [URL]." is.
- If you cannot verify, say so and give the exact URL for Robert to check.

---

## 5. Execution Rules

- **Execute:** Run commands you have authority to run. Use `.env` / `.secrets`. Escalate only when blocked.
- **Autonomous:** Do not ask for permission unless explicitly required (pts/ptm, ambiguity, production-breaking risk).
- **"ALL"** means every single instance. Fix every file, every page, every occurrence. Grep exhaustively; fix exhaustively.
- **"remember":** Add to this document or takeaways as appropriate.

---

## 6. Style Rules

- No em dashes anywhere. Use commas, semicolons, periods, or restructured sentences.
- Always give full URLs as markdown links. Never use placeholders.
- For live site checks: use `curl -s -H "Cache-Control: no-cache"`.

---

## 7. Data Quality Standards

- Accuracy over speed.
- TBD -- project-specific data quality standards to be defined.

---

## 8. Conflict Resolution

| Topic | Rule |
|-------|------|
| AI pages | Clean-room HTML via Supabase edge functions, never SPA |
| Branch flow | staging -> main only, feature branches for all work |
| Docs | Internal docs on staging only, never on main |

---

## 9. Quick Reference

- **Smoke test:** `npm run smoke-test` (when available)
- **Merge to main:** `npm run merge-to-main`
- **Supabase function deploy:** `npx supabase functions deploy <name> --no-verify-jwt`
- **t1:** Write takeaways to `docs/takeaways/CLAUDE_TAKEAWAYS_YYYY-MM-DD_HHMM.md`
- **s1:** `npm run s1` -- synthesize takeaways into Section 21
- **pk:** Reload this document from staging branch

---

## 10. Recent Updates (from t1)

*Last synthesized: 2026-03-29*

(No takeaways yet.)
