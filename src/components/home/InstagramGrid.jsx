import InstagramIcon from "../ui/InstagramIcon";
import { instagramFeed } from "../../data/homeContent";
import { business } from "../../data/business";
import Reveal from "../ui/Reveal";

export default function InstagramGrid() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow mb-4">Fresh from the studio</p>
            <h2 className="text-3xl md:text-5xl leading-tight">
              @casa_de_cars_
            </h2>
          </div>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber text-sm font-semibold uppercase tracking-[0.1em] hover:text-amber-light transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            Follow us
          </a>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramFeed.map((post, i) => (
            <Reveal key={post.alt} delay={i * 0.05}>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-smooth"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
