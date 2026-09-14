import Reveal from "../ui/Reveal";

export default function ReviewCard({ review, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="rounded-xl overflow-hidden bg-panel border border-line h-full flex flex-col">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={review.image}
            alt={review.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <p className="font-display uppercase text-base tracking-wide">
            {review.name}
          </p>
          <p className="text-xs text-amber uppercase tracking-[0.08em] mt-1 mb-3">
            {review.role}
          </p>
          <p className="text-sm text-muted leading-relaxed">{review.blurb}</p>
        </div>
      </article>
    </Reveal>
  );
}
