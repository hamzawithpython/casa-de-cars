import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { images } from "../../data/images";
import { business, waLink } from "../../data/business";
import { heroStats } from "../../data/homeContent";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      <img
        src={images.audiA3}
        alt="Audi A3 freshly detailed under the Casa De Cars studio lights"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-ink/30" />

      <div className="relative container-page pb-20 pt-40">
        <Reveal>
          <p className="flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-cream/70 mb-6">
            <span className="w-8 h-px bg-amber" />
            {business.category} — {business.location}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl leading-[0.95] max-w-4xl text-balance">
            Where Shine
            <br />
            Meets Perfection
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-base md:text-lg text-cream/85 leading-relaxed">
            Premium car detailing with German products — from dull to
            showroom shine. Transparent prices, real results, and a slot
            waiting for your car.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-9 flex flex-wrap gap-4">
          <Button to="/quote" icon={ArrowRight}>
            Get an instant quote
          </Button>
          <Button variant="secondary" href={waLink()} icon={MessageCircle}>
            WhatsApp {business.phoneDisplay}
          </Button>
        </Reveal>

        <Reveal
          delay={0.32}
          className="mt-14 pt-8 border-t border-cream/15 grid grid-cols-3 gap-6 max-w-xl"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display uppercase text-2xl md:text-3xl">
                {stat.value}
              </p>
              <p className="text-[11px] md:text-xs uppercase tracking-[0.1em] text-muted mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="relative flex justify-center pb-6 text-cream/50 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
