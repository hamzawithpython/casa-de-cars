import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

/**
 * Drag (mouse, touch, or keyboard arrows) to reveal the "before" state.
 * Both `before` and `after` currently point at the same photo as a
 * placeholder — swap `item.before` for a real pre-detail shot per car
 * once you have paired photography.
 */
export default function BeforeAfterSlider({ item }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    updateFromClientX(e.clientX ?? e.touches?.[0]?.clientX);
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX ?? e.touches?.[0]?.clientX);
  };
  const stopDragging = () => {
    dragging.current = false;
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[16/11] overflow-hidden rounded-xl select-none touch-none cursor-ew-resize bg-panel"
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={stopDragging}
    >
      {/* After (full, base layer) */}
      <img
        src={item.image}
        alt={`${item.eyebrow} after detailing`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before (clipped via clip-path, desaturated to imply the "before" state) */}
      <img
        src={item.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-75 brightness-75"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      <span className="absolute top-4 left-4 rounded-full bg-ink/70 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cream/90">
        Before
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-amber/90 backdrop-blur px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-onAmber">
        After
      </span>

      {/* Divider handle */}
      <div
        className="absolute inset-y-0 w-[2px] bg-cream/80"
        style={{ left: `${position}%` }}
      >
        <div
          role="slider"
          tabIndex={0}
          aria-label="Drag to compare before and after"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cream text-ink flex items-center justify-center shadow-lg cursor-ew-resize"
        >
          <MoveHorizontal className="w-5 h-5" strokeWidth={2} />
        </div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/90 to-transparent px-5 pt-10 pb-5 pointer-events-none">
        <p className="eyebrow !text-amber/90">{item.eyebrow}</p>
        <p className="font-display uppercase text-lg md:text-xl tracking-wide">
          {item.title}
        </p>
        <p className="text-sm text-cream/70">{item.caption}</p>
      </div>
    </div>
  );
}
