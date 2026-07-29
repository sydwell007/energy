<?php

declare(strict_types=1);

require_once __DIR__ . '/_shared/bootstrap.php';

require_method('GET');

$db = ce_db($databaseConfig);
enforce_rate_limit($db, 'health', 60, 60, $privacySalt);
$databaseTime = $db->query('SELECT UTC_TIMESTAMP()')->fetchColumn();

json_response(200, true, [
    'service' => 'civitas-energy-bridge',
    'status' => 'healthy',
    'database' => 'connected',
    'database_time_utc' => $databaseTime,
], 'Service is healthy.');
