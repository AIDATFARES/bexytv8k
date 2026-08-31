"use client";

import { Play, Tv, Film, Radio, Search, Volume2, ShieldCheck, Flame, Circle, CheckCircle2, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function IPTVMockupUI() {
  const [activeTab, setActiveTab] = useState("sports");
  const [selectedChannel, setSelectedChannel] = useState(0);

  const channels = [
    {
      id: 1,
      name: "ESPN 4K ULTRA",
      category: "Sports",
      nowPlaying: "NFL Live: Chiefs vs 49ers",
      epg: "Next: SportsCenter Live Edition",
      badge: "LIVE 4K",
      fps: "60 FPS",
      logoBg: "bg-red-600",
    },
    {
      id: 2,
      name: "Sky Sports Main Event",
      category: "Sports",
      nowPlaying: "Premier League: Arsenal vs Chelsea",
      epg: "Next: Match of the Day",
      badge: "LIVE HD",
      fps: "60 FPS",
      logoBg: "bg-sky-600",
    },
    {
      id: 3,
      name: "HBO Max Cinema 4K",
      category: "Movies",
      nowPlaying: "Dune: Part Two (2024)",
      epg: "Next: Oppenheimer 4K UHD",
      badge: "HDR10+",
      fps: "24 FPS",
      logoBg: "bg-purple-700",
    },
    {
      id: 4,
      name: "TNT Sports 1 Ultra",
      category: "Sports",
      nowPlaying: "UFC 305: Main Card Pay-Per-View",
      epg: "Next: Champions League Highlights",
      badge: "LIVE 4K",
      fps: "60 FPS",
      logoBg: "bg-amber-600",
    },
  ];

  const categories = [
    { id: "all", label: "🔥 Top Featured", icon: Flame },
    { id: "sports", label: "⚽ Sports 4K", icon: Tv },
    { id: "movies", label: "🍿 Cinema 4K", icon: Film },
    { id: "live", label: "📡 Live Global", icon: Radio },
  ];

  const current = channels[selectedChannel];

  return (
    <div className="w-full max-w-[620px] mx-auto rounded-2xl bg-[#080B14]/90 border border-white/10 p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden group">
      
      {/* Decorative Glow Effects inside Mockup */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header of Mockup UI */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
          </div>
          <span className="text-[11px] font-bold text-slate-400 ml-2 tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            BEXYTV WEB PLAYER v4.2
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
            4K UHD 60FPS
          </span>
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> ZERO BUFFER
          </span>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar text-xs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap text-[11px] ${
              activeTab === cat.id
                ? "bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#061018] shadow-sm font-bold"
                : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main Screen Player View */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#060810] via-[#0B0F1A] to-[#121829] border border-white/10 mb-3 shadow-inner aspect-[16/9] flex flex-col justify-between p-3 sm:p-4 group/player">
        
        {/* Mock Screen Content Visual Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-black/40 z-0" />
        
        {/* Decorative Play Animation Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover/player:opacity-50 transition-opacity z-0">
          <div className="w-24 h-24 rounded-full border-2 border-cyan-400/40 flex items-center justify-center animate-ping"></div>
        </div>

        {/* Player Top Controls Bar */}
        <div className="relative z-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">{current.badge}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-black/60 backdrop-blur-md text-[#38BDF8] text-[10px] font-mono font-bold px-2 py-1 rounded-md border border-cyan-500/30">
              {current.fps}
            </span>
            <span className="bg-black/60 backdrop-blur-md text-slate-300 text-[10px] font-mono px-2 py-1 rounded-md border border-white/10">
              BITRATE: 45 Mbps
            </span>
          </div>
        </div>

        {/* Player Center Play Icon */}
        <div className="relative z-10 self-center my-auto">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#818CF8] p-0.5 shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform cursor-pointer flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#060810] flex items-center justify-center">
              <Play className="w-6 h-6 text-[#38BDF8] fill-current ml-1" />
            </div>
          </div>
        </div>

        {/* Player Bottom Info Overlay */}
        <div className="relative z-10 bg-black/70 backdrop-blur-md p-2.5 rounded-lg border border-white/10">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2 truncate">
              <span className={`w-2 h-2 rounded-full ${current.logoBg}`} />
              <span className="font-bold text-xs text-white truncate">{current.name}</span>
            </div>
            <span className="text-[10px] text-cyan-400 font-semibold shrink-0">EPG UPDATED</span>
          </div>
          <p className="text-xs font-semibold text-slate-200 truncate">{current.nowPlaying}</p>
          <div className="mt-2 w-full bg-white/10 rounded-full h-1 overflow-hidden">
            <div className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] h-full w-[65%] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Interactive Channel EPG List */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 px-1 mb-1">
          <span>CHANNEL DIRECTORY</span>
          <span>EPG PROGRAM GUIDE</span>
        </div>
        {channels.map((ch, idx) => (
          <div
            key={ch.id}
            onClick={() => setSelectedChannel(idx)}
            className={`p-2 sm:p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between text-xs ${
              selectedChannel === idx
                ? "bg-[#111621] border-[#38BDF8]/50 shadow-md shadow-cyan-500/5"
                : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10"
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className={`w-7 h-7 rounded-md ${ch.logoBg} flex items-center justify-center font-bold text-[10px] text-white shrink-0 shadow-sm`}>
                {ch.name.slice(0, 3)}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-white text-xs truncate flex items-center gap-1.5">
                  {ch.name}
                  {selectedChannel === idx && (
                    <span className="text-[9px] font-bold bg-cyan-500/20 text-cyan-300 px-1.5 py-0.2 rounded">PLAYING</span>
                  )}
                </div>
                <div className="text-[11px] text-slate-400 truncate">{ch.nowPlaying}</div>
              </div>
            </div>
            <div className="text-right shrink-0 ml-2">
              <span className="text-[10px] font-mono text-slate-400 block">{ch.badge}</span>
              <span className="text-[10px] text-slate-500 block truncate max-w-[100px]">{ch.epg}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
