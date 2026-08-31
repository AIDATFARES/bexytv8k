import Link from "next/link";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`font-black tracking-tighter uppercase flex items-center gap-1 select-none ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
      <div className="flex items-center justify-center bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#060810] px-2 py-0.5 rounded-lg font-black mr-1 shadow-md shadow-cyan-500/20">
        B
      </div>
      <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-sm">
        BEXY
      </span>
      <span className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent font-extrabold">
        TV
      </span>
    </div>
  );
}
