"use client";

import { useEffect, useRef } from "react";

export default function WhatIsEuInc() {
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-cream overflow-hidden"
    >
      {/* Decorative gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-linear-to-b from-transparent via-eu-gold/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left -- text */}
          <div>
            <div className="reveal">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-eu-blue border border-eu-blue/20 rounded-full mb-6">
                The 28th Regime
              </span>
            </div>

            <h2 className="reveal font-heading font-semibold text-4xl md:text-5xl text-navy leading-[1.12] mb-6">
              A New Era for
              <br />
              European Business
            </h2>

            <p className="reveal text-lg text-slate-warm/80 leading-relaxed mb-6">
              EU&nbsp;Inc — also known as the &ldquo;28th regime&rdquo; — is the
              most ambitious reform for company formation in European history.
              Announced by Commission President von&nbsp;der&nbsp;Leyen at the
              World Economic Forum in January 2026, it creates a single, unified
              legal entity that operates seamlessly across all 27 EU member
              states.
            </p>

            <p className="reveal text-lg text-slate-warm/80 leading-relaxed mb-8">
              No more navigating 27 different legal systems. No more costly
              notary appointments. No more language barriers. Just one company,
              one set of rules, one Europe.
            </p>

            <div className="reveal flex items-center gap-4">
              <div className="w-12 h-px bg-eu-gold" />
              <p className="text-sm text-eu-blue/70 italic max-w-sm">
                &ldquo;Innovative start-ups should have the opportunity to adopt
                a new EU-wide legal statute.&rdquo;
              </p>
            </div>
            <p className="reveal text-xs text-eu-blue/50 mt-2 ml-16">
              — Mario Draghi, EU Competitiveness Report
            </p>
          </div>

          {/* Right -- visual card */}
          <div className="reveal">
            <div className="relative bg-white rounded-2xl p-8 shadow-xl shadow-navy/5 border border-cream-dark">
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-linear-to-bl from-eu-gold/10 to-transparent" />
              </div>

              <h3 className="font-heading font-semibold text-2xl text-navy mb-6">
                What&apos;s Included
              </h3>

              <div className="space-y-5">
                {[
                  {
                    title: "EU-INC Entity",
                    desc: "Pan-European legal entity with digital-first registration",
                  },
                  {
                    title: "EU-REGISTRY",
                    desc: "Central EU-level company registry for all member states",
                  },
                  {
                    title: "EU-DASHBOARD",
                    desc: "Standardized entity management system for founders",
                  },
                  {
                    title: "EU-FAST",
                    desc: "Harmonized investment documentation framework",
                  },
                  {
                    title: "EU-ESOP",
                    desc: "EU-wide stock options for employee equity",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-eu-blue/5 flex items-center justify-center">
                      <div className="eu-star !w-3 !h-3" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">
                        {item.title}
                      </div>
                      <div className="text-sm text-slate-warm/60 mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-eu-gold/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
