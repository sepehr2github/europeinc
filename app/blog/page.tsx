import { posts } from "@/lib/posts";
import Link from "next/link";

export const metadata = {
  title: "Blog — Europe Inc",
  description:
    "Expert insights on EU Inc, the 28th regime, European company formation, and growing your business across Europe.",
};

export default function BlogPage() {
  return (
    <>
      {/* Header spacer */}
      <div className="bg-navy pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-eu-gold transition-colors mb-8"
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 3L5 7l4 4" />
            </svg>
            Back to home
          </Link>
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-white leading-tight mb-4">
            Blog
          </h1>
          <p className="text-lg text-white/50 max-w-xl">
            Expert insights on EU Inc, European incorporation, and building your
            business across the single market.
          </p>
        </div>
      </div>

      {/* Posts list */}
      <div className="bg-cream py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-cream-dark hover:border-eu-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-eu-gold/5 p-8 relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-eu-blue bg-eu-blue/5 rounded-md">
                        {post.tag}
                      </span>
                      <span className="text-xs text-slate-warm/40">
                        {post.date}
                      </span>
                      <span className="text-xs text-slate-warm/30">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-heading font-semibold text-xl text-navy mb-2 group-hover:text-eu-blue transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-warm/60 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-eu-blue/40 group-hover:text-eu-blue transition-colors shrink-0 sm:mt-6">
                    Read
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="group-hover:translate-x-0.5 transition-transform"
                    >
                      <path d="M3 7h8M7 3l4 4-4 4" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-eu-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
