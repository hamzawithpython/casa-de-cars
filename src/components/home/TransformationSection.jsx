import { ArrowRight } from "lucide-react";
import { heroTransformation, homeTestimonial } from "../../data/homeContent";
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
            Drag the handle to see what a complete compound &amp; polish does
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

          <blockquote className="flex items-center gap-4 bg-panel border border-line rounded-xl p-4">
            <img
              src={homeTestimonial.image}
              alt=""
              className="w-14 h-14 rounded-lg object-cover shrink-0"
            />
            <div>
              <p className="text-cream/90 text-sm md:text-base italic">
                “{homeTestimonial.quote}”
              </p>
              <p className="text-xs text-muted mt-1">
                {homeTestimonial.author}
              </p>
            </div>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
