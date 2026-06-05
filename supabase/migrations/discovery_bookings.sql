-- Create discovery_bookings table (target: Supabase project krjgjaemysvutpwbwgst)
CREATE TABLE IF NOT EXISTS discovery_bookings (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT,
  role TEXT,
  notes TEXT,
  selected_date TEXT NOT NULL,
  selected_time TEXT NOT NULL,
  source TEXT DEFAULT 'direct',
  intent TEXT DEFAULT 'ibm-experts',
  user_agent TEXT
);

-- Index for lookup by email
CREATE INDEX IF NOT EXISTS idx_discovery_bookings_email ON discovery_bookings(email);
CREATE INDEX IF NOT EXISTS idx_discovery_bookings_date ON discovery_bookings(selected_date);
