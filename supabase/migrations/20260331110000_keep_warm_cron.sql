-- Enable pg_net for HTTP requests from pg_cron
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Keep-warm cron: pings /ping every 10 minutes to prevent edge function cold starts
SELECT cron.schedule(
  'keep-warm-edge',
  '*/10 * * * *',
  $$SELECT net.http_get(url := 'https://ir-zeta.vercel.app/ping');$$
);
