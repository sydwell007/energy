/**
 * Server-only client for the Civitas Energy Afrihost PHP bridge.
 * Never import this from a "use client" component - it reads secrets from
 * process.env and must only run on the server (route handlers).
 */

export type BridgeEnvelope<T> = {
  success: boolean;
  data?: T;
  message?: string;
  meta?: Record<string, unknown>;
};

export class BridgeApiError extends Error {
  status: number;
  code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = "BridgeApiError";
    this.status = status;
    this.code = code;
  }
}

export function isBridgeConfigured(): boolean {
  return Boolean(process.env.ENERGY_BRIDGE_URL && process.env.ENERGY_API_KEY);
}

export async function bridgeFetch<T>(
  path: string,
  init: { method?: "GET" | "POST"; body?: unknown; searchParams?: Record<string, string | undefined> } = {}
): Promise<BridgeEnvelope<T>> {
  const baseUrl = process.env.ENERGY_BRIDGE_URL;
  const apiKey = process.env.ENERGY_API_KEY;

  if (!baseUrl || !apiKey) {
    throw new BridgeApiError("The Civitas Energy backend is not configured yet.", 503, "BRIDGE_NOT_CONFIGURED");
  }

  const timeoutMs = Number(process.env.ENERGY_API_TIMEOUT_MS ?? 10000);
  const url = new URL(path.replace(/^\//, ""), baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);

  if (init.searchParams) {
    for (const [key, value] of Object.entries(init.searchParams)) {
      if (value !== undefined && value !== "") url.searchParams.set(key, value);
    }
  }

  let response: Response;
  try {
    response = await fetch(url.toString(), {
      method: init.method ?? "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: init.body !== undefined ? JSON.stringify(init.body) : undefined,
      signal: AbortSignal.timeout(timeoutMs),
      cache: "no-store",
    });
  } catch (error) {
    throw new BridgeApiError(
      error instanceof Error && error.name === "TimeoutError"
        ? "The Civitas Energy backend timed out."
        : "Could not reach the Civitas Energy backend.",
      502,
      "BRIDGE_UNREACHABLE"
    );
  }

  let payload: BridgeEnvelope<T>;
  try {
    payload = (await response.json()) as BridgeEnvelope<T>;
  } catch {
    throw new BridgeApiError("The Civitas Energy backend returned an invalid response.", 502, "BRIDGE_BAD_RESPONSE");
  }

  if (!response.ok || !payload.success) {
    throw new BridgeApiError(payload.message ?? "The Civitas Energy backend request failed.", response.status, "BRIDGE_ERROR");
  }

  return payload;
}
