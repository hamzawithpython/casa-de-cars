import { useMemo, useState } from "react";
import { Check, MessageCircle, RotateCcw } from "lucide-react";
import { services, addOns, vehicleSizes, formatPKR } from "../../data/services";
import { waLink } from "../../data/business";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

const DEFAULT_SIZE = "sedan";
const DEFAULT_SERVICES = ["signature"];

export default function QuoteBuilder() {
  const [size, setSize] = useState(DEFAULT_SIZE);
  const [selectedServices, setSelectedServices] = useState(DEFAULT_SERVICES);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const toggleService = (slug) => {
    setSelectedServices((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const toggleAddOn = (id) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const reset = () => {
    setSize(DEFAULT_SIZE);
    setSelectedServices(DEFAULT_SERVICES);
    setSelectedAddOns([]);
  };

  const lineItems = useMemo(() => {
    const serviceLines = services
      .filter((s) => selectedServices.includes(s.slug))
      .map((s) => ({
        id: s.slug,
        name: s.shortName,
        price: s.pricing[size],
      }));
    const addOnLines = addOns
      .filter((a) => selectedAddOns.includes(a.id))
      .map((a) => ({ id: a.id, name: a.name, price: a.price }));
    return [...serviceLines, ...addOnLines];
  }, [selectedServices, selectedAddOns, size]);

  const total = lineItems.reduce((sum, item) => sum + item.price, 0);
  const sizeLabel = vehicleSizes.find((v) => v.id === size)?.label ?? "";

  const waMessage = useMemo(() => {
    const serviceNames = services
      .filter((s) => selectedServices.includes(s.slug))
      .map((s) => s.shortName)
      .join(", ");
    const addOnNames = addOns
      .filter((a) => selectedAddOns.includes(a.id))
      .map((a) => a.name)
      .join(", ");

    let msg = `Assalam-o-Alaikum Casa De Cars! I would like to book:\nVehicle size: ${sizeLabel}\nServices: ${
      serviceNames || "Not selected yet"
    }`;
    if (addOnNames) msg += `\nAdd-ons: ${addOnNames}`;
    msg += `\nWebsite estimate: ${formatPKR(total)}\nPlease confirm my slot. Thank you!`;
    return msg;
  }, [selectedServices, selectedAddOns, sizeLabel, total]);

  return (
    <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
      <div className="space-y-16">
        {/* Step 01 — Vehicle size */}
        <Reveal>
          <StepLabel number="01" title="Your vehicle size" />
          <div className="grid sm:grid-cols-3 gap-4">
            {vehicleSizes.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSize(v.id)}
                aria-pressed={size === v.id}
                className={`text-left rounded-xl border px-5 py-4 transition-colors duration-200 ${
                  size === v.id
                    ? "border-amber bg-amber/10"
                    : "border-line bg-panel hover:border-cream/30"
                }`}
              >
                <p className="font-display uppercase text-base tracking-wide">
                  {v.label}
                </p>
                <p className="text-xs text-muted mt-1">{v.examples}</p>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Step 02 — Services */}
        <Reveal delay={0.05}>
          <StepLabel number="02" title="Choose your services" />
          <div className="space-y-3">
            {services.map((s) => {
              const active = selectedServices.includes(s.slug);
              return (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => toggleService(s.slug)}
                  aria-pressed={active}
                  className={`w-full text-left rounded-xl border px-5 py-4 flex items-start gap-4 transition-colors duration-200 ${
                    active
                      ? "border-amber bg-amber/10"
                      : "border-line bg-panel hover:border-cream/30"
                  }`}
                >
                  <span
                    className={`mt-0.5 shrink-0 w-5 h-5 rounded-md border flex items-center justify-center ${
                      active
                        ? "bg-amber border-amber text-onAmber"
                        : "border-cream/30 text-transparent"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span className="flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-display uppercase text-base tracking-wide">
                        {s.shortName}
                      </span>
                      {s.mostBooked && (
                        <span className="rounded-full bg-amber/20 text-amber px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em]">
                          Most booked
                        </span>
                      )}
                    </span>
                    <span className="block text-sm text-muted mt-1 leading-relaxed">
                      {s.description}
                    </span>
                  </span>
                  <span className="shrink-0 text-sm font-semibold text-cream/90 whitespace-nowrap">
                    {formatPKR(s.pricing[size])}
                    <span className="text-muted"> / {size}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Step 03 — Add-ons */}
        <Reveal delay={0.1}>
          <StepLabel number="03" title="Add the finishing touches" />
          <div className="grid sm:grid-cols-2 gap-3">
            {addOns.map((a) => {
              const active = selectedAddOns.includes(a.id);
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => toggleAddOn(a.id)}
                  aria-pressed={active}
                  className={`flex items-center justify-between gap-3 rounded-xl border px-5 py-4 transition-colors duration-200 ${
                    active
                      ? "border-amber bg-amber/10"
                      : "border-line bg-panel hover:border-cream/30"
                  }`}
                >
                  <span className="flex items-center gap-3 text-sm">
                    <span
                      className={`shrink-0 w-5 h-5 rounded-md border flex items-center justify-center ${
                        active
                          ? "bg-amber border-amber text-onAmber"
                          : "border-cream/30 text-transparent"
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    {a.name}
                  </span>
                  <span className="text-amber font-semibold whitespace-nowrap">
                    + {formatPKR(a.price)}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Sticky summary */}
      <Reveal delay={0.1} className="lg:sticky lg:top-28">
        <div className="rounded-2xl border border-line bg-panel p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted mb-2">
            Your estimate
          </p>
          <p className="font-display text-4xl md:text-5xl mb-1">
            {formatPKR(total)}
          </p>
          <p className="text-xs text-muted mb-6">
            {sizeLabel} · final quote confirmed after a quick inspection at
            the studio
          </p>

          <ul className="space-y-2 mb-6 border-t border-line pt-5">
            {lineItems.length === 0 && (
              <li className="text-sm text-muted">
                Select at least one service to see pricing.
              </li>
            )}
            {lineItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between text-sm text-cream/90"
              >
                <span>{item.name}</span>
                <span>{formatPKR(item.price)}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <Button
              href={waLink(waMessage)}
              icon={MessageCircle}
              className="w-full"
            >
              Book this on WhatsApp
            </Button>
            <Button to="/contact" variant="secondary" className="w-full">
              Request an appointment
            </Button>
            <button
              type="button"
              onClick={reset}
              className="w-full inline-flex items-center justify-center gap-2 text-xs text-muted hover:text-cream transition-colors pt-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset selections
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function StepLabel({ number, title }) {
  return (
    <div className="mb-6">
      <p className="font-display text-3xl text-amber mb-1">{number}</p>
      <h2 className="text-xl md:text-2xl tracking-wide">{title}</h2>
    </div>
  );
}
