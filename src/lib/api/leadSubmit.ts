import { NextResponse } from "next/server";
import { BridgeApiError, bridgeFetch } from "@/lib/api/bridge";
import { ValidationError } from "@/lib/api/validate";

const FALLBACK_MESSAGE =
  "Thanks - our backend isn't connected in this environment yet. Please email us directly and we'll follow up personally.";

export async function submitLeadFromRequest<TBody>(
  request: Request,
  phpPath: string,
  buildBody: (raw: unknown) => TBody
): Promise<NextResponse> {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json({ success: false, message: "Content-Type must be application/json." }, { status: 415 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(contentLength) && contentLength > 32_768) {
    return NextResponse.json({ success: false, message: "Request body is too large." }, { status: 413 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  let body: TBody;
  try {
    body = buildBody(raw);
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ success: false, message: error.message }, { status: 422 });
    }
    throw error;
  }

  try {
    const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
    const requestBody = {
      ...(body as Record<string, unknown>),
      request_id: crypto.randomUUID(),
      client_ip: forwardedFor,
      user_agent: request.headers.get("user-agent") ?? "",
    };
    const result = await bridgeFetch(phpPath, { method: "POST", body: requestBody });
    return NextResponse.json(
      { success: true, message: result.message ?? "Submitted successfully.", data: result.data },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof BridgeApiError) {
      if (error.code === "BRIDGE_NOT_CONFIGURED") {
        return NextResponse.json({ success: false, fallback: true, message: FALLBACK_MESSAGE }, { status: 200 });
      }
      return NextResponse.json({ success: false, message: error.message }, { status: error.status });
    }
    return NextResponse.json({ success: false, message: "Unexpected server error." }, { status: 500 });
  }
}
