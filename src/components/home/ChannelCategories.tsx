import { Monitor, Globe2, Tv, Headphones, Sparkles } from "lucide-react";

export default function ChannelCategories() {
  const features = [
    {
      icon: Monitor,
      title: "Universal Devices",
      desc: "100% compatible with Firestick, Smart TVs, Android, iOS, Windows, Mac, and MAG boxes.",
    },
    {
      icon: Globe2,
      title: "Global 4K Servers",
      desc: "High-speed anti-freeze servers operating across North America, Europe, and Asia.",
    },
    {
      icon: Tv,
      title: "60 FPS Ultra HD",
      desc: "Stream live sports and blockbusters with crystal clear 4K resolution and high bitrates.",
    },
    {
      icon: Headphones,
      title: "24/7 Live Support",
      desc: "Instant technical help via WhatsApp and email whenever you need setup assistance.",
    },
  ];

  return (
    <section className="relative z-10 bg-[#060810] bg-tech-grid py-20 text-white border-t border-white/10">
      <div className="mx-auto max-w-[1340px] px-5">
        
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center space-y-3">
          <span className="inline-flex items-center gap-2 border border-[#38BDF8]/30 rounded-full px-4 py-1 bg-[#0D111B] text-[#38BDF8] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> WHY BEXYTV STANDS OUT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            We Are Proud to Offer the <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              #1 Premium IPTV Experience
            </span>
          </h2>
        </div>

        {/* Feature Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="bexy-card p-6 flex flex-col items-center text-center">
                <div className="mb-5 p-3 rounded-2xl bg-gradient-to-br from-[#38BDF8]/20 to-[#818CF8]/20 border border-[#38BDF8]/30 text-[#38BDF8]">
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-[#A7B0C0] text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
