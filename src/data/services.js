import { images } from "./images";

/**
 * Vehicle size classes used across pricing & the quote builder.
 * `examples` are shown as helper text under each size option.
 */
export const vehicleSizes = [
  {
    id: "hatchback",
    label: "Hatchback",
    examples: "Alto · Vitz · Wagon R · Mira",
  },
  {
    id: "sedan",
    label: "Sedan",
    examples: "Corolla · Civic · City · Sonata",
  },
  {
    id: "suv",
    label: "SUV / Crossover",
    examples: "Sportage · C-HR · Mini Cooper",
  },
];

/**
 * Every service offered, with per-vehicle-size pricing (in PKR).
 * `slug` doubles as the in-page anchor on /services (e.g. #signature).
 */
export const services = [
  {
    slug: "signature",
    name: "Signature Complete Detailing",
    shortName: "Complete Detailing",
    mostBooked: true,
    duration: "Full day (6–8 hours)",
    description:
      "Our flagship transformation. Interior, exterior, engine bay and trunk — every surface deep-cleaned, polished and protected with premium German products. From dull to showroom shine.",
    image: images.audiA3,
    features: [
      "Full exterior hand wash & decontamination",
      "Machine compound & polish for a flawless finish",
      "Complete interior detailing — seats, carpets, roof lining & dashboard",
      "Engine bay & trunk detailing",
      "Premium German wax protection",
      "Glass, wheels, tyres & trim dressing",
    ],
    pricing: { hatchback: 14999, sedan: 17999, suv: 21999 },
  },
  {
    slug: "compound",
    name: "Compound & Polish",
    shortName: "Compound & Polish",
    mostBooked: true,
    duration: "3–4 hours",
    description:
      "Swirl marks, light scratches and oxidation removed by machine. Restoring the shine, enhancing the finish, and bringing the paint back to life.",
    image: images.whiteCarGlossyHood,
    features: [
      "Paint inspection under studio lighting",
      "Machine compounding to cut defects",
      "Refining polish for deep gloss",
      "Protective wax top coat",
    ],
    pricing: { hatchback: 7999, sedan: 9999, suv: 12999 },
  },
  {
    slug: "interior",
    name: "Interior Deep Clean",
    shortName: "Interior Deep Clean",
    mostBooked: true,
    duration: "2–3 hours",
    description:
      "A cabin reset. Seats, carpets, headliner, vents and every crevice cleaned and conditioned so the inside feels factory-fresh.",
    image: images.kiaSportageInterior,
    features: [
      "Vacuum & steam of seats, carpets and mats",
      "Leather or fabric deep clean & conditioning",
      "Dashboard, console & vent detailing",
      "Interior glass & odor neutralising",
    ],
    pricing: { hatchback: 6999, sedan: 7999, suv: 9999 },
  },
  {
    slug: "engine",
    name: "Engine Bay Wash",
    shortName: "Engine Bay Wash",
    mostBooked: false,
    duration: "45–60 minutes",
    description:
      "From dusty to fresh. A quick yet professional engine bay wash — a clean engine bay not only looks better, it makes maintenance easier.",
    image: images.nissanNoteEngine,
    features: [
      "Safe covering of sensitive components",
      "Degrease & gentle pressure rinse",
      "Dressing of plastics and rubbers",
    ],
    pricing: { hatchback: 2499, sedan: 2999, suv: 3499 },
  },
  {
    slug: "spa",
    name: "Auto Spa Wash",
    shortName: "Auto Spa Wash",
    mostBooked: false,
    duration: "60–90 minutes",
    description:
      "The premium maintenance wash between details. Gentle two-bucket hand wash with pH-neutral German shampoo for a spotless, streak-free finish.",
    image: images.whiteHyundaiSedan,
    features: [
      "Foam pre-soak & two-bucket hand wash",
      "Wheels, arches & tyres cleaned and dressed",
      "Streak-free glass, inside and out",
      "Quick interior wipe-down & vacuum",
    ],
    pricing: { hatchback: 1499, sedan: 1999, suv: 2499 },
  },
  {
    slug: "overspray",
    name: "Overspray & Spot Removal",
    shortName: "Overspray Removal",
    mostBooked: false,
    duration: "2–4 hours",
    description:
      "Those tiny spray spots might look harmless, but they ruin the finish. We safely remove every paint overspray mark and restore a smooth, clean surface.",
    image: images.kiaSportageStudio,
    features: [
      "Full paint contamination inspection",
      "Clay treatment & safe overspray removal",
      "Panel polish to restore smoothness",
      "Protective sealant on treated panels",
    ],
    pricing: { hatchback: 4999, sedan: 5999, suv: 7999 },
  },
  {
    slug: "ppf",
    name: "Paint Protection Film",
    shortName: "PPF",
    mostBooked: false,
    duration: "1–3 days",
    description:
      "Invisible armour for your paint. Self-healing PPF applied by trained hands — from high-impact front-end coverage to full-body wraps.",
    image: images.kiaSportageShowroom,
    features: [
      "Front-end package: bumper, bonnet, fenders & mirrors",
      "Full-body coverage on request",
      "Self-healing, stain-resistant film",
      "Surface preparation & panel wipe included",
    ],
    pricing: { hatchback: 24999, sedan: 29999, suv: 39999 },
    note: "Front-end package · full body quoted on inspection",
  },
];

export const addOns = [
  { id: "headlight", name: "Headlight Restoration", price: 3499 },
  { id: "ceramic", name: "Ceramic Wax Sealant", price: 4999 },
  { id: "leather", name: "Leather Conditioning", price: 2999 },
  { id: "odour", name: "Odour Removal & AC Sanitise", price: 1999 },
];

export function formatPKR(amount) {
  return `Rs ${amount.toLocaleString("en-PK")}`;
}

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
