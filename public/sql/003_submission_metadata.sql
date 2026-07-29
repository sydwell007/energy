-- Civitas Energy - consent, attribution, and request-trace metadata.
-- Select the application database before importing this file.

CREATE TABLE IF NOT EXISTS lead_submission_meta (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    lead_type ENUM('deploy', 'partner', 'investor', 'contact') NOT NULL,
    lead_id BIGINT UNSIGNED NOT NULL,
    request_id VARCHAR(64) NOT NULL,
    consent_version VARCHAR(20) NOT NULL,
    consent_at DATETIME NOT NULL,
    marketing_opt_in TINYINT(1) NOT NULL DEFAULT 0,
    source_page VARCHAR(200) NOT NULL DEFAULT '',
    referrer VARCHAR(500) NOT NULL DEFAULT '',
    utm_source VARCHAR(120) NOT NULL DEFAULT '',
    utm_medium VARCHAR(120) NOT NULL DEFAULT '',
    utm_campaign VARCHAR(160) NOT NULL DEFAULT '',
    ip_hash CHAR(64) NOT NULL,
    user_agent VARCHAR(500) NOT NULL DEFAULT '',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uq_lead_submission_meta_request_id (request_id),
    KEY idx_lead_submission_meta_lead (lead_type, lead_id),
    KEY idx_lead_submission_meta_created_at (created_at),
    KEY idx_lead_submission_meta_campaign (utm_campaign)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
