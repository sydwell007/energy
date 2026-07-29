import type { Metadata } from "next";
import PageHero from "@/components/marketing/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { faqCategories, faqs } from "@/data/faqData";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers for site hosts, fleet operators, fuel retail partners, and investors.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Answers by audience"
        title="Frequently Asked Questions"
        intro="Answers for site hosts, fleet operators, fuel retail partners, and investors."
        actions={<ButtonLink href="/contact" variant="gold">Still have a question?</ButtonLink>}
      />

      <section>
        <div className="container">
          {faqCategories.map((category) => (
            <div key={category} className="sectionDivider">
              <h2 style={{ fontSize: 20, marginBottom: 10 }}>{category}</h2>
              <div className="faqGrid">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq) => (
                    <details key={faq.question}>
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
