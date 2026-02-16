"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-linear-to-b from-navy via-eu-blue-dark to-navy overflow-hidden"
    >
      {/* Background star ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-125 h-125 animate-star-rotate opacity-[0.12]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {[
              "50,6.2 50.7,7.4 51.8,7.4 50.9,8.3 51.2,9.8 50,9 48.8,9.8 49.1,8.3 48.2,7.4 49.3,7.4",
              "71.39,12.23 72.09,13.43 73.19,13.43 72.29,14.33 72.59,15.83 71.39,15.03 70.19,15.83 70.49,14.33 69.59,13.43 70.69,13.43",
              "86.37,27.2 87.07,28.4 88.17,28.4 87.27,29.3 87.57,30.8 86.37,30 85.17,30.8 85.47,29.3 84.57,28.4 85.67,28.4",
              "92,48.2 92.7,49.4 93.8,49.4 92.9,50.3 93.2,51.8 92,51 90.8,51.8 91.1,50.3 90.2,49.4 91.3,49.4",
              "86.37,69.2 87.07,70.4 88.17,70.4 87.27,71.3 87.57,72.8 86.37,72 85.17,72.8 85.47,71.3 84.57,70.4 85.67,70.4",
              "71.39,84.17 72.09,85.37 73.19,85.37 72.29,86.27 72.59,87.77 71.39,86.97 70.19,87.77 70.49,86.27 69.59,85.37 70.69,85.37",
              "50,90.2 50.7,91.4 51.8,91.4 50.9,92.3 51.2,93.8 50,93 48.8,93.8 49.1,92.3 48.2,91.4 49.3,91.4",
              "28.61,84.17 29.31,85.37 30.41,85.37 29.51,86.27 29.81,87.77 28.61,86.97 27.41,87.77 27.71,86.27 26.81,85.37 27.91,85.37",
              "13.63,69.2 14.33,70.4 15.43,70.4 14.53,71.3 14.83,72.8 13.63,72 12.43,72.8 12.73,71.3 11.83,70.4 12.93,70.4",
              "8,48.2 8.7,49.4 9.8,49.4 8.9,50.3 9.2,51.8 8,51 6.8,51.8 7.1,50.3 6.2,49.4 7.3,49.4",
              "13.63,27.2 14.33,28.4 15.43,28.4 14.53,29.3 14.83,30.8 13.63,30 12.43,30.8 12.73,29.3 11.83,28.4 12.93,28.4",
              "28.61,12.23 29.31,13.43 30.41,13.43 29.51,14.33 29.81,15.83 28.61,15.03 27.41,15.83 27.71,14.33 26.81,13.43 27.91,13.43",
            ].map((pts, i) => (
              <polygon key={i} points={pts} fill="#FFCC00" />
            ))}
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-eu-gold/80 border border-eu-gold/20 rounded-full mb-6">
            Early Access
          </span>
        </div>

        <h2 className="reveal font-heading font-semibold text-4xl md:text-5xl text-white leading-tight mb-4">
          Be First in Line
        </h2>

        <p className="reveal text-lg text-white/50 mb-10 leading-relaxed">
          Join thousands of entrepreneurs preparing for the EU&nbsp;Inc launch.
          Get exclusive updates, early-bird pricing, and priority access when
          registration opens in 2027.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="reveal">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-4 bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-eu-gold/50 focus:ring-1 focus:ring-eu-gold/20 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-eu-gold text-navy font-semibold rounded-xl hover:bg-eu-gold-dark transition-all duration-300 shadow-lg shadow-eu-gold/20 hover:shadow-xl hover:shadow-eu-gold/30 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </div>
            <p className="text-xs text-white/25 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        ) : (
          <div className="reveal visible">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-eu-gold/10 border border-eu-gold/20 rounded-xl">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-eu-gold"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-white font-medium">
                You&apos;re on the list! We&apos;ll be in touch.
              </span>
            </div>
          </div>
        )}

        {/* Trust points */}
        <div className="reveal mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Priority access",
            "Early-bird pricing",
            "Legislation updates",
            "Free guides",
          ].map((point) => (
            <div key={point} className="flex items-center justify-center gap-2">
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-eu-gold/60"
              >
                <path d="M2 7l3 3 7-7" />
              </svg>
              <span className="text-xs text-white/40">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
