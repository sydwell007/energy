<?php

declare(strict_types=1);

function clean_string($value, int $maxLength = 500): string
{
    if (!is_string($value)) {
        return '';
    }

    return mb_substr(trim($value), 0, $maxLength);
}

function require_field($value, string $label, int $maxLength = 500): string
{
    $clean = clean_string($value, $maxLength);
    if ($clean === '') {
        json_response(422, false, null, $label . ' is required.');
    }

    return $clean;
}

function require_email_field($value): string
{
    $clean = strtolower(clean_string($value, 254));
    if (!filter_var($clean, FILTER_VALIDATE_EMAIL)) {
        json_response(422, false, null, 'A valid email address is required.');
    }

    return $clean;
}
