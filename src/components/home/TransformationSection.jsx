import { ArrowRight, ExternalLink } from "lucide-react";
import { heroTransformation, homeTestimonial } from "../../data/homeContent";
import { business } from "../../data/business";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import BeforeAfterSlider from "../shared/BeforeAfterSlider";

export default function TransformationSection() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <p className="eyebrow mb-4">Transformations</p>
          <h2 className="text-3xl md:text-5xl leading-tight text-balance">
            From dull to glossy
          </h2>
          <p className="mt-6 text-muted leading-relaxed max-w-md">
            Drag the handle to see what a complete compound & polish does
            to tired paint. Every photo is a real Casa De Cars car, shot in
            our own studio.
          </p>
          <div className="mt-8">
            <Button to="/gallery" variant="ghost" icon={ArrowRight} className="!px-0">
              See the full gallery
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <BeforeAfterSlider item={heroTransformation} />

          <div className="bg-panel border border-line rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-amber/15 text-amber flex items-center justify-center text-xs font-bold shrink-0">
                G
              </span>
              <div>
                <p className="text-sm font-semibold text-cream">{homeTestimonial.author}</p>
                <p className="text-xs text-muted">{homeTestimonial.source}</p>
              </div>
            </div>
            <p className="text-sm text-cream/90 leading-relaxed italic mb-4">
              "{homeTestimonial.quote}"
            </p>
            <Button
              href={business.mapsUrl}
              variant="ghost"
              size="sm"
              icon={ExternalLink}
              className="!px-0"
            >
              Read on Google
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
