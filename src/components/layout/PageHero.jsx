import Reveal from "../ui/Reveal";

/**
 * Consistent page-top pattern: an amber eyebrow, a large Oswald title,
 * and an optional supporting paragraph. Keeps every interior page visually
 * aligned with the homepage's typographic rhythm.
 */
export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="pt-40 pb-16 md:pt-48 md:pb-20 bg-ink">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="text-4xl md:text-6xl leading-[1.05] text-balance max-w-3xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 text-muted text-base md:text-lg max-w-2xl leading-relaxed">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
