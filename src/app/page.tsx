import HeroSection from "@/components/home/HeroSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import SportsSection from "@/components/home/SportsSection";
import MovieStrips from "@/components/home/MovieStrips";
import BrandMarquee from "@/components/home/BrandMarquee";
import ChannelCategories from "@/components/home/ChannelCategories";
import DeviceSupport from "@/components/home/DeviceSupport";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import LatestArticlesSection from "@/components/home/LatestArticlesSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";
import Link from "next/link";

export const metadata = {
  title: "BexyTV - Premium 4K IPTV Service in USA & Canada | 50,000+ Live Channels",
  description: "Stream 50,000+ live channels and 150,000+ movies in 4K UHD with BexyTV. Instant activation, zero buffering, 60 FPS sports, and multi-device support.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex-col flex min-h-screen bg-[#060810] bg-tech-grid bg-atmosphere text-[#F8FAFC]">
      {/* 1. Hero Section with Original IPTV Interface Mockup */}
      <HeroSection />

      {/* 2. What is BexyTV / About Service */}
      <ComparisonSection />

      {/* 3. Dedicated Live Sports Section (NFL, NBA, UFC, NHL, MLB, MLS) */}
      <SportsSection />

      {/* 4. Cinematic Movies & Channels Experience */}
      <MovieStrips>
        <div className="text-center mt-2 relative z-20">
          <p className="text-xs font-bold tracking-[0.2em] text-[#A7B0C0] uppercase">50,000+ PREMIUM LIVE CHANNELS</p>
        </div>
        
        <BrandMarquee bgClassName="bg-transparent" />
        
        <div className="text-center mt-8 mb-6 relative z-20">
          <p className="text-xs font-bold tracking-[0.2em] text-[#A7B0C0] uppercase">150,000+ LATEST MOVIES & SERIES</p>
        </div>
      </MovieStrips>

      {/* Sports Leagues Marquee */}
      <div className="w-full pb-16 border-t border-white/10 relative z-10 bg-transparent">
        <div className="text-center py-6 relative z-20">
          <p className="text-xs font-bold tracking-[0.2em] text-[#A7B0C0] uppercase">ALL MAJOR SPORTS & LEAGUES LIVE</p>
        </div>
        <BrandMarquee 
          bgClassName="bg-transparent"
          imagesFolder="dawryate" 
          images={[
            "Untitled-design-50.webp",
            "Untitled-design-51.webp",
            "Untitled-design-52.webp",
            "Untitled-design-53.webp",
            "Untitled-design-54.webp",
            "Untitled-design-55.webp",
            "Untitled-design-56.webp",
            "Untitled-design-57.webp",
            "Untitled-design-58.webp"
          ]}
          cardClassName="flex-shrink-0 w-[140px] h-[200px] md:w-[200px] md:h-[300px] relative rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:scale-105 hover:border-[#38BDF8]/50 hover:z-10 transition-all duration-300"
          imageClassName="object-cover"
        />
      </div>

      {/* Channel Quick Bar */}
      <div className="w-full bg-[#0D111B]/60 backdrop-blur-md py-6 px-4 text-center border-y border-white/10 relative z-20">
        <p className="text-center text-sm md:text-base text-[#A7B0C0] max-w-3xl mx-auto">
          Explore the comprehensive <Link prefetch={false} className="font-bold text-[#38BDF8] hover:text-[#818CF8]" href="/channels">BexyTV Channel Catalog</Link> or follow our step-by-step <Link prefetch={false} className="font-bold text-[#38BDF8] hover:text-[#818CF8]" href="/installation">Installation Guide</Link> for instant setup.
        </p>
      </div>

      {/* 5. Pricing Section */}
      <PricingSection />

      {/* 6. Why BexyTV Feature Highlights */}
      <ChannelCategories />

      {/* 7. Wide Device Compatibility */}
      <DeviceSupport />

      {/* Device Logos Marquee */}
      <div className="w-full border-t border-white/10 pt-12 pb-8 relative z-10 bg-transparent">
        <p className="text-center text-xs font-bold tracking-widest text-[#A7B0C0] uppercase mb-8">Supported on all your favorite devices</p>
        <BrandMarquee
          bgClassName="bg-transparent"
          imagesFolder="devices"
          images={[
            "Amazon-Fire-tv-stick-krooz-tv.webp",
            "Apple-TV-krooz-tv.webp",
            "hisense-krooz-tv.webp",
            "iptv-smarter-krooz-tv.webp",
            "LG-smart-krooz-tv.webp",
            "Shield-krooz-tv.webp",
            "Smart-android-tv-krooz-tv.webp",
            "sony-select-krooz-tv.webp",
            "Tv-media-boxs-krooz-tv.webp",
            "Windows-krooz-tv.webp",
            "xbox-live-krooz-tv.webp"
          ]}
          cardClassName="flex-shrink-0 w-[160px] h-[80px] md:w-[220px] md:h-[100px] relative bg-[#0D111B] border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#38BDF8]/50 transition-all duration-300 shadow-md flex items-center justify-center"
          imageClassName="object-contain drop-shadow-sm invert opacity-80 hover:opacity-100"
        />
      </div>

      {/* 8. How It Works (3 Steps) */}
      <HowItWorksSection />

      {/* 9. FAQ Section */}
      <FAQSection />

      {/* 10. Latest Articles & Tutorials */}
      <LatestArticlesSection />

      {/* 11. Final Support CTA */}
      <SupportCtaSection />
    </main>
  );
}
