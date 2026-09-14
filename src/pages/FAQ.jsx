import { MessageCircle, ArrowRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import FAQAccordion from "../components/faq/FAQAccordion";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import { faqItems } from "../data/faq";
import { waLink } from "../data/business";

export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        description="Everything people usually DM us about — prices, booking, timing and products — in one place."
      />

      <section className="pb-20 md:pb-28">
        <div className="container-page max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-page text-center max-w-xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl leading-tight mb-3 text-balance">
              Still have a question?
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Message us on WhatsApp — we reply personally, usually within
              the hour during working time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href={waLink(
                  "Assalam-o-Alaikum Casa De Cars! I have a question."
                )}
                icon={MessageCircle}
              >
                Ask on WhatsApp
              </Button>
              <Button to="/quote" variant="secondary" icon={ArrowRight}>
                Get an instant quote
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
