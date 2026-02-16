"use client";

import { useEffect, useRef } from "react";
import { posts } from "@/lib/posts";

export default function Blog() {
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
      id="blog"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <span className="reveal inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-eu-blue border border-eu-blue/20 rounded-full mb-6">
              Insights
            </span>
            <h2 className="reveal font-heading font-semibold text-4xl md:text-5xl text-navy leading-tight">
              Latest from the Blog
            </h2>
          </div>
          <a
            href="/blog"
            className="reveal text-sm font-semibold text-eu-blue hover:text-eu-blue-light transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            View all posts
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 7h8M7 3l4 4-4 4" />
            </svg>
          </a>
        </div>

        {/* Blog grid -- uniform cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="reveal group relative bg-cream/50 rounded-2xl border border-cream-dark hover:border-eu-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-eu-gold/5 p-7 flex flex-col justify-between"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-eu-blue bg-eu-blue/5 rounded-md">
                    {post.tag}
                  </span>
                  <span className="text-xs text-slate-warm/40">
                    {post.date}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-2 group-hover:text-eu-blue transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-warm/60 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 text-xs text-eu-blue/50 group-hover:text-eu-blue transition-colors">
                <span>{post.readTime}</span>
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M2 6h8M6 2l4 4-4 4" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-eu-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
