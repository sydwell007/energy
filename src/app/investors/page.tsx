import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { InfoCard, MiniList, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { StatTile } from "@/components/ui/StatTile";
import InvestorPackForm from "@/components/forms/InvestorPackForm";
import { marketStats, platformPillars, investRoadmap, revenueModel, tractionStats } from "@/data/investData";

export const metadata: Metadata = {
  title: "Investor Relations",
  description: "Market opportunity, traction, revenue model, and rollout roadmap for Civitas Energy.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor relations"
        title="Fund the network. Track the uptime."
        intro="Civitas Energy is building the energy layer for Africa's electric future — a repeatable, reportable deployment model backed by a full charging-to-operations ecosystem."
        actions={
          <>
            <ButtonLink href="#request-pack" variant="gold">
              Request Investor Pack
            </ButtonLink>
            <ButtonLink href="/partners">Partner With Us</ButtonLink>
          </>
        }
        stats={
          <div className="statGrid">
            {marketStats.map((stat) => (
              <StatTile key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} tone="gold" />
            ))}
          </div>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="Why the model works">Four pillars behind a defensible, scalable network.</SectionTitle>
          <div className="grid4">
            {platformPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 60}>
                <InfoCard {...pillar} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="Traction so far">Where the deployment pipeline stands today.</SectionTitle>
          <div className="grid4">
            {tractionStats.map((stat) => (
              <div className="statTileLight" key={stat.label}>
                <span className="statValue" style={{ color: "var(--mint)" }}>
                  {stat.value.toLocaleString("en-ZA")}
                  {stat.suffix}
                </span>
                <span className="statLabel" style={{ color: "var(--muted)" }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="Revenue & funding model">Three complementary revenue streams.</SectionTitle>
          <div className="grid3">
            {revenueModel.map((item, index) => (
              <Reveal key={item.tag} delay={index * 70}>
                <article className="card tier">
                  <div className="tierInner">
                    <span className="priceTag">{item.tag}</span>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <MiniList items={item.bullets} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="Roadmap">Four phases from founding pilots to a national network.</SectionTitle>
          <div className="grid4">
            {investRoadmap.map((item, index) => (
              <Reveal key={item.number} delay={index * 60}>
                <article className="card">
                  <span className="pillGold">{item.number}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="request-pack">
        <div className="container">
          <div className="splitGrid">
            <div className="card">
              <h3>Request the investor pack</h3>
              <InvestorPackForm />
            </div>
            <aside className="sideCard">
              <h3>What&apos;s in the pack</h3>
              <MiniList
                items={[
                  "Full market opportunity & rollout plan",
                  "Site economics & unit cost breakdown",
                  "Revenue model & funding structure",
                  "Governance, reporting, and KPI framework",
                ]}
              />
              <div className="callout topSpace">
                Prefer to talk it through first? Email <a href="mailto:invest@civitasenergy.co.za">invest@civitasenergy.co.za</a>.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
