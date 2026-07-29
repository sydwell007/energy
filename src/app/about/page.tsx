import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";
import { InfoCard, SectionTitle } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { StatTile } from "@/components/ui/StatTile";
import { aboutValues, ecosystemLinks, impactStats, missionStatement, timeline } from "@/data/aboutData";

export const metadata: Metadata = {
  title: "About Civitas Energy",
  description: "Civitas Energy's mission, operating values, and role inside the wider Civitas Holdings group.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Civitas Energy"
        title="Building the energy layer for Africa's electric future"
        intro={missionStatement}
        actions={
          <>
            <ButtonLink href="/deploy" variant="gold">
              Deploy at My Site
            </ButtonLink>
            <ButtonLink href="/investors">Investor Relations</ButtonLink>
          </>
        }
        stats={
          <div className="statGrid">
            {impactStats.map((stat) => (
              <StatTile key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} tone="gold" />
            ))}
          </div>
        }
      />

      <section>
        <div className="container">
          <SectionTitle title="How we operate">Four principles behind every deployment.</SectionTitle>
          <div className="grid4">
            {aboutValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 60}>
                <InfoCard {...value} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="Rollout timeline">From founding pilots to a national energy network.</SectionTitle>
          <div className="timeline">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 60}>
                <article className="timelineItem">
                  <span className="timelineYear">{item.year}</span>
                  <div>
                    <h3 style={{ margin: "0 0 8px", fontSize: 17 }}>{item.title}</h3>
                    <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionTitle title="Part of the Civitas Holdings group">
            Civitas Energy is designed to become the energy layer powering the wider group.
          </SectionTitle>
          <div className="grid3">
            {ecosystemLinks.map((link, index) => (
              <Reveal key={link.title} delay={index * 60}>
                <InfoCard {...link} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
