import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import InstagramIcon from "../ui/InstagramIcon";
import { images } from "../../data/images";
import { business, waLink, telLink } from "../../data/business";
import { footerExploreLinks, footerServiceLinks } from "../../data/nav";

export default function Footer() {
  return (
    <footer className="bg-panel border-t border-line">
      <div className="container-page py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img
              src={images.logo}
              alt="Casa De Cars logo"
              className="w-11 h-11 rounded-full object-cover"
            />
            <span className="font-display uppercase text-lg tracking-[0.12em]">
              {business.name}
            </span>
          </Link>
          <p className="text-sm text-muted leading-relaxed max-w-xs">
            Where Shine Meets Perfection. Premium auto spa, complete
            detailing, compound &amp; polish and PPF — done with premium
            German products.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-amber">
            Clean · Shine · Protect — Est. {business.established}
          </p>
        </div>

        <FooterColumn title="Explore" links={footerExploreLinks} />
        <FooterColumn title="Services" links={footerServiceLinks} />

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-cream mb-5">
            Visit the Studio
          </h3>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-amber shrink-0" />
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber transition-colors"
              >
                {business.location}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 mt-0.5 text-amber shrink-0" />
              <a href={telLink()} className="hover:text-amber transition-colors">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="w-4 h-4 mt-0.5 text-amber shrink-0" />
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber transition-colors"
              >
                WhatsApp us anytime
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <InstagramIcon className="w-4 h-4 mt-0.5 text-amber shrink-0" />
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber transition-colors"
              >
                {business.instagramHandle}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 mt-0.5 text-amber shrink-0" />
              <span>{business.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>
            © {business.year} {business.name} · {business.location}
          </p>
          <p>Where Shine Meets Perfection ✨</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-cream mb-5">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-muted">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="hover:text-amber transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
