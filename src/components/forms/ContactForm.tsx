"use client";

import { type FormEvent, useState } from "react";
import { BackendNotice } from "@/components/ui/BackendNotice";
import FormConsent from "@/components/forms/FormConsent";
import { ButtonLink } from "@/components/ui/Button";
import { useLeadForm } from "@/lib/hooks/useLeadForm";

const contactTypes = [
  { value: "site_host", label: "Site host (petrol / retail / campus)" },
  { value: "fleet_operator", label: "Fleet operator" },
  { value: "partner", label: "Partner (fuel retailer / property / utility)" },
  { value: "investor", label: "Investor" },
  { value: "other", label: "Other" },
] as const;

export default function ContactForm() {
  const { state, message, submit } = useLeadForm("/api/contact");
  const [formKey, setFormKey] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const ok = await submit({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      inquiryType: String(formData.get("type") ?? ""),
      message: String(formData.get("message") ?? ""),
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "/contact",
      consentGiven: formData.get("consent") === "on",
      marketingOptIn: formData.get("marketingOptIn") === "on",
    });

    if (ok) {
      form.reset();
      setFormKey((key) => key + 1);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="Contact form" key={formKey}>
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
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" placeholder="+27" />
        </div>
        <div>
          <label htmlFor="type">I am a</label>
          <select id="type" name="type" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {contactTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us what you want to do: deploy charging, propose a partnership, or request investor info..."
          required
        />
      </div>

      <FormConsent idPrefix="contact" />

      <div className="buttonRow">
        <button className="btn primary" type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending..." : "Submit"}
        </button>
        <ButtonLink href="/investors" variant="gold">
          Request Investor Pack
        </ButtonLink>
        <ButtonLink href="/deploy">Deploy at My Site</ButtonLink>
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
