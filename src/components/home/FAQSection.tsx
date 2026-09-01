import Link from "next/link";
import { ArrowRight, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is BexyTV IPTV and how does it work?",
    answer: (
      <>
        BexyTV IPTV is a premium high-speed IPTV streaming service delivering 50,000+ live channels, 150,000+ VOD movies, and live sports in 60 FPS 4K UHD directly over your internet connection. No satellite dish or contract required. Explore our full <Link href="/channels" className="text-[#38BDF8] font-semibold hover:underline">IPTV channel list</Link>.
      </>
    ),
  },
  {
    id: 2,
    question: "Do you offer a free trial for BexyTV IPTV?",
    answer: (
      <>
        Yes! You can request a 24-hour free trial pass via WhatsApp to test our 60 FPS streaming quality, channel selection, and anti-freeze server stability before purchasing an <Link href="/pricing" className="text-[#38BDF8] font-semibold hover:underline">IPTV subscription plan</Link>.
      </>
    ),
  },
  {
    id: 3,
    question: "Which devices and IPTV apps are supported?",
    answer: (
      <>
        BexyTV IPTV works on Firestick, Smart TVs (Samsung, LG, Android TV), Apple TV, iOS, Android, MAG, and Windows. We support all top IPTV player apps like TiviMate, IPTV Smarters Pro, and IBO Player. Follow our <Link href="/installation" className="text-[#38BDF8] font-semibold hover:underline">IPTV setup guide</Link>.
      </>
    ),
  },
  {
    id: 4,
    question: "How long does account activation take after ordering?",
    answer: (
      <>
        Activation is automated and instant! Immediately after checkout, your BexyTV M3U playlist URL and Xtream Codes API login credentials are sent directly to your email and WhatsApp in under 3 minutes.
      </>
    ),
  },
  {
    id: 5,
    question: "Are live sports and Pay-Per-View (PPV) events included?",
    answer: (
      <>
        Yes! All BexyTV IPTV subscription plans include full access to Premier League, Champions League, NFL Sunday Ticket, NBA, UFC PPVs, Formula 1, and global sports networks in ultra-clear 60 FPS 4K.
      </>
    ),
  },
  {
    id: 6,
    question: "Can I connect multiple devices simultaneously?",
    answer: (
      <>
        Yes! When selecting your BexyTV IPTV package, you can choose 1, 2, or 3 simultaneous device connections to enjoy buffer-free streaming across multiple screens in your home. View our <Link href="/pricing" className="text-[#38BDF8] font-semibold hover:underline">multi-device pricing options</Link>.
      </>
    ),
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-[#060810] bg-tech-grid bg-atmosphere text-white relative z-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 border border-[#38BDF8]/30 rounded-full px-4 py-1 bg-[#0D111B] text-[#38BDF8] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> BEXYTV IPTV FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions About{" "}
            <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">
              BexyTV IPTV
            </span>
          </h2>
          <p className="text-[#A7B0C0] text-base sm:text-lg">
            Everything you need to know about our IPTV subscription plans, installation guides, live channel catalog, and 24/7 technical support.
          </p>
        </div>

        {/* 2-Column FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1140px] mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bexy-card p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] shrink-0">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-sm text-[#A7B0C0] leading-relaxed pl-11">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Knowledge Base */}
        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="btn-secondary text-sm"
          >
            <span>View Full Knowledge Base & FAQ Center</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
