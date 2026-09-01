"use client";

import Link from "next/link";
import { Tv, ShieldCheck, Zap, Sparkles, CheckCircle2, Play, ArrowRight, Activity, Users, Globe2 } from "lucide-react";
import IPTVMockupUI from "@/components/home/IPTVMockupUI";

export default function HeroSection() {
  const benefits = [
    "50,000+ Live Channels in 4K UHD",
    "150,000+ VOD Movies & Series",
    "60 FPS Anti-Freeze Technology",
    "Instant Setup on Any Device",
  ];

  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 bg-[#060810] bg-tech-grid bg-atmosphere overflow-hidden">
      
      {/* Hero Specific Atmospheric Glowing Orbs */}
      <div className="absolute top-1/4 left-5 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-5 w-[450px] h-[450px] bg-purple-600/18 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8">
        
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Copy & Call To Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 border border-[#38BDF8]/30 rounded-full px-4 py-1.5 bg-[#0D111B]/80 backdrop-blur-md shadow-lg shadow-cyan-500/5">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
              <span className="text-xs font-bold text-[#38BDF8] tracking-widest uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#818CF8]" />
                #1 BEXYTV 4K IPTV SERVICE
              </span>
            </div>

            {/* Main Title H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Bexytv IPTV — Stream 50,000+ Live Channels & Movies in{" "}
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#818CF8] bg-clip-text text-transparent">
                4K Ultra HD
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed max-w-xl font-normal">
              Elevate your home entertainment with Bexytv IPTV. Experience zero-buffering 60 FPS live sports, worldwide premium channels, and over 150,000 on-demand movies & series. Choose your perfect <Link href="/pricing" className="text-[#38BDF8] hover:underline font-medium">IPTV subscription plan</Link> or view our simple <Link href="/installation" className="text-[#38BDF8] hover:underline font-medium">IPTV installation guide</Link> for Firestick, Smart TV, and mobile devices.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20BexyTV%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-base py-3.5 px-8 shadow-lg shadow-cyan-500/20"
              >
                <Play className="w-5 h-5 fill-current" />
                Start Free Trial
              </a>
              <Link
                href="/pricing"
                className="btn-secondary text-base py-3.5 px-8"
              >
                View IPTV Plans <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Key Trust / Benefit Points */}
            <div className="grid grid-cols-2 gap-3 pt-4 w-full max-w-lg border-t border-white/10 text-xs sm:text-sm text-[#A7B0C0]">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Realtime Stats Ribbon */}
            <div className="flex items-center gap-6 pt-2 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>99.9% Server Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#60A5FA]" />
                <span>No IP Lock</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#818CF8]" />
                <span>50k+ Active Users</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Original Interactive Web Player / IPTV Mockup */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <IPTVMockupUI />
          </div>

        </div>

      </div>
    </section>
  );
}
