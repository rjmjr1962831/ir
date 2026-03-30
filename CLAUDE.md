# CLAUDE.md -- InstantRecall (ir)

## Single Source of Truth

The project's SSoT is the **GEO Implementation Ledger** (database-driven, live at `/geo-ledger`). It contains the complete history of every action taken, dimension scores, signal status, and evidence.

For workflow rules and commands, this file (CLAUDE.md) is authoritative.

## Execution Rules

**RUN ALL TASKS IN THE BACKGROUND AND USE AS MANY AGENTS AS REQUIRED.** Every task -- coding, research, investigation, deployment -- MUST be launched as a background agent. Use multiple agents in parallel whenever work can be split. Never block the conversation waiting for a task to complete. The user can continue giving instructions while work runs in parallel.

**KEEP YOURSELF AVAILABLE TO ROBERT AT ALL TIMES.** Never block on long-running tasks. Launch them in the background and stay responsive. Robert should never have to wait for you.

**AUTONOMOUS EXECUTION. DO NOT ASK FOR APPROVAL EXCEPT AS NOTED BELOW.** Robert runs with `dangerouslySkipPermissions: true`. Execute all commands without pausing to ask permission. The ONLY exceptions where you stop and ask are: pts/ptm (pushing to branches), ambiguity in requirements, or changes that could break production.

**OUTPUT FILES GO IN DOWNLOADS.** Whenever generating a file for Robert (PDFs, reports, CSVs, exports, documents), save it to `C:\Users\ROBER\Downloads\`.

---

## Critical Rules

1. **Branch flow:** staging -> main only. Never merge main into staging. Never push without Robert's explicit permission (pts/ptm).
   - **ALWAYS create the feature branch BEFORE writing any code.** Branch off staging, do your work on the branch, then PR to staging. Never commit directly to staging.
   - **ALWAYS run code through Qodo before merging to staging.** Poll for Qodo comments yourself -- never make Robert paste them.
2. **Internal docs stay on staging.** CLAUDE.md, COMPREHENSIVE_KNOWLEDGE_DOCUMENT.md, takeaways, prompts -- never on main.
3. **Clean-room HTML for bots.** All bot-facing pages use Supabase edge functions. No React SPA, no JS rendering for bot pages.
4. **Verification protocol:** You are not done until you confirm the change actually worked. Deploy, load the live page, verify. "Code updated" is not completion. "Deployed. Verified at [URL]." is.
5. **"ALL" means every single instance.** Fix every file, every page, every occurrence. Grep exhaustively; fix exhaustively.

## Repo: rjmjr1962831/ir

---

## Commands

### LOG (Record Work to Ledger)

After every work session or significant change, INSERT a new entry into the `geo_ledger_entries` table in Supabase (project dewbyvlbmkersxjrcknm). Include: entry_date, signal_category, action_summary, rationale, how_steps (jsonb array), evidence_before, evidence_after, verification_cmd, status, impact, pending_items (jsonb array).

Also update `geo_signal_status` and `geo_score_dimensions` if any signal flipped or dimension score changed. INSERT into `geo_score_history` if the composite score changed.

### PK (Load Project Knowledge)

When Robert says `pk` or "project knowledge":

1. Query the `geo_ledger_entries`, `geo_signal_status`, and `geo_score_dimensions` tables from Supabase.
2. Review recent entries to understand current project state.
3. Answer these questions:
   a. What is the current GEO score?
   b. Which signals are passing and which are failing?
   c. What are the lowest-scoring dimensions?
   d. When do I require Robert's express permission to execute changes?
   e. Do we always send code to Qodo for review?
   f. Do I always run all tasks in the background with as many agents as possible?

### PTS (Push to Staging)

When Robert says `pts`: `git add .`, `git commit`, `git push origin staging`.

### PTM (Push to Main)

When Robert says `ptm`: Run `npm run merge-to-main` only. Do not touch main without ptm.

---

## Style Rules

- No em dashes. Use commas, semicolons, periods, or restructured sentences.
- No em dashes in generated content, file edits, or responses.
- For live site checks: use `curl -s -H "Cache-Control: no-cache"` -- do not use web_fetch (returns stale content).
- Terminal commands: always `cd C:\Users\rober\ir` first.

---

## Tech Stack

- **Frontend:** Vercel (edge proxy at `api/html.js`), clean-room HTML
- **Backend:** Supabase Edge Functions (Deno)
- **No React SPA** -- all pages are server-rendered clean-room HTML
- **Vercel proxy passes through upstream Cache-Control headers**
