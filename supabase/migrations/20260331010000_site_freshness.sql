-- Site freshness table: stores daily-updated timestamps and counts
-- Used by serve-html and Vercel API routes to inject freshness signals
create table if not exists public.site_freshness (
  id int primary key default 1 check (id = 1),  -- singleton row
  last_content_update timestamptz not null default now(),
  last_ai_surface_update timestamptz not null default now(),
  page_count int not null default 0,
  research_count int not null default 0,
  latest_fda_recall_date text,          -- e.g. "2026-03-28"
  latest_fda_recall_title text,         -- short description of most recent recall
  updated_at timestamptz not null default now()
);

-- Seed the singleton row
insert into public.site_freshness (id, page_count, research_count)
values (1, 16, 3)
on conflict (id) do nothing;

-- RLS: allow service role full access, anon read-only
alter table public.site_freshness enable row level security;

create policy "anon can read site_freshness"
  on public.site_freshness for select
  to anon using (true);

create policy "service_role can do anything on site_freshness"
  on public.site_freshness for all
  to service_role using (true) with check (true);
