import CountUp from "@/components/motion/CountUp";

export function StatTile({
  value,
  suffix,
  label,
  tone,
}: {
  value: number;
  suffix?: string;
  label: string;
  tone?: "gold";
}) {
  return (
    <div className={["statTile", tone === "gold" ? "gold" : ""].filter(Boolean).join(" ")}>
      <span className="statValue">
        <CountUp value={value} suffix={suffix} />
      </span>
      <span className="statLabel">{label}</span>
    </div>
  );
}
