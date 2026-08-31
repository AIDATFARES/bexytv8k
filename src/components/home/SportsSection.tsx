import { Trophy, Flame, Play, Shield, Zap, Sparkles } from "lucide-react";

export default function SportsSection() {
  const sports = [
    {
      name: "NFL Sunday Ticket",
      tag: "AMERICAN FOOTBALL",
      desc: "Live 60 FPS streams for every regular season & playoff game, RedZone, & Super Bowl in 4K UHD.",
      icon: "🏈",
      badge: "4K 60FPS",
      color: "from-blue-600/20 to-indigo-600/10",
      borderColor: "border-blue-500/30",
    },
    {
      name: "NBA League Pass",
      tag: "BASKETBALL",
      desc: "Catch every dunk live. Access all out-of-market games, NBA Finals, & regional sports networks.",
      icon: "🏀",
      badge: "LIVE HD",
      color: "from-amber-600/20 to-orange-600/10",
      borderColor: "border-orange-500/30",
    },
    {
      name: "UFC Pay-Per-View",
      tag: "COMBAT SPORTS",
      desc: "Zero extra cost PPV main cards, Fight Nights, Bellator, & Boxing mega-fights included.",
      icon: "🥊",
      badge: "PPV INCLUDED",
      color: "from-red-600/20 to-rose-600/10",
      borderColor: "border-red-500/30",
    },
    {
      name: "NHL Center Ice",
      tag: "HOCKEY",
      desc: "Complete coverage of all Stanley Cup playoffs and regular season ice hockey matchups.",
      icon: "🏒",
      badge: "ULTRA HD",
      color: "from-cyan-600/20 to-sky-600/10",
      borderColor: "border-cyan-500/30",
    },
    {
      name: "MLB Extra Innings",
      tag: "BASEBALL",
      desc: "Never miss a pitch. 162 games live coverage, World Series, & home team broadcasts.",
      icon: "⚾",
      badge: "60 FPS",
      color: "from-emerald-600/20 to-teal-600/10",
      borderColor: "border-emerald-500/30",
    },
    {
      name: "MLS & Premier League",
      tag: "SOCCER",
      desc: "Champions League, Premier League, MLS Season Pass, La Liga, Serie A, & World Cup.",
      icon: "⚽",
      badge: "GLOBAL SOCCER",
      color: "from-purple-600/20 to-indigo-600/10",
      borderColor: "border-purple-500/30",
    },
  ];

  return (
    <section id="sports" className="py-24 bg-[#080B14] bg-tech-grid relative z-10 border-t border-white/10 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 border border-cyan-500/30 rounded-full px-4 py-1 bg-[#0D111B] text-[#38BDF8] text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" /> UNLIMITED LIVE SPORTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Watch NFL, NBA, UFC & Soccer Live in{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              60 FPS Ultra HD
            </span>
          </h2>
          <p className="text-[#A7B0C0] text-base sm:text-lg">
            Say goodbye to expensive cable packages and blackouts. BexyTV gives you front-row seat access to every major sport and Pay-Per-View event worldwide.
          </p>
        </div>

        {/* 6 Sports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((item, idx) => (
            <div
              key={idx}
              className={`bexy-card p-6 border ${item.borderColor} bg-gradient-to-br ${item.color} relative group overflow-hidden`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
                  {item.badge}
                </span>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#38BDF8] mb-1 block">
                {item.tag}
              </span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#60A5FA] transition-colors">
                {item.name}
              </h3>
              <p className="text-xs text-[#A7B0C0] leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white">
                <span className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                  <Zap className="w-3.5 h-3.5 fill-current" /> Zero Blackouts
                </span>
                <a
                  href="https://wa.me/213552069874?text=Hello,%20I%20want%20to%20watch%20live%20sports%20with%20BexyTV."
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#38BDF8] hover:text-white transition-colors flex items-center gap-1"
                >
                  Stream Sports <Play className="w-3 h-3 fill-current" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
