import Link from "next/link";

export default function FormConsent({ idPrefix }: { idPrefix: string }) {
  const consentId = `${idPrefix}-privacy-consent`;
  const updatesId = `${idPrefix}-updates`;

  return (
    <div className="formConsent">
      <label className="checkField" htmlFor={consentId}>
        <input id={consentId} name="consent" type="checkbox" required />
        <span>
          I agree to Civitas Energy processing these details to respond to my enquiry, as described in the{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </span>
      </label>
      <label className="checkField checkFieldOptional" htmlFor={updatesId}>
        <input id={updatesId} name="marketingOptIn" type="checkbox" />
        <span>Keep me informed about relevant rollout and network updates. Optional.</span>
      </label>
      <p className="formTrust">Your information is encrypted in transit and never sold.</p>
    </div>
  );
}
