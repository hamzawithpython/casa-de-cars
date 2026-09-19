import { Sparkles, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import {
  storyParagraphs,
  storyImages,
  values,
  studioSpace,
} from "../data/about";

const ICONS = {
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
  "heart-handshake": HeartHandshake,
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title="Clean. Shine. Protect. Est. 2026"
      />

      <section className="pb-24 md:pb-32">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow mb-4">Our story</p>
            <h2 className="text-2xl md:text-3xl leading-snug mb-6 text-balance">
              "From sleepless nights to building my own dream."
            </h2>
            <div className="space-y-4">
              {storyParagraphs.map((p) => (
                <p key={p} className="text-muted leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            {storyImages.map((img) => (
              <div
                key={img.src}
                className="rounded-xl overflow-hidden aspect-[3/4]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-panel border-y border-line">
        <div className="container-page">
          <Reveal className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl leading-tight text-balance">
              What we stand for
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = ICONS[value.icon];
              return (
                <Reveal key={value.title} delay={i * 0.08}>
                  <Icon className="w-8 h-8 text-amber mb-5" strokeWidth={1.5} />
                  <h3 className="text-lg tracking-wide mb-2">{value.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {value.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <Reveal className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src={studioSpace.image}
              alt={studioSpace.alt}
              className="w-full h-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">The space</p>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5 text-balance">
              {studioSpace.title}
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-lg">
              {studioSpace.description}
            </p>
            <Button to="/gallery" variant="ghost" icon={ArrowRight} className="!px-0">
              See the results
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-page text-center max-w-xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl leading-tight mb-5 text-balance">
              Come see the studio yourself
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              DHA Phase 2, Islamabad — open 7 days a week. Book a slot and
              watch your car transform.
            </p>
            <Button to="/contact" icon={ArrowRight}>
              Book a visit
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
