import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import InstagramIcon from "../ui/InstagramIcon";
import { business, waLink, telLink } from "../../data/business";
import Reveal from "../ui/Reveal";

const cards = [
  {
    icon: MapPin,
    title: "Visit the studio",
    value: business.location,
    action: "Get directions",
    href: business.mapsUrl,
  },
  {
    icon: Phone,
    title: "Call us",
    value: business.phoneDisplay,
    action: "Tap to call",
    href: telLink(),
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: business.phoneDisplay,
    action: "Fastest reply",
    href: waLink(`Assalam-o-Alaikum ${business.name}!`),
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    value: business.instagramHandle,
    action: "DM for bookings",
    href: business.instagramUrl,
  },
];

export default function ContactInfoGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {cards.map((card, i) => (
        <Reveal key={card.title} delay={i * 0.06}>
          <a
            href={card.href}
            target={card.href.startsWith("http") ? "_blank" : undefined}
            rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group block h-full rounded-xl border border-line bg-panel p-6 hover:border-amber/50 transition-colors duration-300"
          >
            <card.icon className="w-6 h-6 text-amber mb-4" strokeWidth={1.75} />
            <p className="font-display uppercase text-base tracking-wide">
              {card.title}
            </p>
            <p className="text-cream/90 mt-1">{card.value}</p>
            <p className="text-xs text-muted mt-3 group-hover:text-amber transition-colors">
              {card.action}
            </p>
          </a>
        </Reveal>
      ))}
      <Reveal delay={0.24} className="sm:col-span-2">
        <div className="flex items-center gap-3 rounded-xl border border-line bg-panel p-6">
          <Clock className="w-6 h-6 text-amber shrink-0" strokeWidth={1.75} />
          <div>
            <p className="font-display uppercase text-base tracking-wide">
              Hours
            </p>
            <p className="text-cream/90 mt-1">{business.hours}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
