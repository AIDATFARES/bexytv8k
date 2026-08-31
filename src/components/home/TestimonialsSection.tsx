import Image from "next/image";
import { Globe2, Headphones, RefreshCw, ShieldCheck, Star, Trophy, Tv, Users } from "lucide-react";

const reviewImages = [
  "1-2.webp",
  "2-2.webp",
  "3-3.webp",
  "4-2.webp",
  "1-2 (1).webp",
  "Image01-e1736575288611.jpg.webp",
  "Image02-e1736575280733.jpg.webp",
  "Image03-e1736575270823.jpg.webp",
  "Image07-e1736575248206.jpg.webp"
];

const metrics = [
  { icon: Star, value: "4.9 / 5.0", label: "Average rating", tone: "text-amber-300" },
  { icon: Users, value: "14K+", label: "Happy customers", tone: "text-blue-300" },
  { icon: Tv, value: "50K+", label: "Live channels", tone: "text-sky-400" },
  { icon: Globe2, value: "80+", label: "Countries supported", tone: "text-sky-400" },
  { icon: RefreshCw, value: "94%", label: "Renewal rate", tone: "text-pink-300" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#060810] bg-tech-grid bg-atmosphere py-24 sm:py-28 border-t border-white/10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_22%_36%,rgba(56,189,248,0.12),transparent_28%),radial-gradient(ellipse_at_76%_52%,rgba(129,140,248,0.1),transparent_28%)]" />
      <div className="relative z-10">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/[0.08] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#38BDF8]">
            <Trophy className="h-3 w-3" /> TOP RATED IPTV PROVIDER
          </span>
          <h2 className="mt-6 text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl animate-fade-up">
            <span className="block">Join Thousands of Highly</span>
            <span className="mt-1 block bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">
              Satisfied BexyTV IPTV Streamers
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#A7B0C0] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Discover why thousands of users worldwide have made BexyTV their primary entertainment source. Read authentic reviews highlighting our unparalleled stability, comprehensive live sports coverage, and exceptional 4K visual quality.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[760px] grid-cols-2 gap-3 px-5 sm:grid-cols-5 sm:px-0">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="rounded-xl border border-white/10 bg-[#0D111B] px-3 py-4 text-center shadow-[0_0_20px_rgba(0,0,0,0.4)] animate-fade-up"
                style={{ animationDelay: `${0.2 + (index * 0.06)}s`, animationFillMode: 'both' }}
              >
                <Icon className={`mx-auto h-4 w-4 ${metric.tone}`} />
                <span className="mt-2 block text-base font-bold text-white">{metric.value}</span>
                <small className="mt-0.5 block text-[8px] font-bold uppercase tracking-wide text-[#A7B0C0]">
                  {metric.label}
                </small>
              </div>
            );
          })}
        </div>

        {/* Infinite Image Carousel of Real Reviews (Without background) */}
        <div className="mt-11 flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4">
          <div
            className="flex min-w-full gap-6 px-4 animate-marquee"
            style={{ animationDuration: '40s' }}
          >
            {[...reviewImages, ...reviewImages, ...reviewImages].map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[220px] sm:w-[280px] h-[340px] sm:h-[420px] relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 group drop-shadow-2xl"
              >
                <Image
                  src={`/reviews/${img}`}
                  alt="BexyTV Customer Review"
                  fill
                  sizes="(max-width: 640px) 220px, 280px"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <a
            href="https://wa.me/213552069874?text=Hello%2C%20I%20would%20like%20a%20free%20trial%20for%20bexytv%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D946EF] to-[#6366F1] px-7 py-4 text-sm font-extrabold text-white shadow-[0_0_28px_rgba(14,165,233,0.42)] transition-transform hover:-translate-y-0.5 hover:scale-105"
          >
            <Trophy className="h-4 w-4" /> Get Your Free Trial
          </a>
          <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] text-[#64748B]">
            <span className="flex items-center gap-1.5">
              <Headphones className="h-3 w-3 text-[#6366F1]" /> Instant WhatsApp delivery
            </span>
            <span className="flex items-center gap-1.5">
              <Tv className="h-3 w-3 text-sky-400" /> Works on all devices
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3 text-sky-400" /> 99.9% uptime guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
