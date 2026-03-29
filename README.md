# instantrecall.com

Clean-room HTML edge function architecture.

## Stack
- Supabase Edge Functions (serve-html)
- Vercel (proxy + CDN)
- No React SPA — all pages are clean-room HTML

## Local dev
Set env vars in `.env`:
```
SUPABASE_URL=https://<ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...
```
