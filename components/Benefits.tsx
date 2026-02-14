"use client";

import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Fast Digital Registration",
    desc: "Register your pan-European company entirely online. Fully digital, from anywhere in the world — no office visits required.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
    title: "€1 Minimum Capital",
    desc: "Start with just €1 in share capital — the lowest requirement in Europe. No €25,000 barriers to entry.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "27 Countries, One Entity",
    desc: "Operate seamlessly across all EU member states with a single legal entity. No subsidiary needed.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M9 12l2 2 4-4" />
        <rect x="3" y="4" width="18" height="16" rx="2" />
      </svg>
    ),
    title: "No Notary Required",
    desc: "Complete digital process with no physical presence or notary appointments needed. Sign everything online.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
        <path d="M7 8h10M7 12h7M7 16h4" />
      </svg>
    ),
    title: "English as Standard",
    desc: "All documentation and registration conducted in English at EU level. No translation hassles.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Standardized Framework",
    desc: "EU-FAST for investment documentation and EU-ESOP for employee stock options. Everything harmonized.",
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((child) =>
            child.classList.add("visible"),
          );
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white noise-overlay"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-eu-blue border border-eu-blue/20 rounded-full mb-6">
            Key Benefits
          </span>
          <h2 className="reveal font-heading font-semibold text-4xl md:text-5xl text-navy leading-tight mb-4">
            Why EU Inc Changes Everything
          </h2>
          <p className="reveal text-lg text-slate-warm/60 max-w-2xl mx-auto">
            The 28th regime eliminates barriers that have held European
            businesses back for decades.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="reveal group relative bg-cream/50 rounded-2xl p-7 border border-cream-dark hover:border-eu-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-eu-gold/5 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-eu-blue/5 flex items-center justify-center text-eu-blue mb-5 group-hover:bg-eu-blue group-hover:text-white transition-all duration-500">
                {b.icon}
              </div>

              <h3 className="font-semibold text-navy text-lg mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-slate-warm/60 leading-relaxed">
                {b.desc}
              </p>

              {/* Gold accent on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-eu-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
