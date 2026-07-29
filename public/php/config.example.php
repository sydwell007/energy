<?php

/**
 * Civitas Energy - Afrihost bridge configuration template.
 *
 * Copy this file to `config.php` (same directory) on the live Afrihost
 * server and fill in real values. `config.php` must NEVER be committed to
 * git - it is listed in .gitignore for that reason.
 */

return [
    'environment' => 'production',

    // Only origins listed here can call this bridge from a browser (Next.js
    // route handlers call server-to-server and are not affected by CORS).
    'allowed_origins' => [
        'https://energy.civitasholdings.co.za',
        'http://localhost:3000',
    ],

    // Shared secret sent by Next.js as the X-API-Key header. Generate a long
    // random value, e.g. `php -r "echo bin2hex(random_bytes(32));"`.
    'api_key' => 'REPLACE_ON_AFRIHOST_WITH_A_LONG_RANDOM_VALUE',

    // Used to hash rate-limit and attribution fingerprints. Generate a
    // different long random value from api_key.
    'privacy_salt' => 'REPLACE_ON_AFRIHOST_WITH_A_DIFFERENT_RANDOM_VALUE',

    'database' => [
        'host' => 'localhost',
        'port' => 3306,
        'name' => 'REPLACE_ON_AFRIHOST',
        'user' => 'REPLACE_ON_AFRIHOST',
        'password' => 'REPLACE_ON_AFRIHOST',
    ],
];
