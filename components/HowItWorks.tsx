"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Choose Your Structure",
    desc: "Select the EU Inc entity type that fits your business. Our advisors help you determine the optimal setup for your goals and market.",
  },
  {
    num: "02",
    title: "Submit Documents Online",
    desc: "Upload your identification and company details through our secure digital platform. No notary, no physical presence required.",
  },
  {
    num: "03",
    title: "Get Registered",
    desc: "Your EU Inc entity is registered at the central EU-REGISTRY. Receive your company number and official documentation — fast and fully digital.",
  },
  {
    num: "04",
    title: "Operate Across the EU",
    desc: "Start doing business in all 27 member states immediately. Manage your entity through the EU-DASHBOARD with full transparency.",
  },
];

export default function HowItWorks() {
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
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-linear-to-b from-navy via-eu-blue-dark to-navy overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,204,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="reveal inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-eu-gold/80 border border-eu-gold/20 rounded-full mb-6">
            Process
          </span>
          <h2 className="reveal font-heading font-semibold text-4xl md:text-5xl text-white leading-tight mb-4">
            How It Works
          </h2>
          <p className="reveal text-lg text-white/50 max-w-xl mx-auto">
            From idea to pan-European company in four simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-4">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal relative text-center md:text-left"
            >
              {/* Connecting line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-0 h-px">
                  <div className="w-full h-full bg-linear-to-r from-eu-gold/30 to-eu-gold/5" />
                </div>
              )}

              {/* Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-eu-gold/10 border border-eu-gold/20 mb-6">
                <span className="font-heading font-semibold text-2xl text-eu-gold">
                  {step.num}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
