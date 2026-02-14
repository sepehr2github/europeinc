"use client";

import { useEffect, useRef } from "react";

const events = [
  {
    date: "January 2026",
    title: "Official Announcement",
    desc: "EU Commission President von der Leyen announced EU Inc at the World Economic Forum in Davos, signaling strong political commitment.",
    status: "done" as const,
  },
  {
    date: "Q1 2026",
    title: "Legislative Proposal",
    desc: "European Commission releases the detailed legislative proposal for the 28th regime pan-European legal entity.",
    status: "current" as const,
  },
  {
    date: "2026",
    title: "Parliament & Council Review",
    desc: "European Parliament and Council of 27 member states negotiate and finalize the implementation details.",
    status: "upcoming" as const,
  },
  {
    date: "Q1 2027",
    title: "EU Inc Goes Live",
    desc: "EU Inc becomes available for company registrations. First pan-European entities can be incorporated across all member states.",
    status: "upcoming" as const,
  },
];

export default function Timeline() {
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
      id="timeline"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-cream overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="reveal inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-eu-blue border border-eu-blue/20 rounded-full mb-6">
            Roadmap
          </span>
          <h2 className="reveal font-heading font-semibold text-4xl md:text-5xl text-navy leading-tight mb-4">
            The Path to EU Inc
          </h2>
          <p className="reveal text-lg text-slate-warm/60 max-w-xl mx-auto">
            From announcement to launch — the journey of the 28th regime.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-eu-blue/20 via-eu-gold/30 to-eu-blue/10 md:-translate-x-px" />

          {events.map((event, i) => (
            <div
              key={event.date}
              className={`reveal relative flex items-start gap-8 mb-12 last:mb-0 ${
                i % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse md:text-right"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div
                  className={`w-4 h-4 rounded-full border-3 ${
                    event.status === "done"
                      ? "bg-eu-gold border-eu-gold shadow-md shadow-eu-gold/30"
                      : event.status === "current"
                        ? "bg-eu-blue border-eu-blue shadow-md shadow-eu-blue/30 animate-star-pulse"
                        : "bg-cream border-eu-blue/30"
                  }`}
                />
              </div>

              {/* Card */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 !== 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-dark hover:shadow-md transition-shadow duration-300">
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-widest mb-2 ${
                      event.status === "done"
                        ? "text-eu-gold-dark"
                        : event.status === "current"
                          ? "text-eu-blue"
                          : "text-slate-warm/40"
                    }`}
                  >
                    {event.date}
                  </span>
                  <h3 className="font-semibold text-navy text-lg mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-warm/60 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
