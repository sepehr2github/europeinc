"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "450M+", label: "Consumers", desc: "Single market population" },
  { value: "$18.4T", label: "GDP", desc: "Combined economic output" },
  { value: "27", label: "Nations", desc: "One unified legal framework" },
  { value: "€10T+", label: "Trade Volume", desc: "Largest trading bloc" },
];

export default function WhyEurope() {
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
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Decorative background -- stylized Europe map dots */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <svg
          viewBox="0 0 800 600"
          className="w-full max-w-5xl"
          fill="currentColor"
        >
          {/* Simplified dot-matrix Europe outline */}
          {[
            // Scandinavia
            [320, 60],
            [330, 70],
            [340, 80],
            [330, 90],
            [320, 100],
            [310, 110],
            [340, 100],
            [350, 110],
            [360, 100],
            [370, 90],
            [350, 80],
            // British Isles
            [220, 140],
            [230, 150],
            [220, 160],
            [230, 170],
            [240, 160],
            [200, 150],
            [210, 160],
            [200, 170],
            // Western Europe
            [280, 180],
            [290, 190],
            [300, 180],
            [310, 190],
            [320, 180],
            [270, 200],
            [280, 210],
            [290, 200],
            [300, 210],
            [310, 200],
            [260, 220],
            [270, 230],
            [280, 220],
            [290, 230],
            [300, 220],
            // Central Europe
            [330, 180],
            [340, 190],
            [350, 180],
            [360, 190],
            [370, 180],
            [380, 190],
            [390, 180],
            [400, 190],
            [340, 200],
            [350, 210],
            [360, 200],
            [370, 210],
            [380, 200],
            // Southern Europe
            [280, 260],
            [290, 270],
            [300, 260],
            [310, 270],
            [320, 280],
            [330, 270],
            [340, 280],
            [350, 290],
            [300, 290],
            [310, 300],
            [320, 310],
            [330, 300],
            // Iberian
            [210, 260],
            [220, 270],
            [230, 260],
            [240, 270],
            [250, 260],
            [220, 280],
            [230, 290],
            [240, 280],
            [250, 290],
            // Eastern
            [410, 160],
            [420, 170],
            [430, 160],
            [440, 170],
            [450, 180],
            [420, 190],
            [430, 200],
            [440, 190],
            [450, 200],
            [420, 210],
            [430, 220],
            [440, 230],
            [450, 220],
            // Greece/Balkans
            [380, 260],
            [390, 270],
            [400, 260],
            [380, 280],
            [390, 290],
            [400, 280],
            [390, 300],
            [400, 310],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="4" className="text-eu-blue" />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-eu-blue border border-eu-blue/20 rounded-full mb-6">
            The European Advantage
          </span>
          <h2 className="reveal font-heading font-semibold text-4xl md:text-5xl text-navy leading-tight mb-4">
            Why Europe?
          </h2>
          <p className="reveal text-lg text-slate-warm/60 max-w-2xl mx-auto">
            Access the world&apos;s largest single market with one entity.
            Europe offers unmatched scale, talent, and opportunity for ambitious
            businesses.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal text-center p-5 sm:p-8 rounded-2xl bg-cream/70 border border-cream-dark hover:border-eu-gold/20 transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl text-eu-blue mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-navy uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-warm/50">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Europe Inc value proposition */}
        <div className="reveal mt-16 bg-cream/80 border border-eu-gold/15 rounded-2xl p-8 md:p-10 text-center">
          <h3 className="font-heading font-semibold text-2xl md:text-3xl text-navy mb-4">
            We Help You Get There
          </h3>
          <p className="text-base text-slate-warm/70 leading-relaxed max-w-2xl mx-auto mb-6">
            Europe Inc guides you through every step of incorporating under the
            new EU&nbsp;Inc framework. From choosing the right entity structure
            to registration, compliance, and ongoing management across all 27
            member states — we handle the complexity so you can focus on
            building your business.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-6 py-3 bg-eu-blue text-white text-sm font-semibold rounded-xl hover:bg-eu-blue-light transition-all duration-300 shadow-md shadow-eu-blue/20 hover:-translate-y-0.5"
          >
            Start Your European Journey
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        {/* Bottom quote */}
        <div className="reveal mt-16 text-center">
          <div className="inline-block max-w-2xl">
            <div className="w-8 h-px bg-eu-gold mx-auto mb-6" />
            <p className="text-lg text-slate-warm/70 italic leading-relaxed">
              &ldquo;A startup from California can expand and raise money all
              across the United States. Our companies should be able to do the
              same across Europe.&rdquo;
            </p>
            <p className="text-sm text-eu-blue/50 mt-3">
              — Ursula von der Leyen, European Commission President
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
