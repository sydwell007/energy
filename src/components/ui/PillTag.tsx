export function PillTag({ children, active }: { children: string; active?: boolean }) {
  return <span className={["pill", active ? "pillActive" : ""].filter(Boolean).join(" ")}>{children}</span>;
}
