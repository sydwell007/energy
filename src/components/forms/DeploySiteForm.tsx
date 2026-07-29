"use client";

import { type FormEvent, useState } from "react";
import { BackendNotice } from "@/components/ui/BackendNotice";
import FormConsent from "@/components/forms/FormConsent";
import { useLeadForm } from "@/lib/hooks/useLeadForm";

const siteTypes = [
  "Petrol station",
  "Mall / retail",
  "Office park",
  "Campus / school",
  "Airport / transport hub",
  "Fleet depot",
  "Other",
] as const;

const gridStatuses = ["Unsure", "Good (rare outages)", "Medium (some outages)", "Constrained (frequent outages)"] as const;

export default function DeploySiteForm() {
  const { state, message, submit } = useLeadForm("/api/deploy");
  const [formKey, setFormKey] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const ok = await submit({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      siteType: String(formData.get("siteType") ?? ""),
      city: String(formData.get("city") ?? ""),
      bays: String(formData.get("bays") ?? ""),
      gridStatus: String(formData.get("gridStatus") ?? ""),
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
    <form className="form" onSubmit={handleSubmit} aria-label="Deploy charging at my site form" key={formKey}>
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
          <label htmlFor="siteType">Site type</label>
          <select id="siteType" name="siteType" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {siteTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city">City / area</label>
          <input id="city" name="city" type="text" placeholder="e.g., Cape Town" required />
        </div>
      </div>

      <div className="row2">
        <div>
          <label htmlFor="bays">Parking bays available</label>
          <input id="bays" name="bays" type="text" placeholder="e.g., 4–8" />
        </div>
        <div>
          <label htmlFor="gridStatus">Grid status (best guess)</label>
          <select id="gridStatus" name="gridStatus" defaultValue="Unsure">
            {gridStatuses.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message">Notes</label>
        <textarea
          id="message"
          name="message"
          placeholder="Any details: site traffic, nearby highways, fleet demand, desired timeline."
        />
      </div>

      <FormConsent idPrefix="deploy" />

      <div className="buttonRow">
        <button className="btn primary" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending..." : "Send Deployment Request"}
        </button>
      </div>

      {state === "success" ? (
        <p className="formStatus" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
      {state === "fallback" ? <BackendNotice /> : null}
      {state === "error" ? (
        <p className="formError" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
