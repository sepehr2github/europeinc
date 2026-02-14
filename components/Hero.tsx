"use client";

import { useEffect, useRef } from "react";

// Pre-computed star polygon points as static strings
// Avoids floating-point hydration mismatches between server/client
const starPoints = [
  "50,5.8 50.85,7.3 52.2,7.3 51.1,8.4 51.5,10.2 50,9.2 48.5,10.2 48.9,8.4 47.8,7.3 49.15,7.3",
  "71.39,11.83 72.24,13.33 73.59,13.33 72.49,14.43 72.89,16.23 71.39,15.23 69.89,16.23 70.29,14.43 69.19,13.33 70.54,13.33",
  "86.37,26.8 87.22,28.3 88.57,28.3 87.47,29.4 87.87,31.2 86.37,30.2 84.87,31.2 85.27,29.4 84.17,28.3 85.52,28.3",
  "92,47.8 92.85,49.3 94.2,49.3 93.1,50.4 93.5,52.2 92,51.2 90.5,52.2 90.9,50.4 89.8,49.3 91.15,49.3",
  "86.37,68.8 87.22,70.3 88.57,70.3 87.47,71.4 87.87,73.2 86.37,72.2 84.87,73.2 85.27,71.4 84.17,70.3 85.52,70.3",
  "71.39,83.77 72.24,85.27 73.59,85.27 72.49,86.37 72.89,88.17 71.39,87.17 69.89,88.17 70.29,86.37 69.19,85.27 70.54,85.27",
  "50,89.8 50.85,91.3 52.2,91.3 51.1,92.4 51.5,94.2 50,93.2 48.5,94.2 48.9,92.4 47.8,91.3 49.15,91.3",
  "28.61,83.77 29.46,85.27 30.81,85.27 29.71,86.37 30.11,88.17 28.61,87.17 27.11,88.17 27.51,86.37 26.41,85.27 27.76,85.27",
  "13.63,68.8 14.48,70.3 15.83,70.3 14.73,71.4 15.13,73.2 13.63,72.2 12.13,73.2 12.53,71.4 11.43,70.3 12.78,70.3",
  "8,47.8 8.85,49.3 10.2,49.3 9.1,50.4 9.5,52.2 8,51.2 6.5,52.2 6.9,50.4 5.8,49.3 7.15,49.3",
  "13.63,26.8 14.48,28.3 15.83,28.3 14.73,29.4 15.13,31.2 13.63,30.2 12.13,31.2 12.53,29.4 11.43,28.3 12.78,28.3",
  "28.61,11.83 29.46,13.33 30.81,13.33 29.71,14.43 30.11,16.23 28.61,15.23 27.11,16.23 27.51,14.43 26.41,13.33 27.76,13.33",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.classList.add("animate-fade-in");
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-navy via-eu-blue-dark to-navy"
    >
      {/* Background star ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-150 h-150 md:w-200 md:h-200 animate-star-rotate opacity-[0.07]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {starPoints.map((pts, i) => (
              <polygon key={i} points={pts} fill="#FFCC00" />
            ))}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#FFCC00"
              strokeWidth="0.15"
              strokeDasharray="2 2"
            />
          </svg>
        </div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,22,40,0.8)_70%)]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,204,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-eu-gold/30 bg-eu-gold/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-eu-gold animate-star-pulse" />
          <span className="text-sm text-eu-gold/90 font-medium tracking-wide">
            Launching Q1 2027 — The 28th Regime
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-200 font-heading font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] text-white leading-[1.08] mb-6 tracking-tight">
          One Registration.
          <br />
          <span className="text-eu-gold">Twenty-Seven</span> Nations.
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up delay-400 text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          One company. 27 countries. Under the new EU&nbsp;Inc framework,
          register a pan-European entity entirely online — no notary, no
          barriers, no borders.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#waitlist"
            className="px-8 py-4 text-base font-semibold bg-eu-gold text-navy rounded-xl hover:bg-eu-gold-dark transition-all duration-300 shadow-lg shadow-eu-gold/20 hover:shadow-xl hover:shadow-eu-gold/30 hover:-translate-y-0.5"
          >
            Get Early Access
          </a>
          <a
            href="#about"
            className="px-8 py-4 text-base font-semibold text-white/80 border border-white/20 rounded-xl hover:bg-white/5 hover:border-white/30 hover:text-white transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-in-up delay-700 grid grid-cols-3 max-w-xl mx-auto">
          {[
            { value: "Fast", label: "Registration" },
            { value: "€1", label: "Minimum Capital" },
            { value: "27", label: "EU Countries" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-4 ${
                i < 2 ? "border-r border-white/10" : ""
              }`}
            >
              <div className="font-heading font-semibold text-3xl md:text-4xl text-eu-gold mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/50 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-navy/50 to-transparent" />
    </section>
  );
}
