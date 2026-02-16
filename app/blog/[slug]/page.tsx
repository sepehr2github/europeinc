import { posts, getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Europe Inc Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Header */}
      <div className="bg-navy pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
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
            All posts
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-eu-gold bg-eu-gold/10 rounded-md">
              {post.tag}
            </span>
            <span className="text-xs text-white/30">{post.date}</span>
            <span className="text-xs text-white/30">{post.readTime}</span>
          </div>
          <h1 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="bg-cream py-16">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-cream-dark p-8 md:p-12">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-heading font-semibold text-2xl text-navy mt-10 mb-4 first:mt-0"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("**") && block.endsWith("**")) {
                return (
                  <p
                    key={i}
                    className="text-base text-slate-warm/80 leading-relaxed mb-4 font-semibold"
                  >
                    {block.replace(/\*\*/g, "")}
                  </p>
                );
              }
              if (block.includes("**")) {
                const parts = block.split(/(\*\*[^*]+\*\*)/);
                return (
                  <p
                    key={i}
                    className="text-base text-slate-warm/80 leading-relaxed mb-4"
                  >
                    {parts.map((part, j) =>
                      part.startsWith("**") && part.endsWith("**") ? (
                        <strong key={j} className="font-semibold text-navy">
                          {part.replace(/\*\*/g, "")}
                        </strong>
                      ) : (
                        <span key={j}>{part}</span>
                      ),
                    )}
                  </p>
                );
              }
              return (
                <p
                  key={i}
                  className="text-base text-slate-warm/80 leading-relaxed mb-4"
                >
                  {block}
                </p>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl border border-cream-dark p-8">
              <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                Ready to incorporate in Europe?
              </h3>
              <p className="text-sm text-slate-warm/60 mb-6 max-w-md mx-auto">
                Join our waitlist for priority access when EU Inc registration
                opens in 2027.
              </p>
              <Link
                href="/#waitlist"
                className="inline-block px-6 py-3 bg-eu-gold text-navy font-semibold text-sm rounded-xl hover:bg-eu-gold-dark transition-all duration-300 shadow-md shadow-eu-gold/20 hover:-translate-y-0.5"
              >
                Join Waitlist
              </Link>
            </div>
          </div>

          {/* More posts */}
          <div className="mt-12">
            <h3 className="font-heading font-semibold text-xl text-navy mb-6">
              More Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {posts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group bg-white rounded-xl border border-cream-dark hover:border-eu-gold/30 p-6 transition-all duration-300 hover:shadow-md"
                  >
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-eu-blue bg-eu-blue/5 rounded">
                      {related.tag}
                    </span>
                    <h4 className="font-semibold text-sm text-navy mt-3 group-hover:text-eu-blue transition-colors leading-snug">
                      {related.title}
                    </h4>
                    <span className="text-xs text-slate-warm/40 mt-2 block">
                      {related.readTime}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
