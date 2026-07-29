import PageHero from "@/components/marketing/PageHero";
import Reveal from "@/components/motion/Reveal";

export type LegalSection = { title: string; body: string[] };

export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section>
        <div className="container">
          <p className="note legalUpdated">Last reviewed: {updated}</p>
          <div className="legalGrid">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 40}>
                <article className="card">
                  <h3>{section.title}</h3>
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
