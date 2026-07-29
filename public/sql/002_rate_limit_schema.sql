-- Civitas Energy - shared rate-limit log used by public/php/shared/rate_limit.php.
-- Select the application database before importing this file.

CREATE TABLE IF NOT EXISTS rate_limit_log (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    bucket_key VARCHAR(160) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_rate_limit_log_bucket_created (bucket_key, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
