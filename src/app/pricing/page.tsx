import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "IPTV Subscription Plans & Deals 2026 – Instant Access | BexyTV",
  description: "Choose your 4K IPTV plan with BexyTV. Transparent pricing, instant credential delivery, multi-device access & 24/7 support. Select your plan now!",
  alternates: {
    canonical: "/pricing",
  },
};


export default function PricingPage() {
  return (
    <main className="flex-grow pt-4 bg-[#060810] bg-tech-grid bg-atmosphere text-[#F8FAFC]">
      <PricingPageContent />
    </main>
  );
}
