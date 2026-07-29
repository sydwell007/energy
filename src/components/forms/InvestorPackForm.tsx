"use client";

import { type FormEvent, useState } from "react";
import { BackendNotice } from "@/components/ui/BackendNotice";
import FormConsent from "@/components/forms/FormConsent";
import { useLeadForm } from "@/lib/hooks/useLeadForm";

const interestOptions = ["Pilot funding", "Growth round", "Project finance", "Strategic partnership", "Other"] as const;

export default function InvestorPackForm() {
  const { state, message, submit } = useLeadForm("/api/investors/request-pack");
  const [formKey, setFormKey] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const ok = await submit({
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      interest: String(formData.get("interest") ?? ""),
      message: String(formData.get("message") ?? ""),
      consentGiven: formData.get("consent") === "on",
      marketingOptIn: formData.get("marketingOptIn") === "on",
    });

    if (ok) {
      form.reset();
      setFormKey((key) => key + 1);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="Investor pack request form" key={formKey}>
      <div className="row2">
        <div>
          <label htmlFor="fullName">Name</label>
          <input id="fullName" name="fullName" type="text" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className="row2">
        <div>
          <label htmlFor="organization">Organization</label>
          <input id="organization" name="organization" type="text" placeholder="Fund / DFI / Corporate" />
        </div>
        <div>
          <label htmlFor="interest">Interest</label>
          <select id="interest" name="interest" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {interestOptions.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="What geography, ticket size, and timeline are you considering?" />
      </div>

      <FormConsent idPrefix="investor" />

      <div className="buttonRow">
        <button className="btn gold" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending..." : "Request Investor Pack"}
        </button>
      </div>

      {state === "success" ? (
        <p className="formStatus" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
      {state === "fallback" ? <BackendNotice email="invest@civitasenergy.co.za" /> : null}
      {state === "error" ? (
        <p className="formError" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
