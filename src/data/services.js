import { images } from "./images";

export const vehicleSizes = [
  {
    id: "hatchback",
    label: "Hatchback",
    examples: "Alto \u00b7 Vitz \u00b7 Wagon R \u00b7 Mira",
  },
  {
    id: "sedan",
    label: "Sedan",
    examples: "Corolla \u00b7 Civic \u00b7 City \u00b7 Sonata",
  },
  {
    id: "suv",
    label: "SUV",
    examples: "Land Cruiser \u00b7 Prado \u00b7 Haval Tank \u00b7 BYD Shark",
  },
  {
    id: "crossover",
    label: "Crossover",
    examples: "Honda Vezel \u00b7 KIA Sportage \u00b7 MG HS \u00b7 Toyota C-HR",
  },
];

export const services = [
  {
    slug: "signature",
    name: "Signature Complete Detailing",
    shortName: "Complete Detailing",
    mostBooked: true,
    duration: "Full day (11\u201316 hours)",
    description:
      "Our flagship transformation. Interior, exterior, engine bay and trunk \u2014 every surface deep-cleaned, polished and protected with premium German products. From dull to showroom shine.",
    image: images.audiA3,
    features: [
      "Full exterior hand wash & decontamination",
      "Machine compound & polish for a flawless finish",
      "Complete interior detailing \u2014 seats, carpets, roof lining & dashboard",
      "Engine bay & trunk detailing",
      "Premium German wax protection",
      "Glass, wheels, tyres & trim dressing",
    ],
    pricing: { hatchback: 12000, sedan: 15000, suv: 22000, crossover: 18000 },
  },
  {
    slug: "compound",
    name: "Compound & Polish",
    shortName: "Compound & Polish",
    mostBooked: true,
    duration: "3\u20134 hours",
    description:
      "Swirl marks, light scratches and oxidation removed by machine. Restoring the shine, enhancing the finish, and bringing the paint back to life.",
    image: images.whiteCarGlossyHood,
    features: [
      "Paint inspection under studio lighting",
      "Machine compounding to cut defects",
      "Refining polish for deep gloss",
      "Protective wax top coat",
    ],
    pricing: { hatchback: 5000, sedan: 7500, suv: 12000, crossover: 10000 },
  },
  {
    slug: "interior",
    name: "Interior Deep Clean",
    shortName: "Interior Deep Clean",
    mostBooked: true,
    duration: "2\u20133 hours",
    description:
      "A cabin reset. Seats, carpets, headliner, vents and every crevice cleaned and conditioned so the inside feels factory-fresh.",
    image: images.kiaSportageInterior,
    features: [
      "Vacuum & steam of seats, carpets and mats",
      "Leather or fabric deep clean & conditioning",
      "Dashboard, console & vent detailing",
      "Interior glass & odor neutralising",
    ],
    pricing: { hatchback: 5000, sedan: 6000, suv: 8000, crossover: 7500 },
  },
  {
    slug: "engine",
    name: "Engine Bay Wash",
    shortName: "Engine Bay Wash",
    mostBooked: false,
    duration: "45\u201360 minutes",
    description:
      "From dusty to fresh. A quick yet professional engine bay wash \u2014 a clean engine bay not only looks better, it makes maintenance easier.",
    image: images.nissanNoteEngine,
    features: [
      "Safe covering of sensitive components",
      "Degrease & gentle pressure rinse",
      "Dressing of plastics and rubbers",
    ],
    pricing: { hatchback: 2500, sedan: 3500, suv: 5000, crossover: 5000 },
  },
  {
    slug: "overspray",
    name: "Overspray & Spot Removal",
    shortName: "Overspray Removal",
    mostBooked: false,
    duration: "2\u20134 hours",
    description:
      "Those tiny spray spots might look harmless, but they ruin the finish. We safely remove every paint overspray mark and restore a smooth, clean surface.",
    image: images.kiaSportageStudio,
    features: [
      "Full paint contamination inspection",
      "Clay treatment & safe overspray removal",
      "Panel polish to restore smoothness",
      "Protective sealant on treated panels",
    ],
    pricing: { hatchback: 3000, sedan: 6000, suv: 8000, crossover: 5000 },
  },
  {
    slug: "exterior",
    name: "Premium Exterior Detail",
    shortName: "Exterior Detail",
    mostBooked: false,
    duration: "2\u20133 hours",
    description:
      "A premium exterior-only detail using German products \u2014 for when the outside needs to shine but the interior doesn't need a full reset.",
    image: images.whiteHyundaiSedan,
    features: [
      "Hand wash & decontamination with German pH-neutral shampoo",
      "Wheel & tyre deep clean and dressing",
      "Exterior trim & rubber restoration",
      "German wax / sealant protective top coat",
    ],
    pricing: { hatchback: 5000, sedan: 6500, suv: 8000, crossover: 7500 },
  },
  {
    slug: "ppf",
    name: "Paint Protection Film",
    shortName: "PPF",
    mostBooked: false,
    duration: "1\u20133 days",
    description:
      "Invisible armour for your paint. Self-healing PPF applied by trained hands \u2014 from high-impact front-end coverage to full-body wraps.",
    image: images.kiaSportageShowroom,
    features: [
      "Front-end package: bumper, bonnet, fenders & mirrors",
      "Full-body coverage on request",
      "Self-healing, stain-resistant film",
      "Surface preparation & panel wipe included",
    ],
    quoteOnly: true,
    pricing: null,
    note: "Pricing depends on film quality \u2014 get an exact quote on WhatsApp",
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
