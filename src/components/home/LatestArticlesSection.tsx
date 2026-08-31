import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Sparkles } from "lucide-react";

export default function LatestArticlesSection() {
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-[#060810] bg-tech-grid bg-atmosphere text-white relative z-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 border border-[#38BDF8]/30 rounded-full px-4 py-1 bg-[#0D111B] text-[#38BDF8] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> BEXYTV GUIDES & INSIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Latest <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">IPTV Articles</span> & Tutorials
          </h2>
          <p className="text-[#A7B0C0] text-base sm:text-lg">
            Stay up to date with setup guides, device optimization, and streaming news.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className={`grid gap-6 mb-12 ${displayPosts.length === 1 ? 'grid-cols-1 max-w-lg mx-auto' : displayPosts.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <article className="bexy-card overflow-hidden flex flex-col group cursor-pointer h-full border border-white/10">
                <div className="h-48 relative overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    alt={post.title}
                    src={post.coverImage || "/blog/high-quality-iptv-service.webp"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D111B] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#060810]/80 backdrop-blur-md text-[#38BDF8] rounded-full text-xs font-bold border border-white/10">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-snug text-white group-hover:text-[#60A5FA] transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#A7B0C0] text-xs leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.description}
                  </p>
                  <div className="mt-auto text-slate-400 text-xs font-medium flex items-center justify-between border-t border-white/10 pt-4">
                    <span>{post.date}</span>
                    <span className="flex items-center text-[#38BDF8] group-hover:translate-x-1 transition-transform font-bold text-xs">
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <button className="btn-secondary text-sm">
              View All Articles & Tutorials <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
