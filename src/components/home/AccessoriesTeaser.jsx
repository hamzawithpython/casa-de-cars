import { Link } from "react-router-dom";
import { Layers, Wind, ShieldCheck, Droplet, Award, Shield, Package, ArrowRight } from "lucide-react";
import { accessoryCategories } from "../../data/accessories";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

const ICONS = { Layers, Wind, ShieldCheck, Droplet, Award, Shield, Package };

export default function AccessoriesTeaser() {
  return (
    <section className="bg-panel py-20 md:py-28 border-y border-line">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow mb-4">Accessories & Add-Ons</p>
            <h2 className="text-3xl md:text-5xl leading-tight text-balance">
              Beyond detailing
            </h2>
            <p className="mt-4 text-muted max-w-md">
              Mats, tints, scents, care products, personalization and more:
              everything to finish the look, all in one place.
            </p>
          </div>
          <Button to="/accessories" icon={ArrowRight}>
            Browse accessories
          </Button>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {accessoryCategories.map((category, i) => {
            const Icon = ICONS[category.icon] || Package;
            return (
              <Reveal key={category.slug} delay={i * 0.06}>
                <Link
                  to={`/accessories#${category.slug}`}
                  className="group flex flex-col items-center text-center gap-3 rounded-xl border border-line bg-ink px-4 py-6 hover:border-amber/50 transition-colors duration-300"
                >
                  <span className="w-11 h-11 rounded-full bg-amber/15 text-amber flex items-center justify-center">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.06em] text-cream/90">
                    {category.name}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
