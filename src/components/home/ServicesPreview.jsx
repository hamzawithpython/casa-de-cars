import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services, formatPKR } from "../../data/services";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

const preview = services.filter((s) => s.mostBooked);

export default function ServicesPreview() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-4">Services &amp; Pricing</p>
            <h2 className="text-3xl md:text-5xl leading-tight text-balance">
              No DMs needed for prices
            </h2>
          </div>
          <Button to="/services" variant="ghost" icon={ArrowRight} className="!px-0">
            All services
          </Button>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {preview.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <Link
                to={`/services#${service.slug}`}
                className="group block h-full rounded-xl overflow-hidden bg-panel border border-line hover:border-amber/50 transition-colors duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <span className="absolute top-4 left-4 z-10 rounded-full bg-amber px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-onAmber">
                    Most booked
                  </span>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg tracking-wide mb-2">
                    {service.shortName}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <p className="mt-4 text-sm text-cream/90">
                    <span className="text-amber font-semibold">
                      from {formatPKR(service.pricing.hatchback)}
                    </span>{" "}
                    · {service.duration}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button to="/quote" icon={ArrowRight}>
            Build your quote in 30 seconds
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
