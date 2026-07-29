"use client";

import { type FormEvent, useState } from "react";
import { BackendNotice } from "@/components/ui/BackendNotice";
import FormConsent from "@/components/forms/FormConsent";
import { useLeadForm } from "@/lib/hooks/useLeadForm";

const partnerTypeOptions = [
  "Fuel retailer",
  "Property owner / developer",
  "Fleet operator",
  "Utility / grid partner",
  "Financing / leasing",
  "Municipality / public sector",
  "Other",
] as const;

export default function PartnerApplicationForm() {
  const { state, message, submit } = useLeadForm("/api/partners/apply");
  const [formKey, setFormKey] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const ok = await submit({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      partnerType: String(formData.get("partnerType") ?? ""),
      region: String(formData.get("region") ?? ""),
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
    <form className="form" onSubmit={handleSubmit} aria-label="Partner application form" key={formKey}>
      <div className="row2">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className="row2">
        <div>
          <label htmlFor="partnerType">Partner type</label>
          <select id="partnerType" name="partnerType" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {partnerTypeOptions.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="region">Country / region</label>
          <input id="region" name="region" type="text" placeholder="e.g., South Africa" required />
        </div>
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Describe your sites, fleets, or partnership idea." required />
      </div>

      <FormConsent idPrefix="partner" />

      <div className="buttonRow">
        <button className="btn primary" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending..." : "Send Partner Inquiry"}
        </button>
      </div>

      {state === "success" ? (
        <p className="formStatus" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
      {state === "fallback" ? <BackendNotice email="partners@civitasenergy.co.za" /> : null}
      {state === "error" ? (
        <p className="formError" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
