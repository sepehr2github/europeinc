"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-heading font-bold text-2xl sm:text-[1.7rem] text-white tracking-tight leading-none">
              Europe<span className="text-eu-gold">&thinsp;Inc</span>
            </span>
            <span className="text-[10px] font-semibold text-eu-gold/60 border border-eu-gold/25 rounded px-1.5 py-0.5 uppercase tracking-[0.15em] leading-none group-hover:border-eu-gold/40 group-hover:text-eu-gold/80 transition-all">
              EU
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#waitlist"
              className="px-5 py-2.5 text-sm font-semibold bg-eu-gold text-navy rounded-lg hover:bg-eu-gold-dark transition-all duration-200 shadow-md shadow-eu-gold/20 hover:shadow-lg hover:shadow-eu-gold/30 hover:-translate-y-0.5"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 mt-2 text-center font-semibold bg-eu-gold text-navy rounded-lg"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
