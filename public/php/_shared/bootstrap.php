<?php

declare(strict_types=1);

/**
 * Entry point required by every endpoint. Loads config, wires up shared
 * helpers, applies CORS, and enforces the shared-secret API key.
 *
 * Real credentials live in config.php (gitignored, placed directly on the
 * Afrihost server) or a config file referenced via the
 * ENERGY_CONFIG_FILE environment variable. config.example.php is the
 * committed template - copy it to config.php and fill in real values.
 */

set_exception_handler(function (Throwable $exception): void {
    error_log('[civitas-energy-bridge] ' . $exception->getMessage());
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['success' => false, 'message' => 'Unexpected server error.']);
    exit;
});

$configFile = getenv('ENERGY_CONFIG_FILE') ?: '';
$config = null;

if ($configFile !== '' && is_file($configFile)) {
    $config = require $configFile;
} elseif (is_file(__DIR__ . '/../config.php')) {
    $config = require __DIR__ . '/../config.php';
}

if (!is_array($config)) {
    http_response_code(503);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'success' => false,
        'message' => 'Service configuration unavailable.',
        'code' => 'CONFIG_UNAVAILABLE',
    ]);
    exit;
}

require_once __DIR__ . '/../shared/response.php';
require_once __DIR__ . '/../shared/cors.php';
require_once __DIR__ . '/../shared/db.php';
require_once __DIR__ . '/../shared/auth.php';
require_once __DIR__ . '/../shared/rate_limit.php';
require_once __DIR__ . '/../shared/validate.php';
require_once __DIR__ . '/../shared/lead_meta.php';

apply_cors($config['allowed_origins'] ?? []);
require_api_key((string) ($config['api_key'] ?? ''));

/** @var array{host:string,port:int,name:string,user:string,password:string} $databaseConfig */
$databaseConfig = $config['database'];
$privacySalt = (string) ($config['privacy_salt'] ?? $config['api_key'] ?? '');
