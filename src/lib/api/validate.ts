export function cleanString(value: unknown, maxLength = 500): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export function requireString(value: unknown, field: string, maxLength = 500): string {
  const clean = cleanString(value, maxLength);
  if (!clean) throw new ValidationError(`${field} is required.`);
  return clean;
}

export function requireEmail(value: unknown): string {
  const clean = cleanString(value, 254).toLowerCase();
  if (!isValidEmail(clean)) throw new ValidationError("A valid email address is required.");
  return clean;
}

export function requireConsent(value: unknown): true {
  if (value !== true) {
    throw new ValidationError("Please accept the Privacy Policy to continue.");
  }
  return true;
}

export function leadContext(record: Record<string, unknown>) {
  return {
    consent_given: requireConsent(record.consentGiven),
    marketing_opt_in: record.marketingOptIn === true,
    source_page: cleanString(record.sourcePage, 200),
    referrer: cleanString(record.referrer, 500),
    utm_source: cleanString(record.utmSource, 120),
    utm_medium: cleanString(record.utmMedium, 120),
    utm_campaign: cleanString(record.utmCampaign, 160),
  };
}
