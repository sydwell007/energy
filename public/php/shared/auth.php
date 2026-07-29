<?php

declare(strict_types=1);

function require_api_key(string $expected): void
{
    $provided = $_SERVER['HTTP_X_API_KEY'] ?? '';

    if ($expected === '' || !hash_equals($expected, (string) $provided)) {
        json_response(401, false, null, 'Unauthorised.');
    }
}
