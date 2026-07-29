import { ArrowRight, BatteryCharging, Fuel, Truck, Zap } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { primaryCtas } from "@/data/siteConfig";

const quickOfferings = [
  { icon: Zap, title: "Public Fast Charging", text: "150–300 kW hubs for malls, petrol stations, airports and corridors." },
  { icon: Truck, title: "Fleet Depots", text: "Smart overnight charging and load management for shuttle and delivery fleets." },
  { icon: BatteryCharging, title: "Storage + Hybrid", text: "BESS buffers peak demand, reduces outages, and improves site ROI." },
  { icon: Fuel, title: "Energy Platform", text: "Monitoring, pricing, uptime, and reporting across every deployed site." },
];

export default function HomeHero() {
  return (
    <header className="homeHero">
      <div className="container">
        <div className="homeHeroFrame">
          <div className="homeHeroGrid" aria-hidden="true" />

          <div className="badge" style={{ position: "relative", zIndex: 2 }}>
            <span className="badgeDot" aria-hidden="true" />
            Infrastructure-grade EV charging + storage network for Africa
          </div>

          <div className="homeHeroBody">
            <div>
              <h1>Powering the electric future of Africa.</h1>
              <p>
                Civitas Energy designs, manufactures, deploys, and operates <b>fast-charging hubs</b>,{" "}
                <b>petrol station upgrades</b>, <b>fleet depot charging</b>, <b>battery energy storage (BESS)</b>,
                and <b>energy management software</b>. We make charging reliable even where the grid is
                constrained — by blending grid, solar, and storage.
              </p>

              <div className="heroActions" role="group" aria-label="Get started">
                <ButtonLink href={primaryCtas.deploy.href} variant="primary">
                  Deploy Charging at Your Site
                </ButtonLink>
                <ButtonLink href={primaryCtas.invest.href} variant="gold">
                  Investor Information
                </ButtonLink>
                <ButtonLink href={primaryCtas.partner.href}>Partner With Us</ButtonLink>
                <ButtonLink href="/offerings" variant="ghost" className="heroTextLink">
                  Explore Offerings
                  <ArrowRight size={16} aria-hidden="true" />
                </ButtonLink>
              </div>

              <div className="homeHeroProof" aria-label="Rollout stage">
                <span className="badge">
                  <span className="badgeDot" aria-hidden="true" />
                  <b>Now:</b>&nbsp;Pilot hubs + fleet depots
                </span>
                <span className="badge">
                  <span className="badgeDot" style={{ background: "var(--blue)" }} aria-hidden="true" />
                  <b>Network:</b>&nbsp;Multi-site operations
                </span>
                <span className="badge">
                  <span className="badgeDot" style={{ background: "var(--gold)" }} aria-hidden="true" />
                  <b>Next:</b>&nbsp;Corridors + smart city dashboards
                </span>
              </div>

              <div className="glowline" />

              <div className="pillRow" style={{ marginTop: 16 }}>
                <span className="pill">DC Fast Charging Hubs</span>
                <span className="pill">Fleet Depot Charging</span>
                <span className="pill">BESS + Solar Hybrid</span>
              </div>
            </div>

            <aside className="heroPanel" aria-label="What we build">
              <h3>What we build</h3>
              <div className="grid2">
                {quickOfferings.map((item) => (
                  <div className="card" key={item.title} style={{ minHeight: "auto", padding: 18 }}>
                    <span className="icon" aria-hidden="true">
                      <item.icon size={19} strokeWidth={1.8} />
                    </span>
                    <h3 style={{ fontSize: 14, margin: "14px 0 6px" }}>{item.title}</h3>
                    <p style={{ fontSize: 12.5 }}>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="glowline" />
              <div className="buttonRow" style={{ marginTop: 16 }}>
                <ButtonLink href={primaryCtas.deploy.href} variant="primary" className="small">
                  Deploy at My Site
                </ButtonLink>
                <ButtonLink href={primaryCtas.invest.href} className="small">
                  Get Investor Pack
                </ButtonLink>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </header>
  );
}
