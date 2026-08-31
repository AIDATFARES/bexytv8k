import { Mail, MessageSquare, Sparkles } from "lucide-react";

export default function SupportCtaSection() {
  return (
    <section className="border-t border-white/10 bg-[#060810] bg-tech-grid bg-atmosphere px-5 py-20 relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div
        className="relative z-10 mx-auto flex max-w-[680px] flex-col gap-8 rounded-2xl border border-white/10 bg-[#0D111B] p-8 shadow-2xl sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="max-w-[400px]">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] mb-4">
            <MessageSquare className="h-5 w-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">
            Need Immediate <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">BexyTV</span> Assistance?
          </h2>
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#A7B0C0]">
            Our dedicated technical team is available 24/7. Get instant help with setup, device configuration, or free trial creation via WhatsApp or email.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:w-44">
          <a
            className="btn-primary text-xs py-3 px-4 shadow-md shadow-cyan-500/20"
            href="https://wa.me/213552069874?text=Hello%2C%20I%20have%20a%20question%20about%20bexytv%20IPTV."
            rel="noreferrer"
            target="_blank"
          >
            <MessageSquare className="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <a
            className="btn-secondary text-xs py-3 px-4 text-center"
            href="mailto:support@bexytv.com"
          >
            <Mail className="h-4 w-4" />
            Email Support
          </a>
        </div>
      </div>
    </section>
  );
}
