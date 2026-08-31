import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTV FAQ & Support – Frequently Asked Questions | BexyTV",
  description: "Have questions about your IPTV subscription? Find detailed answers about device compatibility, payment options, 4K streaming, and account setup at BexyTV.",
  alternates: {
    canonical: "/faq",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
