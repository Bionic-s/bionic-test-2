-- Migration: Add executive briefing fields to contact_submissions
-- Created: 2026-06-03
-- Purpose: Accept role, industry, priority, and organization_size from the Executive Briefing form

ALTER TABLE contact_submissions
  ADD COLUMN IF NOT EXISTS role VARCHAR(255),
  ADD COLUMN IF NOT EXISTS industry VARCHAR(255),
  ADD COLUMN IF NOT EXISTS priority VARCHAR(255),
  ADD COLUMN IF NOT EXISTS organization_size VARCHAR(50);

COMMENT ON COLUMN contact_submissions.role IS 'Job title or role of the submitter';
COMMENT ON COLUMN contact_submissions.industry IS 'Industry vertical (Government, Banking, Oil & Gas, Healthcare, Enterprise)';
COMMENT ON COLUMN contact_submissions.priority IS 'Executive Briefing Type requested';
COMMENT ON COLUMN contact_submissions.organization_size IS 'Organization size bracket (<500, 500-2K, 2K-10K, 10K+)';
