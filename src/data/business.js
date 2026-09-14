/**
 * Business identity & contact details.
 * Update these once and every page (nav, footer, WhatsApp links,
 * contact page, structured data, etc.) stays in sync.
 */
export const business = {
  name: "Casa De Cars",
  tagline: "Where Shine Meets Perfection",
  category: "Auto Spa · PPF · Auto Trade",
  location: "DHA Phase 2, Islamabad",
  established: "2024",
  phoneDisplay: "0339 5902198",
  phoneE164: "923395902198",
  hours: "Open 7 days · 10:00 AM – 8:00 PM",
  instagramHandle: "@casa_de_cars_",
  instagramUrl: "https://www.instagram.com/casa_de_cars_/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Casa+De+Cars+DHA+Phase+2+Islamabad",
  year: new Date().getFullYear() || 2026,
};

/** Build a wa.me deep link with an optional prefilled message. */
export function waLink(message) {
  const base = `https://wa.me/${business.phoneE164}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:+${business.phoneE164}`;
}

export const defaultWaMessage =
  "Assalam-o-Alaikum Casa De Cars! I would like to book a detailing slot.";
