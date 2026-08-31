import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata = {
  title: "Start Your IPTV Reseller Business – High Margins | BexyTV",
  description: "Launch your profitable IPTV reseller business today. Access our powerful reseller panel, custom credit packages, and 24/7 dedicated support. Explore reseller plans!",
  alternates: {
    canonical: "/reseller",
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4 bg-[#060810] bg-tech-grid bg-atmosphere text-[#F8FAFC]">
      <ResellerPageContent />
    </main>
  );
}
