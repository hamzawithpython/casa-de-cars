import { ArrowRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import BeforeAfterSlider from "../components/shared/BeforeAfterSlider";
import GalleryGrid from "../components/gallery/GalleryGrid";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import { beforeAfterItems, recentWork } from "../data/gallery";

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Before / After"
        title="The proof is in the paint"
        description="Every car below was detailed at our DHA 2 studio and shot under our own lights. Drag the sliders to compare."
      />

      <section className="pb-10">
        <div className="container-page">
          <Reveal>
            <p className="text-xs text-muted italic max-w-2xl">
              Note: until paired before-shots are added, the “before” side of
              each slider is simulated from the finished photo for
              illustration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-page grid md:grid-cols-2 gap-8">
          {beforeAfterItems.map((item) => (
            <Reveal key={item.title}>
              <BeforeAfterSlider item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <Reveal>
            <h2 className="text-3xl md:text-4xl leading-tight mb-10 text-balance">
              Recent work
            </h2>
          </Reveal>
          <GalleryGrid items={recentWork} />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-page text-center">
          <Reveal>
            <p className="text-lg text-cream/90 mb-6">
              Your car could be next.
            </p>
            <Button to="/quote" icon={ArrowRight}>
              Get an instant quote
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
