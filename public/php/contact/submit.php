<?php

declare(strict_types=1);

require_once __DIR__ . '/../_shared/bootstrap.php';

require_method('POST');

$db = ce_db($databaseConfig);
enforce_rate_limit($db, 'contact-submit', 15, 3600, $privacySalt);

$input = json_input();

$name = require_field($input['name'] ?? '', 'Name', 120);
$email = require_email_field($input['email'] ?? '');
$phone = clean_string($input['phone'] ?? '', 40);
$inquiryType = require_field($input['inquiry_type'] ?? '', 'Inquiry type', 60);
$message = require_field($input['message'] ?? '', 'Message', 4000);
require_privacy_consent($input['consent_given'] ?? false);

$db->beginTransaction();
$stmt = $db->prepare(
    'INSERT INTO contact_messages
        (name, email, phone, inquiry_type, message, status, created_at)
     VALUES (?, ?, ?, ?, ?, "new", NOW())'
);
$stmt->execute([$name, $email, $phone, $inquiryType, $message]);
$leadId = (int) $db->lastInsertId();
record_lead_metadata($db, 'contact', $leadId, $input, $privacySalt);
$db->commit();

json_response(
    201,
    true,
    ['id' => $leadId],
    'Thanks - your message has been received. Our team will route it to the right people and follow up shortly.'
);
