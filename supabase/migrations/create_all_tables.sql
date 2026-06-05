-- =====================================================
-- Bionic Solutions Website — Full Database Schema
-- Run this in the Supabase SQL Editor for the new project.
-- =====================================================

-- 1. CONTACT SUBMISSIONS
-- Used by: contact-form, submit-contact edge functions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  message TEXT NOT NULL,
  submitted_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email
  ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at
  ON contact_submissions(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status
  ON contact_submissions(status);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow contact form submissions" ON contact_submissions
  FOR INSERT
  WITH CHECK (auth.role() IN ('anon', 'service_role'));

CREATE POLICY "Allow admin to read submissions" ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'service_role');

COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions from Bionic Solutions website';


-- 2. LEADS
-- Used by: capture-lead, update-lead edge functions
CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255),
  phone VARCHAR(50),
  company VARCHAR(255),
  lead_stage VARCHAR(50) DEFAULT 'initial',
  source VARCHAR(100) DEFAULT 'website',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_lead_stage ON leads(lead_stage);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow service_role to manage leads" ON leads
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

COMMENT ON TABLE leads IS 'Captured leads from Framework Guide downloads + progressive profiling';


-- 3. LEAD MAGNETS
-- Used by: capture-lead edge function (download tracking)
CREATE TABLE IF NOT EXISTS lead_magnets (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id) ON DELETE CASCADE,
  magnet_type VARCHAR(100) NOT NULL,
  download_time TIMESTAMP DEFAULT NOW(),
  ip_address VARCHAR(50),
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_lead_magnets_lead_id ON lead_magnets(lead_id);
CREATE INDEX IF NOT EXISTS idx_lead_magnets_magnet_type ON lead_magnets(magnet_type);
CREATE INDEX IF NOT EXISTS idx_lead_magnets_download_time
  ON lead_magnets(download_time DESC);

ALTER TABLE lead_magnets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow service_role to manage lead_magnets" ON lead_magnets
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

COMMENT ON TABLE lead_magnets IS 'Tracks downloads of lead magnets (Framework Guide PDF, etc.)';


-- 4. DISCOVERY CALL BOOKINGS
-- Used by: book-discovery-call edge function
CREATE TABLE IF NOT EXISTS discovery_call_bookings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(50),
  date DATE NOT NULL,
  time_slot VARCHAR(20) NOT NULL,
  notes TEXT,
  status VARCHAR(50) DEFAULT 'confirmed',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_bookings_date ON discovery_call_bookings(date);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON discovery_call_bookings(email);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON discovery_call_bookings(status);
CREATE UNIQUE INDEX IF NOT EXISTS idx_bookings_slot_unique
  ON discovery_call_bookings(date, time_slot)
  WHERE status = 'confirmed';

ALTER TABLE discovery_call_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow service_role to manage bookings" ON discovery_call_bookings
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

COMMENT ON TABLE discovery_call_bookings IS 'Discovery call bookings made via /book-discovery-call';


-- =====================================================
-- DONE. Verify with:
--   SELECT table_name FROM information_schema.tables
--   WHERE table_schema = 'public' ORDER BY table_name;
-- Should return: contact_submissions, discovery_call_bookings, lead_magnets, leads
-- =====================================================
