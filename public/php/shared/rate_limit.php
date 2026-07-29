<?php

declare(strict_types=1);

/**
 * Simple fixed-window rate limiter backed by the rate_limit_log table.
 * See public/sql/002_rate_limit_schema.sql.
 */
function enforce_rate_limit(
    PDO $db,
    string $bucket,
    int $maxRequests,
    int $windowSeconds,
    string $privacySalt = ''
): void
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $key = $bucket . ':' . substr(hash('sha256', $privacySalt . '|' . $ip), 0, 40);
    $windowStart = date('Y-m-d H:i:s', time() - $windowSeconds);

    $countStmt = $db->prepare(
        'SELECT COUNT(*) FROM rate_limit_log WHERE bucket_key = ? AND created_at >= ?'
    );
    $countStmt->execute([$key, $windowStart]);
    $count = (int) $countStmt->fetchColumn();

    if ($count >= $maxRequests) {
        json_response(429, false, null, 'Too many requests. Please try again shortly.');
    }

    $insertStmt = $db->prepare('INSERT INTO rate_limit_log (bucket_key, created_at) VALUES (?, NOW())');
    $insertStmt->execute([$key]);

    // Amortised cleanup prevents this operational table from growing forever.
    if (random_int(1, 100) === 1) {
        $db->exec('DELETE FROM rate_limit_log WHERE created_at < DATE_SUB(NOW(), INTERVAL 2 DAY)');
    }
}
