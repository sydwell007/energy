"use client";

import { useState } from "react";

export type LeadFormState = "idle" | "submitting" | "success" | "fallback" | "error";

export function useLeadForm(endpoint: string) {
  const [state, setState] = useState<LeadFormState>("idle");
  const [message, setMessage] = useState("");

  async function submit(body: Record<string, unknown>): Promise<boolean> {
    setState("submitting");
    setMessage("");

    try {
      const searchParams = new URLSearchParams(window.location.search);
      const enrichedBody = {
        ...body,
        sourcePage: body.sourcePage ?? window.location.pathname,
        referrer: document.referrer,
        utmSource: searchParams.get("utm_source") ?? "",
        utmMedium: searchParams.get("utm_medium") ?? "",
        utmCampaign: searchParams.get("utm_campaign") ?? "",
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enrichedBody),
      });
      const payload = (await response.json()) as { success: boolean; fallback?: boolean; message?: string };

      if (response.ok && payload.success) {
        setState("success");
        setMessage(payload.message ?? "Submitted successfully.");
        return true;
      }

      if (payload.fallback) {
        setState("fallback");
        setMessage(payload.message ?? "");
        return false;
      }

      setState("error");
      setMessage(payload.message ?? "Something went wrong. Please try again.");
      return false;
    } catch {
      setState("error");
      setMessage("Network error. Please check your connection and try again.");
      return false;
    }
  }

  return { state, message, submit };
}
