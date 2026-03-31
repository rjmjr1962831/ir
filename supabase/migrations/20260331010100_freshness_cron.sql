-- Schedule daily freshness refresh at 04:00 UTC via pg_cron
-- pg_cron calls the refresh-site-freshness edge function

-- Enable pg_cron extension (already available on Supabase Pro plans)
create extension if not exists pg_cron with schema extensions;

-- Schedule the job: call the edge function daily at 04:00 UTC
-- The edge function handles the actual logic (FDA fetch, counts, upsert)
select cron.schedule(
  'refresh-site-freshness',
  '0 4 * * *',
  $$
  select
    net.http_post(
      url := 'https://dewbyvlbmkersxjrcknm.supabase.co/functions/v1/refresh-site-freshness',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
      ),
      body := '{}'::jsonb
    );
  $$
);
