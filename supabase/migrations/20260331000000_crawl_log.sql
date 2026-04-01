-- Crawl log: tracks bot requests for crawl-stats dashboard
CREATE TABLE IF NOT EXISTS crawl_log (
  id bigserial PRIMARY KEY,
  ts timestamptz NOT NULL DEFAULT now(),
  bot text NOT NULL,
  path text NOT NULL,
  ua text,
  status int DEFAULT 200,
  ip text
);

CREATE INDEX IF NOT EXISTS idx_crawl_log_ts ON crawl_log (ts DESC);
CREATE INDEX IF NOT EXISTS idx_crawl_log_bot ON crawl_log (bot, ts DESC);
CREATE INDEX IF NOT EXISTS idx_crawl_log_path ON crawl_log (path, ts DESC);

ALTER TABLE crawl_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_all" ON crawl_log FOR ALL USING (true) WITH CHECK (true);
