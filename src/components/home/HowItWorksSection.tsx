import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#060810] bg-tech-grid bg-atmosphere text-white relative z-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 border border-[#38BDF8]/30 rounded-full px-4 py-1 bg-[#0D111B] text-[#38BDF8] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> FAST 3-STEP SETUP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Start Streaming BexyTV IPTV in{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-[#A7B0C0] text-base sm:text-lg max-w-2xl mx-auto">
            Get setup in under 3 minutes with automated credential delivery and instant activation.
          </p>
        </div>

        {/* Timeline Steps Container */}
        <div className="relative max-w-[1000px] mx-auto">
          {/* Vertical Dashed Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-white/10 hidden md:block" />

          {/* STEP 1 */}
          <div className="relative mb-16 md:mb-20">
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#061018] font-black text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-lg shadow-cyan-500/20">
                Step One
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              <div className="bexy-card p-8 relative border border-white/10">
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-2 block">1. SELECT YOUR PLAN</span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Choose Subscription & Checkout
                </h3>
                <p className="text-[#A7B0C0] text-sm leading-relaxed mb-4">
                  Select your desired plan (1, 3, 6, or 12 Months). After instant checkout, your M3U playlist URL and Xtream Codes login credentials are immediately sent to your email or WhatsApp.
                </p>
                <a href="#pricing" className="text-xs font-bold text-[#38BDF8] hover:text-white transition-colors inline-flex items-center gap-1">
                  View Plans <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative aspect-[16/10] group">
                <Image
                  src="/step-1-order-ai.png"
                  alt="Place your order online"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative mb-16 md:mb-20">
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#061018] font-black text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-lg shadow-cyan-500/20">
                Step Two
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative aspect-[16/10] order-2 md:order-1 group">
                <Image
                  src="/step-2-setup-ai.png"
                  alt="Instant installation"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>

              <div className="bexy-card p-8 relative border border-white/10 order-1 md:order-2">
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-2 block">2. INSTALL THE APP</span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Connect Your Favorite IPTV App
                </h3>
                <p className="text-[#A7B0C0] text-sm leading-relaxed mb-4">
                  Download IPTV Smarters Pro, TiviMate, IBO Player, or XCIPTV on your Smart TV or Firestick. Enter your login details provided in Step 1.
                </p>
                <Link href="/installation" className="text-xs font-bold text-[#38BDF8] hover:text-white transition-colors inline-flex items-center gap-1">
                  Installation Guides <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative">
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#061018] font-black text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-lg shadow-cyan-500/20">
                Step Three
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              <div className="bexy-card p-8 relative border border-white/10">
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-2 block">3. ENJOY STREAMING</span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Stream 50,000+ Channels & VODs
                </h3>
                <p className="text-[#A7B0C0] text-sm leading-relaxed mb-4">
                  Sit back and enjoy uninterrupted live sports, 4K movies, and premium international channels with zero buffering and 60 FPS clarity.
                </p>
                <Link href="/channels" className="text-xs font-bold text-[#38BDF8] hover:text-white transition-colors inline-flex items-center gap-1">
                  Explore Channel Catalog <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative aspect-[16/10] group">
                <Image
                  src="/step-3-watch-ai.png"
                  alt="Watch and enjoy live TV"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
