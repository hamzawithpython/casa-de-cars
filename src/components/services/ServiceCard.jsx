import { Check, MessageCircle, ArrowRight } from "lucide-react";
import { vehicleSizes } from "../../data/services";
import { formatPKR } from "../../data/services";
import { waLink } from "../../data/business";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

export default function ServiceCard({ service, reverse = false }) {
  const waMsg = `Assalam-o-Alaikum! I would like to book: ${service.name}. Please share available slots.`;

  return (
    <Reveal
      as="article"
      id={service.slug}
      className="scroll-mt-28 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 border-b border-line last:border-none"
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
          {service.mostBooked && (
            <span className="absolute top-4 left-4 z-10 rounded-full bg-amber px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-onAmber">
              Most booked
            </span>
          )}
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <h2 className="text-2xl md:text-3xl leading-tight mb-3">
          {service.name}
        </h2>
        <p className="text-muted leading-relaxed mb-5 max-w-xl">
          {service.description}
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber mb-6">
          {service.duration}
        </p>

        <ul className="space-y-3 mb-8">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-cream/90">
              <Check className="w-4 h-4 text-amber shrink-0 mt-0.5" strokeWidth={2.5} />
              {feature}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-3 gap-4 mb-4">
          {vehicleSizes.map((size) => (
            <div
              key={size.id}
              className="rounded-lg border border-line bg-panel px-4 py-3.5"
            >
              <p className="text-[11px] uppercase tracking-[0.08em] text-muted mb-1">
                {size.label}
              </p>
              <p className="font-display text-lg">
                {formatPKR(service.pricing[size.id])}
              </p>
            </div>
          ))}
        </div>

        {service.note && (
          <p className="text-xs text-muted mb-6">{service.note}</p>
        )}

        <div className="flex flex-wrap gap-4 mt-6">
          <Button to="/quote" icon={ArrowRight}>
            Get a quote
          </Button>
          <Button variant="secondary" href={waLink(waMsg)} icon={MessageCircle}>
            WhatsApp
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
