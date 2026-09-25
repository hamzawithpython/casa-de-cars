import { Layers, Wind, ShieldCheck, Droplet, Award, Shield, Package, ArrowRight } from "lucide-react";

const ICONS = { Layers, Wind, ShieldCheck, Droplet, Award, Shield, Package };

export default function CategoryCard({ category }) {
  const Icon = ICONS[category.icon] || Package;

  return (
    <a
    href={`#${category.slug}`}
      className="group block h-full rounded-xl border border-line bg-panel p-6 hover:border-amber/50 transition-colors duration-300"
    >
      <span className="w-12 h-12 rounded-full bg-amber/15 text-amber flex items-center justify-center mb-5">
        <Icon className="w-5 h-5" strokeWidth={1.75} />
      </span>
      <h3 className="font-display uppercase text-lg tracking-wide mb-1.5">
        {category.name}
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-4">
        {category.tagline}
      </p>
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-amber group-hover:text-amber-light transition-colors">
        View items
        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.25} />
      </span>
    </a>
  );
}
