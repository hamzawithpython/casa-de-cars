import { images } from "./images";

export const heroStats = [
  { value: "Est. 2026", label: "Owner-run studio" },
  { value: "100%", label: "German products" },
  { value: "7 days", label: "Open every week" },
];

export const brandMarquee = [
  "KIA",
  "HONDA",
  "TOYOTA",
  "AUDI",
  "SUZUKI",
  "HYUNDAI",
  "MINI",
  "NISSAN",
  "DAIHATSU",
];

export const studioBullets = [
  {
    title: "Premium German products on every car, every time",
    icon: "gem",
  },
  { title: "Paint-safe methods \u2014 no shortcuts, no damage", icon: "shield" },
  {
    title: "By appointment, so your car gets uninterrupted time",
    icon: "timer",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Book your slot",
    description:
      "WhatsApp, DM or the appointment form \u2014 pick a day that suits you.",
  },
  {
    number: "02",
    title: "Inspection",
    description:
      "We walk around the car together and agree the exact work and price.",
  },
  {
    number: "03",
    title: "The detail",
    description:
      "Wash, decontaminate, correct, polish and protect \u2014 with German products.",
  },
  {
    number: "04",
    title: "The reveal",
    description:
      "Final inspection under studio lights before you drive away gleaming.",
  },
];

// Fixed: this used to have `before`/`after` fields, but the slider
// component reads a single `image` field -- that mismatch is why the
// homepage transformation photo wasn't rendering.
export const heroTransformation = {
  image: images.whiteCarGlossyHood,
  eyebrow: "Compound & Polish",
  title: "From Dull to Glossy",
  caption: "paint brought back to life",
};

// Real Google review, replacing the old placeholder Instagram quote.
export const homeTestimonial = {
  quote:
    "I went as a random customer, found Haider quite knowledgeable about car and its maintenance, he and his team did a phenomenal job, did extra ceramic coating turned out to be an excellent decision. The car outside inside and engine bay results speaks itself. I am happy to recommend Casa de cars for complete detailing solutions.",
  author: "Muhammad Farrukh Adil",
  source: "Google Review",
};

export const instagramFeed = [
  {
    image: images.kiaSportageShowroom,
    alt: "Kia Sportage \u2014 From dull to showroom shine \u2014 Complete Detailing",
  },
  {
    image: images.audiA3,
    alt: "Audi A3 \u2014 Complete Detailing with our Premium German Products",
  },
  {
    image: images.blackHondaCity,
    alt: "Honda City \u2014 Complete Detailing",
  },
  {
    image: images.redHondaCity,
    alt: "Honda City \u2014 Deep clean. Glossy finish. Premium protection.",
  },
  {
    image: images.whiteHondaCivic,
    alt: "Honda Civic RS \u2014 Complete Detailing",
  },
  {
    image: images.whiteCarGlossyHood,
    alt: "Compound & Polish \u2014 From Dull to Glossy \u2014 paint brought back to life",
  },
];
