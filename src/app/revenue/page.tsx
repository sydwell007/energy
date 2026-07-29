import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { InfoCard, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { StatTile } from "@/components/ui/StatTile";
import { revenueStreams, unitEconomics } from "@/data/revenueData";

export const metadata: Metadata = {
  title: "Revenue Model",
  description: "How Civitas Energy makes revenue: charging energy margin, fleet contracts, and EPC + maintenance revenue.",
};

export default function RevenuePage() {
  return (
    <>
      <PageHero
        eyebrow="Revenue model"
        title="How Civitas Energy makes revenue"
        intro="Multiple stacked revenue streams: charging energy margin, site revenue share, fleet subscriptions, maintenance contracts, and EPC/project margins."
        actions={
          <>
            <ButtonLink href="/investors" variant="gold">
              Investor Relations
            </ButtonLink>
            <ButtonLink href="/rollout">See the rollout plan</ButtonLink>
          </>
        }
        stats={
          <div className="statGrid">
            {unitEconomics.map((stat) => (
              <StatTile key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} tone="gold" />
            ))}
          </div>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="Three stacked revenue streams">
            Recurring, diversified, and compounding as the network grows.
          </SectionTitle>
          <div className="grid3">
            {revenueStreams.map((stream, index) => (
              <Reveal key={stream.title} delay={index * 70}>
                <InfoCard {...stream} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="callout">
            <b>Investor-friendly model:</b> Civitas Energy is designed like an infrastructure operator — revenue is
            recurring, sites are scalable, uptime is measurable, and unit economics improve as network density
            increases.
          </div>
        </div>
      </section>
    </>
  );
}
