import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Bot,
  Building2,
  Bus,
  ChartNoAxesCombined,
  Check,
  FlaskConical,
  Fuel,
  Gauge,
  Handshake,
  Landmark,
  Link2,
  Plug,
  Puzzle,
  RefreshCw,
  Satellite,
  Sparkles,
  Sun,
  Target,
  Truck,
  Zap,
} from "lucide-react";

type Tone = "blue" | "gold";

const iconMap: Record<string, LucideIcon> = {
  "⚡": Zap,
  "⛽": Fuel,
  "🚚": Truck,
  "🔋": BatteryCharging,
  "☀️": Sun,
  "📊": ChartNoAxesCombined,
  "📈": ChartNoAxesCombined,
  "🏗️": Building2,
  "🔌": Plug,
  "🧪": FlaskConical,
  "🧩": Puzzle,
  "🔗": Link2,
  "🤝": Handshake,
  "🏦": Landmark,
  "🏛️": Landmark,
  "🎯": Target,
  "🔁": RefreshCw,
  "🚐": Bus,
  "🛰️": Satellite,
  "🤖": Bot,
  "📟": Gauge,
};

export function IconBadge({ icon, tone = "blue" }: { icon: string; tone?: Tone }) {
  const Icon = iconMap[icon] ?? Sparkles;

  return (
    <span className={["icon", tone === "gold" ? "gold" : ""].filter(Boolean).join(" ")} aria-hidden="true">
      <Icon size={21} strokeWidth={1.8} />
    </span>
  );
}

export function MiniList({ items }: { items: readonly string[] }) {
  return (
    <ul className="miniList">
      {items.map((item) => (
        <li key={item}>
          <span className="tick" aria-hidden="true">
            <Check size={13} strokeWidth={2.8} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function InfoCard({
  icon,
  tone,
  title,
  text,
  bullets,
}: {
  icon: string;
  tone?: Tone;
  title: string;
  text: string;
  bullets?: readonly string[];
}) {
  return (
    <article className="card infoCard">
      <IconBadge icon={icon} tone={tone} />
      <h4>{title}</h4>
      <p>{text}</p>
      {bullets ? <MiniList items={bullets} /> : null}
    </article>
  );
}

export function SectionTitle({
  title,
  children,
  action,
}: {
  title: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="sectionTitle">
      <div>
        <span className="sectionKicker">Civitas Energy</span>
        <h2>{title}</h2>
        {children ? <p>{children}</p> : null}
      </div>
      {action ? <div className="sectionAction">{action}</div> : null}
    </div>
  );
}
