import { formatPKR } from "../../data/services";

export default function AddOnCard({ addOn }) {
  return (
    <div className="rounded-xl border border-line bg-panel px-6 py-5 flex items-center justify-between gap-4">
      <span className="text-sm md:text-base text-cream/90">{addOn.name}</span>
      <span className="text-amber font-semibold whitespace-nowrap">
        + {formatPKR(addOn.price)}
      </span>
    </div>
  );
}
