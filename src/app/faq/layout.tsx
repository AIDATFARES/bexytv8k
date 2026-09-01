import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTV FAQ & Help Center – Free Trial & Setup Help | BexyTV",
  description: "Got questions? Get instant answers regarding 24h free trials, payment methods, device setup, M3U playlists & Anti-Freeze streaming tech at BexyTV.",
  alternates: {
    canonical: "/faq",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
