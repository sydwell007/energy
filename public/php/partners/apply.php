<?php

declare(strict_types=1);

require_once __DIR__ . '/../_shared/bootstrap.php';

require_method('POST');

$db = ce_db($databaseConfig);
enforce_rate_limit($db, 'partners-apply', 15, 3600, $privacySalt);

$input = json_input();

$name = require_field($input['name'] ?? '', 'Name', 120);
$email = require_email_field($input['email'] ?? '');
$partnerType = require_field($input['partner_type'] ?? '', 'Partner type', 60);
$region = require_field($input['region'] ?? '', 'Country / region', 120);
$message = require_field($input['message'] ?? '', 'Message', 4000);
require_privacy_consent($input['consent_given'] ?? false);

$db->beginTransaction();
$stmt = $db->prepare(
    'INSERT INTO partner_applications
        (name, email, partner_type, region, message, status, created_at)
     VALUES (?, ?, ?, ?, ?, "new", NOW())'
);
$stmt->execute([$name, $email, $partnerType, $region, $message]);
$leadId = (int) $db->lastInsertId();
record_lead_metadata($db, 'partner', $leadId, $input, $privacySalt);
$db->commit();

json_response(
    201,
    true,
    ['id' => $leadId],
    'Thanks - your partner application has been received. Our team will review it and follow up shortly.'
);
