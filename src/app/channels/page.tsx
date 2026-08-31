"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { 
  Baby, 
  Check, 
  Film, 
  Globe2, 
  Layers3, 
  Monitor, 
  Newspaper, 
  Search, 
  Sparkles, 
  Trophy, 
  Tv, 
  CirclePlay,
  Flame,
  Radio
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandMarquee from "@/components/home/BrandMarquee";

// Category Overview Cards
const categoryCards = [
  {
    icon: Trophy,
    title: "Sports Channels",
    items: [
      "Football, Basketball, UFC, Boxing, F1, and more",
      "HD/FHD and 4K 60FPS streams available",
      "Sky Sports, TNT, BeIN, ESPN, DAZN & PPV"
    ],
    count: "12,500+ Channels",
    tag: "MOST POPULAR"
  },
  {
    icon: Film,
    title: "Movie & VOD Content",
    items: [
      "Premium movie networks & cinema channels",
      "Curated 4K VOD library updated daily",
      "HBO, Cinemax, Sky Cinema, Starz & VOD"
    ],
    count: "200,000+ VODs"
  },
  {
    icon: Newspaper,
    title: "News Networks",
    items: [
      "Global, national and regional news networks",
      "24/7 breaking news and special live coverage",
      "BBC News, CNN, Sky News, Fox, CNBC, Bloomberg"
    ],
    count: "3,200+ Channels"
  },
  {
    icon: Baby,
    title: "Kids & Family",
    items: [
      "Cartoons, learning & family entertainment",
      "Dedicated child-friendly programming",
      "Disney, Cartoon Network, Nickelodeon, Boomerang"
    ],
    count: "2,800+ Channels"
  },
  {
    icon: Monitor,
    title: "General Entertainment",
    items: [
      "Reality TV, variety, music, lifestyle & drama",
      "Popular everyday cable and satellite networks",
      "US, UK, Canadian & European top entertainment"
    ],
    count: "15,000+ Channels"
  },
  {
    icon: Globe2,
    title: "International Networks",
    items: [
      "150+ country packages & regional channels",
      "Local sports, news, culture & native audio",
      "Europe, Americas, MENA, Asia & Africa"
    ],
    count: "+50,000 Channels"
  },
  {
    icon: Layers3,
    title: "Series & Shows",
    items: [
      "Latest released seasons with daily updates",
      "Complete boxsets, timeless classics & VOD",
      "Netflix, Amazon, Apple TV+, HBO Max & Disney+"
    ],
    count: "+150,000 Films & Series"
  }
];

interface ChannelItem {
  id: string;
  name: string;
  category: string;
  country: string;
  flag: string;
  quality: "4K HDR" | "FHD 60FPS" | "FHD" | "HD";
  logo: string;
  isLive?: boolean;
}

const sampleChannels: ChannelItem[] = [
  // Sports
  { id: "1", name: "Sky Sports Main Event 4K", category: "Sports", country: "UK", flag: "gb", quality: "4K HDR", logo: "⚽", isLive: true },
  { id: "2", name: "TNT Sports 1 4K 60FPS", category: "Sports", country: "UK", flag: "gb", quality: "4K HDR", logo: "🏆", isLive: true },
  { id: "3", name: "BeIN Sports 1 Premium", category: "Sports", country: "MENA", flag: "qa", quality: "FHD 60FPS", logo: "⚽", isLive: true },
  { id: "4", name: "ESPN 1 Ultra HD", category: "Sports", country: "US", flag: "us", quality: "4K HDR", logo: "🏀", isLive: true },
  { id: "5", name: "DAZN 1 Bar HD", category: "Sports", country: "DE", flag: "de", quality: "FHD 60FPS", logo: "🥊" },
  { id: "6", name: "Canal+ Sport 4K", category: "Sports", country: "FR", flag: "fr", quality: "4K HDR", logo: "🏎️", isLive: true },
  { id: "7", name: "SuperSport Grandstand", category: "Sports", country: "ZA", flag: "za", quality: "FHD 60FPS", logo: "🏉" },
  { id: "8", name: "Eurosport 1 4K", category: "Sports", country: "EU", flag: "eu", quality: "4K HDR", logo: "🚴" },

  // Movies & VOD
  { id: "9", name: "HBO HD East", category: "Movies", country: "US", flag: "us", quality: "FHD 60FPS", logo: "🎬" },
  { id: "10", name: "Sky Cinema Premiere 4K", category: "Movies", country: "UK", flag: "gb", quality: "4K HDR", logo: "🍿" },
  { id: "11", name: "Cinemax Action", category: "Movies", country: "US", flag: "us", quality: "FHD", logo: "💥" },
  { id: "12", name: "Starz Cinema HD", category: "Movies", country: "US", flag: "us", quality: "FHD", logo: "⭐" },
  { id: "13", name: "Canal+ Cinema 4K", category: "Movies", country: "FR", flag: "fr", quality: "4K HDR", logo: "🎥" },
  { id: "14", name: "Movistar Estrenos 4K", category: "Movies", country: "ES", flag: "es", quality: "4K HDR", logo: "📽️" },

  // Entertainment & Shows
  { id: "15", name: "BBC One London 4K", category: "Entertainment", country: "UK", flag: "gb", quality: "4K HDR", logo: "📺", isLive: true },
  { id: "16", name: "ITV 1 HD", category: "Entertainment", country: "UK", flag: "gb", quality: "FHD", logo: "🇬🇧" },
  { id: "17", name: "CBS East FHD", category: "Entertainment", country: "US", flag: "us", quality: "FHD 60FPS", logo: "🇺🇸" },
  { id: "18", name: "TF1 4K France", category: "Entertainment", country: "FR", flag: "fr", quality: "4K HDR", logo: "🇫🇷" },
  { id: "19", name: "RTI 1 Italia HD", category: "Entertainment", country: "IT", flag: "it", quality: "FHD", logo: "🇮🇹" },

  // News
  { id: "20", name: "BBC News 24 HD", category: "News", country: "UK", flag: "gb", quality: "FHD", logo: "📰", isLive: true },
  { id: "21", name: "CNN International HD", category: "News", country: "US", flag: "us", quality: "FHD", logo: "🌐", isLive: true },
  { id: "22", name: "Sky News UK 4K", category: "News", country: "UK", flag: "gb", quality: "4K HDR", logo: "📡", isLive: true },
  { id: "23", name: "Al Jazeera English HD", category: "News", country: "MENA", flag: "qa", quality: "FHD", logo: "🌍", isLive: true },

  // Kids
  { id: "24", name: "Disney Channel 4K", category: "Kids", country: "US", flag: "us", quality: "4K HDR", logo: "🏰" },
  { id: "25", name: "Cartoon Network HD", category: "Kids", country: "UK", flag: "gb", quality: "FHD", logo: "🎨" },
  { id: "26", name: "Nickelodeon HD", category: "Kids", country: "US", flag: "us", quality: "FHD", logo: "🧽" },
];

export default function ChannelsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredChannels = useMemo(() => {
    return sampleChannels.filter((channel) => {
      const matchesTab = selectedTab === "All" || channel.category === selectedTab;
      const matchesSearch =
        searchQuery === "" ||
        channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        channel.country.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [selectedTab, searchQuery]);

  return (
    <main className="min-h-screen bg-[#060810] text-[#F8FAFC] pt-16 pb-24 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#38BDF8]/10 via-[#818CF8]/5 to-transparent blur-3xl opacity-50" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Banner */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#38BDF8] mb-6"
          >
            <Radio className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
            <span>+50,000 CHANNELS · +150,000 FILMS &amp; SERIES · 60 FPS 4K</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight uppercase"
          >
            <span className="block text-white">Premium IPTV Channel Lineup</span>
            <span className="mt-2 block bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">Unlimited Live TV &amp; VODs</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm sm:text-base text-[#A7B0C0] leading-relaxed"
          >
            Explore our comprehensive global network featuring live sports, blockbuster movies, breaking news, and premium entertainment in 60 FPS 4K Ultra HD.
          </motion.p>
        </div>

        {/* SECTION 1: Category Cards Grid */}
        <section className="mb-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="relative min-h-[240px] rounded-3xl border border-white/10 bg-[#0D111B] px-6 pb-6 pt-14 shadow-xl hover:border-[#38BDF8]/50 transition-all duration-300 group"
                >
                  {/* Top Floating Badge Icon */}
                  <span className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#060810] shadow-lg shadow-cyan-500/25 border-4 border-[#060810] group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" strokeWidth={2.5} />
                  </span>

                  {/* Optional Popular Tag */}
                  {category.tag && (
                    <span className="absolute right-4 top-4 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#38BDF8]">
                      {category.tag}
                    </span>
                  )}

                  <h2 className="text-center text-xl font-black text-white tracking-wide uppercase">
                    {category.title}
                  </h2>

                  <ul className="mt-4 space-y-2.5">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-[#A7B0C0] leading-tight">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#64748B]">Total Available</span>
                    <span className="text-xs font-black text-[#38BDF8]">{category.count}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* SECTION: Channel Brand Marquee Strip */}
        <section className="mb-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <BrandMarquee bgClassName="bg-[#080B14]" />
        </section>

        {/* SECTION 2: Live Channel Explorer */}
        <section className="bg-[#0D111B] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-3">
                <Flame className="w-6 h-6 text-[#38BDF8]" />
                Interactive Channel Directory
              </h2>
              <p className="text-[#A7B0C0] text-xs sm:text-sm mt-1">
                Search by network name or filter by category to discover our live channel lineup.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B0C0]" />
              <input
                type="text"
                placeholder="Search channel or country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#060810] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#38BDF8] transition-colors"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/10 pb-4">
            {["All", "Sports", "Movies", "Entertainment", "News", "Kids"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  selectedTab === tab
                    ? "bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#060810] shadow-lg shadow-cyan-500/25"
                    : "bg-[#060810] text-[#A7B0C0] hover:text-white border border-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredChannels.map((channel) => (
                <motion.div
                  key={channel.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#111726] border border-white/10 hover:border-[#38BDF8]/50 rounded-2xl p-4 flex items-center gap-3.5 transition-all hover:shadow-lg group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#060810] border border-white/10 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                    {channel.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w40/${channel.flag}.webp`}
                        alt={channel.country}
                        className="w-4 h-3 rounded-[2px] object-cover"
                      />
                      <p className="text-xs font-bold text-white truncate group-hover:text-[#38BDF8]">
                        {channel.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                        {channel.quality}
                      </span>
                      {channel.isLive && (
                        <span className="text-[8px] font-bold text-[#38BDF8] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" /> LIVE
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* SECTION 3: CTA Bottom Box */}
        <section className="mt-16 bg-gradient-to-b from-[#0D111B] via-[#111726] to-[#0D111B] rounded-3xl border border-white/10 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <CirclePlay className="w-10 h-10 text-[#38BDF8] mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-black uppercase text-white">Start Your Premium Entertainment Experience</h2>
            <p className="mt-3 text-[#A7B0C0] text-xs sm:text-sm leading-relaxed">
              Select your plan and receive secure, instant access credentials via WhatsApp &amp; Email in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#060810] font-black text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
              >
                View Subscription Plans
              </Link>
              <a
                href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20BexyTV%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-white/10 border border-white/10 text-white font-black text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                Get Free Trial via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
