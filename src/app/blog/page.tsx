"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export default function Blog() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <main className="w-full min-h-screen bg-[#060810] bg-tech-grid bg-atmosphere text-[#F8FAFC] relative z-10">
      <div className="pt-16 pb-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto w-full relative z-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#38BDF8]/10 via-[#818CF8]/5 to-transparent blur-3xl opacity-50" />

      {/* Header */}
      <header className="mb-16 text-center max-w-3xl mx-auto relative z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#38BDF8] mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Streaming Blog &amp; Insights
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight uppercase text-white">
          Latest News &amp; <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">Streaming Guides</span>
        </h1>
        <p className="mt-5 text-xs sm:text-sm text-[#A7B0C0] max-w-2xl mx-auto leading-relaxed">
          Stay updated with the latest in 60 FPS 4K Ultra HD streaming technology, setup guides, and channel expansion news for BexyTV.
        </p>
      </header>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-20 relative z-10">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="bg-[#0D111B] border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row group cursor-pointer transition-all duration-500 hover:border-[#38BDF8]/50 shadow-2xl">
              <div className="md:w-3/5 h-64 md:h-96 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  alt={featuredPost.title}
                  src={featuredPost.coverImage || ""}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D111B] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0D111B] opacity-80 md:opacity-100"></div>
              </div>
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center z-10 relative">
                <span className="inline-block px-3 py-1 bg-[#38BDF8]/10 text-[#38BDF8] rounded-full text-[10px] font-black uppercase tracking-wider mb-4 w-max border border-[#38BDF8]/20">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-[#38BDF8] transition-colors leading-snug">
                  {featuredPost.title}
                </h2>
                <p className="text-xs text-[#A7B0C0] mb-6 line-clamp-3 leading-relaxed">
                  {featuredPost.description}
                </p>
                <div className="flex items-center gap-3 mt-auto text-xs font-black uppercase tracking-wider text-[#38BDF8]">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 relative z-10">
        {gridPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <article className="bg-[#0D111B] border border-white/10 rounded-3xl overflow-hidden flex flex-col group cursor-pointer hover:border-[#38BDF8]/50 hover:-translate-y-1 transition-all duration-300 h-full shadow-xl">
              <div className="h-48 relative overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  alt={post.title}
                  src={post.coverImage || ""}
                />
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0D111B] to-transparent"></div>
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#060810]/80 backdrop-blur-md text-[#38BDF8] rounded-xl text-[9px] font-black uppercase tracking-wider border border-white/10">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-[#A7B0C0] mb-4 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-auto text-[10px] font-semibold text-[#64748B] uppercase tracking-wider">
                  {post.date} • 5 min read
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#0D111B] border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl mx-auto">
          <Mail className="w-10 h-10 text-[#38BDF8] mb-4 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mb-3">Never Miss a Streaming Update</h2>
          <p className="text-xs sm:text-sm text-[#A7B0C0] mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest streaming tips, channel updates, and exclusive IPTV offer alerts.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-[#060810] border border-white/10 rounded-2xl px-5 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#38BDF8] w-full sm:w-80 transition-all"
              placeholder="Enter your email address..."
              type="email"
            />
            <button
              className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#060810] font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-2xl shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all"
              type="submit"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
      </div>
    </main>
  );
}
