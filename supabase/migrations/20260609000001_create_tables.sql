-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous insertions
CREATE POLICY "Enable anonymous insert" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only authenticated users can view submissions
CREATE POLICY "Enable authenticated select" ON contact_submissions
  FOR SELECT TO authenticated
  USING (true);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous insertions
CREATE POLICY "Enable anonymous insert" ON newsletter_subscribers
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only authenticated users can view subscribers
CREATE POLICY "Enable authenticated select" ON newsletter_subscribers
  FOR SELECT TO authenticated
  USING (true);
