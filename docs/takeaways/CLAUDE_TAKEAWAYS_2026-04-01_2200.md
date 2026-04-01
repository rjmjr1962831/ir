# Claude Code Session Takeaways
**Date:** 2026-04-01
**Session focus:** Homepage pixel-matching, white paper corrections, infrastructure fixes

## Key Decisions & Changes

### Top10Lists (gildi)
1. **SSoT cleanup:** Trimmed COMPREHENSIVE_KNOWLEDGE_DOCUMENT.md from 634 lines to 405 lines (36% reduction). Removed redundant sections 17/18, cut implementation details from Section 21, kept all business rules and "never" rules.
2. **SSoT truncation fix:** The document was truncated at line 632 mid-sentence. Fixed by documenting all 3 GitHub Actions workflows from actual source files. PR #39.
3. **New token rotated:** Old GH_TOKEN (ghp_Vf4U8Z...) was exposed in IR repo's package.json git history. Rotated to new token, updated gildi .env.

### Instant Recall (IR)
4. **White paper fact-checking and corrections:** All 3 research papers (industry, regulatory, legal) had hallucinated/inaccurate statistics. Fixed:
   - "6 federal agencies" for food recalls → corrected to FDA + USDA-FSIS primary
   - Takata "$1.5B+" → corrected to $1B DOJ penalty
   - IKEA $46M → labeled as wrongful death settlement, not CPSC penalty
   - Fisher-Price $19M → labeled as class-action, not CPSC penalty
   - All-product stats (3,200+ recalls, 580M+ units) clearly labeled as all-product, food-specific ~296 added
   - Added 3 missing food recall cases: PCA (28yr prison), Blue Bell ($19.35M), Jensen Farms (33 deaths)

5. **Homepage pixel-matching to production (instantrecall.com):**
   - Solid dark header (not transparent)
   - Sentence case headings, font-weight 400
   - Icon color #00d49d, size 90x90px
   - Video aspect-ratio:16/9 (fixed rendering gap caused by padding-bottom:56.25% hack)
   - Carousels at 10000ms (matching production)
   - Solution labels ALL CAPS
   - Footer cleanup: removed dev-only links, added Cookie Settings, Back to Top
   - HubSpot form embed (Option 1, branded) on homepage and contact pages

6. **HubSpot integration:** Jordan Fallavollita provided embed codes. Using Option 1 (branded). Global hs-script-loader added to head. Form rendering requires client-side JS.

7. **Video deployment:** BTT_WebsiteHeader_v0005.mp4 (13MB) was in public/video/ but never committed to git. Added with static image fallback that fades to video after 2 seconds.

8. **Collaborator access:** Added rgallast (Jordan) as write collaborator on IR repo. Branch protection set on main: requires 1 PR approval for merge. Staging is open for direct push.

9. **Supabase deploy fix:** Access tokens in .env were overriding CLI login. Fixed by passing token as env var: `SUPABASE_ACCESS_TOKEN=sbp_... npx supabase functions deploy`

10. **Node memory:** Set NODE_OPTIONS=--max-old-space-size=16384 (16GB) both in .bashrc and Windows env (setx) to prevent Claude Code crashes.

11. **Aryah AI Best Practices document:** Created comprehensive 18-section best practices doc for IR's AI interaction strategy. Added to dashboard as internal confidential doc at /internal/ai-best-practices.

12. **TinaCMS debug info:** Gathered version info (tinacms 3.7.1, @tinacms/cli 2.2.1), schema, client ID for TinaCMS support ticket.

## Issues / Blockers
- Vercel production branch is `main`, not `staging` — all changes must be merged to main for deployment
- HubSpot form loads slowly (client-side JS) — no fix other than preconnecting
- `/internal/*` routes 404'd on Vercel — changed to `/docs/*` path prefix
- Git push protection blocked push due to exposed GH_TOKEN in package.json history — scrubbed with git filter-branch

## Next Steps
- Complete pixel-matching for /solution page (agent running)
- Mirror remaining subpages if any differences found
- Add ~50 ticker items to match production (currently 14)
- Consider CookieYes integration for GDPR compliance
