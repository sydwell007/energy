import { NextResponse } from "next/server";
import { BridgeApiError, bridgeFetch, isBridgeConfigured } from "@/lib/api/bridge";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isBridgeConfigured()) {
    return NextResponse.json(
      {
        success: true,
        data: {
          application: "healthy",
          backend: "not-configured",
          mode: "fallback",
        },
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    const bridge = await bridgeFetch<Record<string, unknown>>("health.php");
    return NextResponse.json(
      {
        success: true,
        data: {
          application: "healthy",
          backend: bridge.data?.status ?? "healthy",
          mode: "live",
        },
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    const message = error instanceof BridgeApiError ? error.message : "Backend health check failed.";
    return NextResponse.json(
      {
        success: false,
        data: {
          application: "healthy",
          backend: "unreachable",
          mode: "fallback",
        },
        message,
      },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }
}
