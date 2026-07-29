<?php

declare(strict_types=1);

/**
 * Send a JSON envelope and terminate the request.
 *
 * @param array<string,mixed>|null $data
 * @param array<string,mixed> $meta
 */
function json_response(int $status, bool $success, $data = null, ?string $message = null, array $meta = []): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store, max-age=0');
    header('X-Content-Type-Options: nosniff');

    $payload = ['success' => $success];
    if ($data !== null) {
        $payload['data'] = $data;
    }
    if ($message !== null) {
        $payload['message'] = $message;
    }
    if ($meta !== []) {
        $payload['meta'] = $meta;
    }

    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function require_method(string ...$allowed): void
{
    $method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
    if (!in_array($method, $allowed, true)) {
        json_response(405, false, null, 'Method not allowed.');
    }
}

/**
 * @return array<string,mixed>
 */
function json_input(): array
{
    $raw = file_get_contents('php://input') ?: '';
    if (strlen($raw) > 32768) {
        json_response(413, false, null, 'Request body is too large.');
    }
    if ($raw === '') {
        return [];
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        json_response(400, false, null, 'Invalid JSON body.');
    }

    return $decoded;
}
