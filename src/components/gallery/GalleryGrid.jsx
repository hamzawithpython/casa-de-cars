import Reveal from "../ui/Reveal";

export default function GalleryGrid({ items }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <Reveal key={`${item.title}-${i}`} delay={(i % 4) * 0.06}>
          <figure className="group rounded-xl overflow-hidden bg-panel border border-line">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={`${item.title} — ${item.caption}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-smooth"
              />
            </div>
            <figcaption className="p-4">
              <p className="font-display uppercase text-sm tracking-wide">
                {item.title}
              </p>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                {item.caption}
              </p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
