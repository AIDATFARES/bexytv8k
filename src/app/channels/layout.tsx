import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Premium IPTV Channel List – Live Sports & VOD | BexyTV",
  description: "Explore our massive IPTV channel list featuring 50,000+ live global networks, premium sports, and 120,000+ VODs. Discover unlimited 4K entertainment with BexyTV.",
  alternates: {
    canonical: "/channels",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
