<?php

declare(strict_types=1);

require_once __DIR__ . '/../_shared/bootstrap.php';

require_method('POST');

$db = ce_db($databaseConfig);
enforce_rate_limit($db, 'deploy-submit', 15, 3600, $privacySalt);

$input = json_input();

$name = require_field($input['name'] ?? '', 'Name', 120);
$email = require_email_field($input['email'] ?? '');
$siteType = require_field($input['site_type'] ?? '', 'Site type', 60);
$city = require_field($input['city'] ?? '', 'City / area', 120);
$bays = clean_string($input['bays'] ?? '', 40);
$gridStatus = clean_string($input['grid_status'] ?? '', 60);
$message = clean_string($input['message'] ?? '', 4000);
require_privacy_consent($input['consent_given'] ?? false);

$db->beginTransaction();
$stmt = $db->prepare(
    'INSERT INTO site_deployment_requests
        (name, email, site_type, city, bays, grid_status, message, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, "new", NOW())'
);
$stmt->execute([$name, $email, $siteType, $city, $bays, $gridStatus, $message]);
$leadId = (int) $db->lastInsertId();
record_lead_metadata($db, 'deploy', $leadId, $input, $privacySalt);
$db->commit();

json_response(
    201,
    true,
    ['id' => $leadId],
    'Thanks - your deployment request has been received. Our team will assess your site and follow up shortly.'
);
