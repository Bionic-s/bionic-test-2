-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  message TEXT NOT NULL,
  submitted_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new'
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create RLS policy to allow inserts from both anon and service_role (required for edge functions)
CREATE POLICY "Allow contact form submissions" ON contact_submissions
  FOR INSERT
  WITH CHECK (auth.role() IN ('anon', 'service_role'));

-- Create RLS policy to allow service_role to read all submissions
CREATE POLICY "Allow admin to read submissions" ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'service_role');

-- Add comment
COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions from Bionic Solutions website';
