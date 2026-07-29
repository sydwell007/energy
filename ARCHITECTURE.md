# Civitas Energy architecture

## 1. Experience architecture

The site is organised around four audiences instead of a flat list of
marketing pages.

| Audience | Entry points | Conversion |
| --- | --- | --- |
| Site hosts (petrol, retail, campus, airport) | `/`, `/offerings`, `/petrol-program`, `/how-it-works` | `/deploy` |
| Fleet operators | `/offerings`, `/how-it-works`, `/partners` | `/deploy` or `/partners/apply` |
| Partners (fuel retail, property, utility, finance, municipal) | `/partners`, `/petrol-program` | `/partners/apply` |
| Investors | `/revenue`, `/investors`, `/about` | Investor pack request |

The shared header groups secondary material under **Discover**, **Partner**,
and **Investors** while keeping the primary **Deploy at My Site** and
**Petrol Station Blend** CTAs immediately visible. Mobile navigation uses the
same hierarchy and includes focus trapping, Escape-to-close, and scroll
locking.

## 2. Frontend runtime

- Next.js App Router with Server Components by default.
- Static rendering for marketing and legal routes.
- Dynamic rendering only for API route handlers.
- Geist variable fonts self-hosted by `next/font`.
- Shared design tokens (dark EV-infrastructure theme) in `src/app/globals.css`.
- Small client boundaries only for the rollout tabs, mobile navigation,
  lead-capture forms, and reveal animations.

## 3. Data flow

```text
Browser form
  -> same-origin Next.js Route Handler
  -> validation + request ID + size/content-type checks
  -> authenticated PHP bridge request
  -> PHP validation + salted rate limit
  -> MySQL lead table + consent/attribution audit record
```

The API key is server-only. Browser code never receives PHP or database
credentials. If bridge configuration is absent or temporarily unavailable,
lead forms show a direct-contact fallback instead of failing silently.

## 4. Backend assets

- `public/php/shared`: authentication, CORS, database, validation, response,
  rate-limit, and lead-metadata primitives.
- `public/php/{deploy,partners,investors,contact}`: narrow single-purpose
  write endpoints.
- `public/php/health.php`: protected service and database health check.
- `public/sql`: ordered MySQL schema, rate-limit, and consent metadata
  migrations.

## 5. Security and compliance

- Framework security headers are configured in `next.config.ts`.
- Next.js validates JSON content type, body size, and all required values.
- PHP endpoints repeat validation at the trust boundary.
- Every lead requires explicit privacy consent.
- Campaign attribution and consent receipts are stored separately from
  operational lead tables.
- Raw visitor IPs are not stored; rate limits and audit records use salted
  hashes.
- Runtime dependencies are pinned to audited patched versions through npm
  overrides where the framework still carries older transitive packages.

## 6. Deployment contract

1. Build and deploy the Next.js application (Vercel).
2. Import SQL migrations in numeric order (`public/sql`).
3. Deploy the PHP bridge (`public/php`) to Afrihost and create an
   uncommitted `config.php` from `config.example.php`.
4. Add matching `ENERGY_BRIDGE_URL` and `ENERGY_API_KEY` values to the
   Next.js host.
5. Verify `/api/health`, then submit a non-production test lead and confirm
   both the lead row and `lead_submission_meta` audit row.
