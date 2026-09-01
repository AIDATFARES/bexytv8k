import Image from "next/image";
import { CheckCircle, ShieldCheck, Zap, Tv } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="bg-[#060810] bg-tech-grid bg-atmosphere text-white relative z-10 py-24 border-t border-white/10 overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <Image 
              src="/imggt1-1.webp" 
              alt="Watching BexyTV on Smart TV" 
              fill 
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0D111B]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/20 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-sm text-white block">Next-Gen IPTV Infrastructure</span>
                  <span className="text-xs text-[#A7B0C0]">50,000+ Channels & 150,000+ VODs</span>
                </div>
              </div>
              <span className="text-xs font-bold bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/30">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 border border-[#38BDF8]/30 rounded-full px-4 py-1 bg-[#0D111B] text-[#38BDF8] text-xs font-bold uppercase tracking-widest w-fit mb-4">
              ABOUT THE SERVICE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              What is <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">BexyTV?</span> — The #1 IPTV Service
            </h2>
            
            <p className="text-[#A7B0C0] text-sm md:text-base mb-4 leading-relaxed">
              BexyTV is the premier IPTV subscription service in the USA, Canada, and Europe. Delivering live TV, on-demand movies, and 60 FPS sports to viewers over high-speed internet without expensive cable boxes or restrictive contracts.
            </p>
            
            <p className="text-[#A7B0C0] text-sm md:text-base mb-8 leading-relaxed">
              Compatible with all internet-connected platforms — Firestick, Smart TV, Android, iOS, MAG, and Windows. Experience high-definition streaming with zero buffering and up to 3 simultaneous device connections per subscription.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div className="bexy-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#38BDF8] mb-1">50K+</div>
                <div className="text-[10px] text-[#A7B0C0] font-bold uppercase tracking-wider">Live Channels</div>
              </div>
              <div className="bexy-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#818CF8] mb-1">150K+</div>
                <div className="text-[10px] text-[#A7B0C0] font-bold uppercase tracking-wider">VOD Movies</div>
              </div>
              <div className="bexy-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#38BDF8] mb-1">4K 60FPS</div>
                <div className="text-[10px] text-[#A7B0C0] font-bold uppercase tracking-wider">Ultra HD</div>
              </div>
              <div className="bexy-card p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">99.9%</div>
                <div className="text-[10px] text-[#A7B0C0] font-bold uppercase tracking-wider">Server Uptime</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
