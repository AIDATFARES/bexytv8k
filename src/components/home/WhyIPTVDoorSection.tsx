"use client";

import { motion } from "framer-motion";
import { Bolt, Clapperboard, Globe2, Layers3, Monitor, ShieldCheck, Smartphone } from "lucide-react";

const primaryFeatures = [
  { icon: Monitor, title: "4K Ultra HD Streaming", text: "Experience every live event and broadcast in stunning 4K, Full HD, and HD. Built with advanced anti-freeze technology for seamless, uninterrupted playback.", tags: ["4K UHD", "FULL HD", "ANTI-FREEZE"], accent: "violet" },
  { icon: Layers3, title: "+50,000 Live Channels", text: "Instantly unlock 50,000+ live TV channels spanning global sports, premium entertainment, breaking news, and international networks—all delivered with remarkable stability.", tags: ["160+ COUNTRIES", "SPORTS", "NEWS", "KIDS"], accent: "cyan" },
  { icon: Clapperboard, title: "200,000+ VODs", text: "Dive into a massive on-demand library featuring over 120,000 movies and series. Enjoy instant access to blockbuster hits, exclusive shows, and documentaries.", tags: ["120,000+ FILMS", "SERIES", "200,000+ VODS"], accent: "orange" },
];

const benefits = [
  { icon: Bolt, title: "Instant Activation", text: "Get secure access to your subscription within minutes of completing your order.", color: "text-[#6366F1]" },
  { icon: Smartphone, title: "Universal Compatibility", text: "Stream seamlessly on Smart TVs, Android, iOS, Firestick, PC, and more.", color: "text-sky-400" },
  { icon: Globe2, title: "Global Access", text: "Enjoy premium entertainment from anywhere in the world with no geo-restrictions.", color: "text-[#6366F1]" },
  { icon: ShieldCheck, title: "99.9% Network Uptime", text: "Powered by high-performance servers designed to eliminate buffering and lag.", color: "text-sky-400" },
];

export default function WhyIPTVBexyTVSection() {
  return <section className="relative overflow-hidden bg-[#060810] bg-tech-grid bg-atmosphere py-24 sm:py-28 border-t border-white/10 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(56,189,248,0.12),transparent_42%)] pointer-events-none" />
    <div className="relative mx-auto max-w-[1120px] px-5 sm:px-8 z-10">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-[#38BDF8]/35 bg-[#38BDF8]/[0.08] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#38BDF8]">Why choose BexyTV?</span>
        <h2 className="mt-6 text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl"><span className="block">Engineered For</span><span className="mt-1 block bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">Premium BexyTV IPTV</span></h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#A7B0C0]">Everything you need for an elite live television and on-demand entertainment experience—delivered flawlessly to any screen.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {primaryFeatures.map((feature, index) => {
          const Icon = feature.icon;
          const active = index === 1;
          return <motion.article key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`flex min-h-[285px] flex-col rounded-2xl border p-6 ${active ? "border-[#38BDF8]/60 bg-gradient-to-b from-[#38BDF8]/[0.15] to-[#0D111B] shadow-[0_0_32px_rgba(56,189,248,0.2)]" : "border-white/10 bg-[#0D111B]"}`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8]"><Icon className="h-5 w-5" /></span>
            <p className="mt-5 text-lg font-extrabold uppercase text-white">{feature.title}</p>
            <p className="mt-4 text-xs leading-5 text-[#A7B0C0]">{feature.text}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-5">{feature.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-bold tracking-wide text-white">{tag}</span>)}</div>
          </motion.article>;
        })}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => { const Icon = benefit.icon; return <motion.div key={benefit.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 + index * 0.07 }} className="flex min-h-[112px] gap-3 rounded-xl border border-white/10 bg-[#0D111B] p-5"><Icon className={`h-5 w-5 shrink-0 ${benefit.color}`} /><span><span className="block text-sm font-bold text-white">{benefit.title}</span><small className="mt-1 block text-[11px] leading-4 text-[#A7B0C0]">{benefit.text}</small></span></motion.div>; })}
      </div>
    </div>
  </section>;
}
