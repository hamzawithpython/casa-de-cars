import { MessageCircle } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import CategoryCard from "../components/accessories/CategoryCard";
import ItemCard from "../components/accessories/ItemCard";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import { accessoryCategories } from "../data/accessories";
import { waLink } from "../data/business";

export default function Accessories() {
  return (
    <>
      <PageHero
        eyebrow="Accessories & Add-Ons"
        title="Finish the look, inside and out"
        description="Everything we stock to round off a detail — mats, scent, tint, badges and more. This is a showcase of what's available in-store; message us on WhatsApp to check stock and pricing for your car."
      />

      {/* Category overview / quick-jump grid */}
      <section className="pb-16 md:pb-20">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {accessoryCategories.map((category, i) => (
              <Reveal key={category.slug} delay={i * 0.06}>
                <CategoryCard category={category} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* One full section per category */}
      {accessoryCategories.map((category, i) => (
        <section
          key={category.slug}
          id={category.slug}
          className={`scroll-mt-28 py-14 md:py-16 ${
            i % 2 === 1 ? "bg-panel border-y border-line" : ""
          }`}
        >
          <div className="container-page">
            <Reveal className="max-w-2xl mb-10">
              <p className="eyebrow mb-3">{category.name}</p>
              <h2 className="text-2xl md:text-3xl leading-tight mb-4 text-balance">
                {category.tagline}
              </h2>
              <p className="text-muted leading-relaxed">
                {category.description}
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {category.items.map((item, j) => (
                <Reveal key={item.name} delay={j * 0.05}>
                  <ItemCard item={item} />
                </Reveal>
              ))}
            </div>

            <Button
              variant="secondary"
              size="sm"
              icon={MessageCircle}
              href={waLink(
                `Assalam-o-Alaikum! I'm interested in your ${category.name} — could you share what's in stock and pricing?`
              )}
            >
              Ask about {category.name}
            </Button>
          </div>
        </section>
      ))}

      {/* Closing CTA */}
      <section className="py-20 md:py-28">
        <div className="container-page text-center max-w-xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl leading-tight mb-4 text-balance">
              Don't see what you're after?
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              We're regularly adding new stock. Message us what you're
              looking for and we'll tell you if we have it or can get it.
            </p>
            <Button
              href={waLink(
                "Assalam-o-Alaikum! I'm looking for a car accessory that's not listed on your site."
              )}
              icon={MessageCircle}
            >
              Ask on WhatsApp
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}