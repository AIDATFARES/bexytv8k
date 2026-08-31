import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "IPTV Subscription Plans & Pricing – Instant Access | BexyTV",
  description: "Choose your premium IPTV subscription plan with BexyTV. Enjoy flexible 4K streaming packages, instant activation, and access to 50,000+ channels. View plans now!",
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
