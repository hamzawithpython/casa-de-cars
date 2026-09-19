export const accessoryCategories = [
  {
    slug: "mats",
    icon: "Layers",
    name: "Car Mats",
    tagline: "Protect the floor, upgrade the feel",
    description:
      "From all-weather rubber to tailored 3D liners \u2014 mats cut to fit your exact make and model, not generic universal sizing.",
    items: [
      {
        name: "All-Weather Rubber Mats",
        desc: "Heavy-duty, easy to hose down \u2014 built for dust, mud and monsoon season.",
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
        desc: "Cut to fit your cargo area \u2014 keeps the boot liner scuff and stain free.",
      },
    ],
  },
  {
    slug: "tints",
    icon: "ShieldCheck",
    name: "Window Tints",
    tagline: "Heat, glare and privacy \u2014 sorted",
    description:
      "Ceramic, carbon and dyed film options across a range of shade percentages. Exact legal shade limits confirmed with you before install.",
    items: [
      {
        name: "Ceramic Tint",
        desc: "Best heat rejection without darkening signal or GPS reception \u2014 the premium option.",
        popular: true,
      },
      {
        name: "Carbon Tint",
        desc: "Strong heat and UV rejection at a more accessible price point than ceramic.",
      },
      {
        name: "Dyed Tint",
        desc: "The economical option \u2014 solid glare and privacy, less heat rejection.",
      },
      {
        name: "Shade Options",
        desc: "Multiple percentages available per film type \u2014 we help you pick what's road-legal.",
      },
    ],
  },
  {
    slug: "scents",
    icon: "Wind",
    name: "Scents",
    tagline: "Every format, every scent",
    description:
      "Vent clips, hanging cards, gel cans and diffusers \u2014 in a full range of scents, so the cabin smells as good as it looks.",
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
    slug: "care",
    icon: "Droplet",
    name: "Care & Cleaning",
    tagline: "Keep the shine going at home",
    description:
      "The same category of products we use in the studio \u2014 for upkeep between visits.",
    items: [
      {
        name: "Car Polish",
        desc: "Maintenance-safe polish for keeping shine topped up between full details.",
        popular: true,
      },
      {
        name: "Microfiber Cloths",
        desc: "Lint-free, scratch-safe cloths for wiping, drying and buffing.",
      },
      {
        name: "Car Shampoo",
        desc: "pH-neutral wash shampoo, safe on wax and sealant, for home washes.",
      },
    ],
  },
  {
    slug: "personalization",
    icon: "Award",
    name: "Personalization",
    tagline: "Make it unmistakably yours",
    description:
      "Custom monograms, badges, keychains and key covers \u2014 small details that make a car feel personal.",
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
        name: "Keychains",
        desc: "Branded and custom keychains in a range of styles.",
      },
      {
        name: "Key Covers",
        desc: "Protective, grippy covers for your key fob.",
      },
    ],
  },
  {
    slug: "safety",
    icon: "Shield",
    name: "Seat Belts & Safety",
    tagline: "The essentials, done properly",
    description:
      "Replacement and upgrade seat belt components for comfort and safety.",
    items: [
      {
        name: "Seat Belts",
        desc: "Replacement seat belts fitted to your vehicle.",
        popular: true,
      },
      {
        name: "Seat Belt Clippers",
        desc: "Buckle clips that hold the belt in place and stop the seatbelt chime.",
      },
    ],
  },
  {
    slug: "more",
    icon: "Package",
    name: "Other Accessories",
    tagline: "The rest of the shelf",
    description:
      "Everything else we stock for finishing off the interior and exterior. Ask us \u2014 if it's not listed here, we may still have it.",
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
