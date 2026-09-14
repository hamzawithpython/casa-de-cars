import { Gem, ShieldCheck, Timer, ArrowRight } from "lucide-react";
import { images } from "../../data/images";
import { studioBullets } from "../../data/homeContent";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

const ICONS = { gem: Gem, shield: ShieldCheck, timer: Timer };

export default function StudioSection() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src={images.kiaSportageShowroom}
              alt="Kia Sportage gleaming inside the Casa De Cars studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-8 -right-6 w-2/5 aspect-[4/3] rounded-xl overflow-hidden border-4 border-ink shadow-2xl">
            <img
              src={images.audiA3}
              alt="Audi A3 detailed at Casa De Cars"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-4">The Studio</p>
          <h2 className="text-3xl md:text-5xl leading-tight text-balance">
            Every car deserves premium care
          </h2>
          <p className="mt-6 text-muted leading-relaxed max-w-lg">
            Casa De Cars is an owner-run detailing studio in DHA Phase 2,
            Islamabad. We built it on a simple promise: honest work, premium
            German products, and a finish you can see your reflection in.
          </p>

          <ul className="mt-8 space-y-4">
            {studioBullets.map((bullet) => {
              const Icon = ICONS[bullet.icon];
              return (
                <li key={bullet.title} className="flex items-start gap-3.5">
                  <span className="w-9 h-9 shrink-0 rounded-full bg-amber/15 text-amber flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5" strokeWidth={2} />
                  </span>
                  <span className="text-sm md:text-base text-cream/90 pt-1.5">
                    {bullet.title}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-9">
            <Button to="/about" variant="ghost" icon={ArrowRight} className="!px-0">
              Our story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
