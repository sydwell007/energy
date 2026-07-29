-- Civitas Energy - full rollback. Drops every table created by 001-003.
-- Run only if you need to completely reset the application database.
-- Foreign-key-free schema, so order only matters for readability.

DROP TABLE IF EXISTS lead_submission_meta;
DROP TABLE IF EXISTS rate_limit_log;
DROP TABLE IF EXISTS contact_messages;
DROP TABLE IF EXISTS investor_requests;
DROP TABLE IF EXISTS partner_applications;
DROP TABLE IF EXISTS site_deployment_requests;
