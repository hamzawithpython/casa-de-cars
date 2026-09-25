import { ArrowRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import ServiceCard from "../components/services/ServiceCard";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import { services, vehicleSizes } from "../data/services";
import { waLink } from "../data/business";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services & Pricing"
        title="Clear prices. No DM needed."
        description="Every service, what it includes, how long it takes and exactly what it costs -- by vehicle size. Final quotes are confirmed after a quick inspection at the studio."
      />

      <section className="pb-6">
        <div className="container-page">
          <Reveal className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-muted uppercase tracking-[0.08em] border-t border-b border-line py-5">
            {vehicleSizes.map((v) => (
              <span key={v.id}>
                <span className="text-cream/90 font-semibold">{v.label}</span>{" "}
                {"\u00b7"} {v.examples}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-4 md:py-10">
        <div className="container-page">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page text-center max-w-xl mx-auto">
          <Reveal>
            <p className="eyebrow mb-4">Auto Trade</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5 text-balance">
              Buying or selling a car?
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Alongside the studio, Casa De Cars also deals in cars. Message
              us with what you are looking for {"\u2014"} or what you are selling {"\u2014"}
              and we will get back to you.
            </p>
            <Button
              href={waLink(
                "Assalam-o-Alaikum! I have a question about Auto Trade."
              )}
              icon={ArrowRight}
            >
              Ask about Auto Trade
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
