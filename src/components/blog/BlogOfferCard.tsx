import Link from 'next/link';
import { ShieldCheck, Tv, Zap, CheckCircle2 } from 'lucide-react';

export default function BlogOfferCard() {
  return (
    <div className="my-10 relative overflow-hidden rounded-2xl border border-[#6366F1]/20 bg-gradient-to-br from-[#F8FAFC] to-white shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 group">
      {/* Subtle background decoration */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#6366F1]/10 rounded-full blur-3xl group-hover:bg-[#6366F1]/20 transition-all duration-700"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#D946EF]/10 rounded-full blur-3xl group-hover:bg-[#D946EF]/20 transition-all duration-700"></div>

      <div className="flex-1 relative z-10 text-center md:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#6366F1] mb-4">
          <Zap className="w-3 h-3" /> Limited Time Offer
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
          Premium <span className="text-[#6366F1]">BexyTV</span> Streaming — Save 61% Today
        </h3>
        <p className="text-slate-600 mb-5 leading-relaxed font-medium">
          Unlock crystal-clear HD/4K streaming, advanced EPG, and zero buffering. Get our Ultimate 12-month plan for just <strong className="text-slate-800">$69.99</strong>.
        </p>
        
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 justify-center md:justify-start">
          <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#D946EF]" /> Premium Antifreeze
          </li>
          <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#D946EF]" /> Instant Setup
          </li>
        </ul>
      </div>

      <div className="w-full md:w-auto flex flex-col items-center gap-3 relative z-10 shrink-0">
        <Link 
          href="/pricing" 
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D946EF] to-[#6366F1] text-white font-bold rounded-xl shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.4)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
        >
          <Tv className="w-5 h-5" />
          View Plans & Pricing
        </Link>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-slate-400" /> Secure checkout & Support
        </div>
      </div>
    </div>
  );
}
