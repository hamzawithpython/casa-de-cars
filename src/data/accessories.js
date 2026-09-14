/**
 * Accessories & add-ons — showcase only, no pricing or checkout.
 * Each category maps to an anchor on the /accessories page (#slug).
 * Swap `icon` values for real product photos later by switching
 * CategoryCard/ItemCard to render an <img> the same way services do.
 */

export const accessoryCategories = [
  {
    slug: "mats",
    icon: "Layers",
    name: "Car Mats",
    tagline: "Protect the floor, upgrade the feel",
    description:
      "From all-weather rubber to tailored 3D liners — mats cut to fit your exact make and model, not generic universal sizing.",
    items: [
      {
        name: "All-Weather Rubber Mats",
        desc: "Heavy-duty, easy to hose down — built for dust, mud and monsoon season.",
        popular: true,
      },
      {
        name: "3D Custom-Fit Liners",
        desc: "Raised edges that trace your car's exact footwell shape for full coverage.",
      },
      {
        name: "Carpet Floor Mats",
        desc: "Soft-touch OEM-style carpet finish for a factory-fresh interior look.",
      },
      {
        name: "Trunk / Boot Mats",
        desc: "Cut to fit your cargo area — keeps the boot liner scuff and stain free.",
      },
    ],
  },
  {
    slug: "fresheners",
    icon: "Wind",
    name: "Air Fresheners",
    tagline: "Every format, every scent",
    description:
      "Vent clips, hanging cards, gel cans and diffusers — in a full range of scents, so the cabin smells as good as it looks.",
    items: [
      {
        name: "Vent Clip Fresheners",
        desc: "Clip straight onto the AC vent for scent that circulates with the airflow.",
        popular: true,
      },
      {
        name: "Hanging Card Fresheners",
        desc: "The classic mirror-hang format, in a wide range of scent profiles.",
      },
      {
        name: "Gel Can Fresheners",
        desc: "Long-lasting, discreet placement under the seat or in the console.",
      },
      {
        name: "Diffuser Fresheners",
        desc: "Refillable diffuser sticks for a steady, adjustable scent level.",
      },
    ],
  },
  {
    slug: "tints",
    icon: "ShieldCheck",
    name: "Window Tints",
    tagline: "Heat, glare and privacy — sorted",
    description:
      "Ceramic, carbon and dyed film options across a range of shade percentages. Exact legal shade limits confirmed with you before install.",
    items: [
      {
        name: "Ceramic Tint",
        desc: "Best heat rejection without darkening signal or GPS reception — the premium option.",
        popular: true,
      },
      {
        name: "Carbon Tint",
        desc: "Strong heat and UV rejection at a more accessible price point than ceramic.",
      },
      {
        name: "Dyed Tint",
        desc: "The economical option — solid glare and privacy, less heat rejection.",
      },
      {
        name: "Shade Options",
        desc: "Multiple percentages available per film type — we help you pick what's road-legal.",
      },
    ],
  },
  {
    slug: "badges",
    icon: "Award",
    name: "Monogram & Badges",
    tagline: "Make it unmistakably yours",
    description:
      "Custom monograms, chrome emblems and nameplates — a small detail that makes a car feel personal.",
    items: [
      {
        name: "Custom Monogram Badges",
        desc: "Your initials or a custom design, sized and placed to match your car's lines.",
        popular: true,
      },
      {
        name: "Chrome Emblem Badges",
        desc: "Replacement and upgrade emblems in a polished chrome finish.",
      },
      {
        name: "Custom Nameplates",
        desc: "A name, phrase or date — placed wherever you'd like it.",
      },
      {
        name: "Brand-Style Badges",
        desc: "Aftermarket badge styles for a subtle trim upgrade.",
      },
    ],
  },
  {
    slug: "more",
    icon: "Package",
    name: "Other Accessories",
    tagline: "The rest of the shelf",
    description:
      "Everything else we stock for finishing off the interior and exterior. Ask us — if it's not listed here, we may still have it.",
    items: [
      {
        name: "Steering Wheel Covers",
        desc: "Leather and sport-grip options in multiple colours.",
      },
      {
        name: "Seat Covers",
        desc: "Universal and tailored fits, in fabric and leatherette.",
      },
      {
        name: "Sun Shades",
        desc: "Foldable windshield and side-window shades.",
      },
      {
        name: "Interior LED Lighting",
        desc: "Ambient footwell and cabin lighting kits.",
      },
      {
        name: "Phone Mounts",
        desc: "Vent and dashboard mount options.",
      },
      {
        name: "Number Plate Frames",
        desc: "Standard and custom-finish plate surrounds.",
      },
    ],
  },
];

export function getCategory(slug) {
  return accessoryCategories.find((c) => c.slug === slug);
}