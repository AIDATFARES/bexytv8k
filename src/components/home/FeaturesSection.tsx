"use client";

import { motion } from "framer-motion";
import { Cpu, Tv2, Clock, ShieldCheck, Wifi, Sparkles } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Cpu,
      title: "Advanced Anti-Freeze Technology",
      desc: "Our proprietary H.265/HEVC encoding infrastructure eliminates buffering entirely, even during peak viewership for major live sports.",
      color: "text-primary",
    },
    {
      icon: Tv2,
      title: "Stunning 4K 60FPS Quality",
      desc: "Immerse yourself in breathtaking Ultra High Definition. Enjoy silky-smooth 60 frames per second playback for all fast-paced action.",
      color: "text-tertiary",
    },
    {
      icon: Clock,
      title: "7-Day Premium Catchup",
      desc: "Never miss a crucial moment again. Instantly rewind and replay any major broadcast from the past 7 days directly on demand.",
      color: "text-secondary",
    },
    {
      icon: ShieldCheck,
      title: "99.99% Network Reliability",
      desc: "Powered by a robust global cloud network with automated failover nodes, ensuring your streams stay live 24/7.",
      color: "text-[#6366F1]",
    },
    {
      icon: Wifi,
      title: "Adaptive Bandwidth Optimization",
      desc: "Our intelligent compression algorithms guarantee smooth HD streaming even on limited internet connections (8+ Mbps).",
      color: "text-primary",
    },
    {
      icon: Sparkles,
      title: "Comprehensive EPG Guide",
      desc: "Navigate seamlessly with our fully integrated Electronic Program Guide, featuring accurate schedules, live match details, and rich movie synopses.",
      color: "text-tertiary",
    },
  ];

  return (
    <section className="py-24 relative z-10 bg-[#060810] bg-tech-grid bg-atmosphere border-t border-white/10 text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-[#38BDF8]/30 rounded-full px-4 py-1 bg-[#0D111B] text-[#38BDF8] text-xs font-bold uppercase tracking-widest mb-4"
          >
            Maximum Performance Architecture
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4"
          >
            BexyTV: Engineered for Uninterrupted IPTV Entertainment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A7B0C0] text-base sm:text-lg"
          >
            Experience the pinnacle of IPTV technology. Our next-generation infrastructure is purpose-built to deliver flawless live sports, movies, and global broadcasts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bexy-card rounded-xl p-6 border border-white/10 bg-[#0D111B] hover:border-[#38BDF8]/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-white/5 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <p className="text-lg font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                  {feature.title}
                </p>
                <p className="text-[#A7B0C0] text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
