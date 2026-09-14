import { Sparkle } from "lucide-react";
import { brandMarquee } from "../../data/homeContent";

export default function BrandMarquee() {
  const loop = [...brandMarquee, ...brandMarquee];
  return (
    <div className="bg-panel border-y border-line overflow-hidden py-5">
      <div className="flex w-max animate-marquee">
        {loop.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="flex items-center gap-8 px-8 font-display uppercase text-sm md:text-base tracking-[0.15em] text-cream/70 whitespace-nowrap"
          >
            {brand}
            <Sparkle className="w-3.5 h-3.5 text-amber" />
          </span>
        ))}
      </div>
    </div>
  );
}
