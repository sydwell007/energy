export function BackendNotice({ email = "deploy@civitasenergy.co.za" }: { email?: string }) {
  return (
    <p className="backendNotice" role="status">
      Our request desk is finishing its final connection. Your details are safe to submit above, or you can
      reach us right now at{" "}
      <a href={`mailto:${email}`} className="backendNoticeLink">
        {email}
      </a>
      .
    </p>
  );
}
