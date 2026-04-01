-- Contact form submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id bigserial PRIMARY KEY,
  ts timestamptz NOT NULL DEFAULT now(),
  email text NOT NULL,
  company text,
  num_locations text,
  first_name text,
  last_name text,
  work_email text,
  phone text,
  comments text,
  source text DEFAULT 'website',
  status text DEFAULT 'new',
  read_at timestamptz
);

CREATE INDEX IF NOT EXISTS idx_contact_ts ON contact_submissions (ts DESC);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'contact_submissions' AND policyname = 'service_role_all'
  ) THEN
    CREATE POLICY service_role_all ON contact_submissions FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;
