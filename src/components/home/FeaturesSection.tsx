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
    <section className="py-xl relative z-10 bg-surface-container-lowest/40">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-xs block"
          >
            Maximum Performance Architecture
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-semibold text-on-background mb-sm"
          >
            BexyTV: Engineered for Uninterrupted IPTV Entertainment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body-lg text-body-lg text-on-surface-variant"
          >
            Experience the pinnacle of IPTV technology. Our next-generation infrastructure is purpose-built to deliver flawless live sports, movies, and global broadcasts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel rounded-xl p-lg border border-black/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-md rounded-xl bg-surface-container-high w-fit mb-md group-hover:scale-110 transition-transform">
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <p className="font-title-md text-title-md text-on-surface font-semibold mb-xs group-hover:text-primary transition-colors">
                  {feature.title}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
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
