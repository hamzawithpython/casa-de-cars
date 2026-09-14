import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";
import { navLinks } from "../../data/nav";
import { business, waLink, defaultWaMessage } from "../../data/business";
import { images } from "../../data/images";
import useScrolled from "../../hooks/useScrolled";

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink/95 backdrop-blur border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-[81px]">
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <img
            src={images.logo}
            alt="Casa De Cars logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-display uppercase text-lg tracking-[0.12em]">
            {business.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                  isActive ? "text-amber" : "text-cream/85 hover:text-amber"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-amber text-onAmber px-5 py-2.5 text-sm font-semibold hover:bg-amber-light transition-colors"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
            Book Now
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-cream"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-smooth bg-ink border-b border-line ${
          open ? "max-h-[560px]" : "max-h-0"
        }`}
      >
        <nav className="container-page flex flex-col py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 text-sm font-semibold uppercase tracking-[0.08em] border-b border-line/60 last:border-none ${
                  isActive ? "text-amber" : "text-cream/85"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-amber text-onAmber px-5 py-3 text-sm font-semibold"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
