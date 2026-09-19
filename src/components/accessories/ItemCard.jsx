export default function ItemCard({ item }) {
  return (
    <div className="relative rounded-xl border border-line bg-panel p-5">
      {item.popular && (
        <span className="absolute -top-2.5 left-5 rounded-full bg-amber px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-onAmber">
          Popular
        </span>
      )}
      <h4 className="font-display uppercase text-sm tracking-wide mb-1.5 mt-1">
        {item.name}
      </h4>
      <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
    </div>
  );
}
