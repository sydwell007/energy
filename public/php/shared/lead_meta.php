<?php

declare(strict_types=1);

function require_privacy_consent($value): void
{
    if ($value !== true && $value !== 1 && $value !== '1') {
        json_response(422, false, null, 'Please accept the Privacy Policy to continue.');
    }
}

/**
 * Store consent, attribution, and a privacy-preserving request fingerprint
 * separately from the lead record. This keeps operational tables focused
 * while preserving a complete compliance audit trail.
 *
 * @param array<string,mixed> $input
 */
function record_lead_metadata(
    PDO $db,
    string $leadType,
    int $leadId,
    array $input,
    string $privacySalt
): void {
    $requestId = clean_string($input['request_id'] ?? '', 64);
    if ($requestId === '') {
        $requestId = bin2hex(random_bytes(16));
    }

    $clientIp = clean_string($input['client_ip'] ?? ($_SERVER['REMOTE_ADDR'] ?? ''), 120);
    $ipHash = hash('sha256', $privacySalt . '|' . $clientIp);
    $userAgent = clean_string($input['user_agent'] ?? '', 500);

    $stmt = $db->prepare(
        'INSERT INTO lead_submission_meta
            (lead_type, lead_id, request_id, consent_version, consent_at, marketing_opt_in,
             source_page, referrer, utm_source, utm_medium, utm_campaign, ip_hash, user_agent, created_at)
         VALUES (?, ?, ?, "2026-07", NOW(), ?, ?, ?, ?, ?, ?, ?, ?, NOW())'
    );
    $stmt->execute([
        $leadType,
        $leadId,
        $requestId,
        !empty($input['marketing_opt_in']) ? 1 : 0,
        clean_string($input['source_page'] ?? '', 200),
        clean_string($input['referrer'] ?? '', 500),
        clean_string($input['utm_source'] ?? '', 120),
        clean_string($input['utm_medium'] ?? '', 120),
        clean_string($input['utm_campaign'] ?? '', 160),
        $ipHash,
        $userAgent,
    ]);
}
