"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "What is EU Inc?",
    a: "EU Inc (also known as the '28th regime') is a new pan-European company structure announced by the European Commission. It allows entrepreneurs to register a single legal entity that operates seamlessly across all 27 EU member states, with unified rules for incorporation, governance, and investment.",
  },
  {
    q: "When will EU Inc be available?",
    a: "The European Commission announced EU Inc at Davos in January 2026. The legislative proposal is expected in Q1 2026, with member state negotiations throughout 2026. First EU Inc registrations are expected to be available in Q1 2027.",
  },
  {
    q: "Can non-EU residents form an EU Inc?",
    a: "Yes! EU Inc is designed to be accessible to entrepreneurs worldwide. You don't need to be an EU citizen or resident. The entire process is digital and can be completed from anywhere in the world.",
  },
  {
    q: "What is the minimum capital requirement?",
    a: "EU Inc has a minimum share capital of just €1, making it the most accessible company structure in Europe. This is significantly lower than traditional structures like the German GmbH (€25,000) or the French SA (€37,000).",
  },
  {
    q: "How is EU Inc different from the Societas Europaea (SE)?",
    a: "The SE targets large public companies and has high capital requirements (€120,000). EU Inc is specifically designed for startups and SMEs with digital-first registration, €1 minimum capital, standardized investment docs (EU-FAST), and a harmonized stock option framework (EU-ESOP).",
  },
  {
    q: "What does Europe Inc (by OpenForest) do?",
    a: "Europe Inc is a service by OpenForest that helps entrepreneurs navigate and incorporate under the new EU Inc framework. We guide you through the entire process — from choosing your structure to registration and ongoing management across all 27 EU member states.",
  },
  {
    q: "How much does it cost to incorporate?",
    a: "Official EU Inc registration fees have not been finalized yet. We expect them to be minimal as the framework is designed for accessibility. Europe Inc will offer competitive service packages that include registration assistance, compliance setup, and ongoing support. Join our waitlist for early-bird pricing.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      id="faq"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-cream"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-eu-blue border border-eu-blue/20 rounded-full mb-6">
            FAQ
          </span>
          <h2 className="reveal font-heading font-semibold text-4xl md:text-5xl text-navy leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="reveal text-lg text-slate-warm/60">
            Everything you need to know about EU Inc and our services.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="reveal bg-white rounded-xl border border-cream-dark overflow-hidden transition-all duration-300 hover:border-eu-gold/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy pr-4">{faq.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`flex-shrink-0 text-eu-blue/40 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <line x1="10" y1="4" x2="10" y2="16" />
                    <line x1="4" y1="10" x2="16" y2="10" />
                  </svg>
                </button>
                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <div className="accordion-inner">
                    <div className="px-6 pb-5 text-sm text-slate-warm/70 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
