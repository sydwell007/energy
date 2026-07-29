# Civitas Energy PHP bridge

PHP 8.1+ API for Afrihost. Copy `config.example.php` to `config.php` on the
Afrihost server, import all MySQL migrations from `public/sql`, and set
`ENERGY_BRIDGE_URL` + `ENERGY_API_KEY` on the Next.js deployment (Vercel) to
point at this `/php` directory.

Implemented endpoints:

- `GET /health.php` - protected service + database health check
- `POST /deploy/submit.php` - "Deploy at My Site" requests
- `POST /partners/apply.php` - partner applications (fuel retailers, property,
  fleet operators, utilities, financiers, municipalities)
- `POST /investors/request-pack.php` - investor pack requests
- `POST /contact/submit.php` - general contact form routing

Every write endpoint requires a `consent_given` value, applies a salted
fixed-window rate limit, and writes a separate `lead_submission_meta` audit
record with campaign attribution and a privacy-preserving IP fingerprint.

Do not deploy this directory as Vercel static content. The repository excludes
it through `.vercelignore` and blocks `/php/*` in Next.js.
