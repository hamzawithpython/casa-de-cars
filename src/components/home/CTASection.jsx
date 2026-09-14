import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { business, waLink, defaultWaMessage } from "../../data/business";
import Reveal from "../ui/Reveal";

export default function CTASection() {
  return (
    <section className="bg-amber text-onAmber py-20 md:py-24">
      <div className="container-page">
        <Reveal>
          <h2 className="text-3xl md:text-5xl leading-tight text-balance max-w-2xl">
            Ready for showroom shine?
          </h2>
          <p className="mt-5 text-onAmber/80 max-w-xl text-base md:text-lg leading-relaxed">
            Book your slot today — or build an instant quote and send it to
            us on WhatsApp in one tap.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-onAmber text-cream px-6 py-3.5 text-sm font-semibold hover:bg-black transition-colors"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2.25} />
              Book on WhatsApp
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-full border border-onAmber/40 px-6 py-3.5 text-sm font-semibold hover:bg-onAmber/10 transition-colors"
            >
              Get an instant quote
              <ArrowRight className="w-4 h-4" strokeWidth={2.25} />
            </Link>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:no-underline"
            >
              <MapPin className="w-4 h-4" strokeWidth={2.25} />
              Find us in DHA 2
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
