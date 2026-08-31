import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact BexyTV Support – 24/7 Customer Assistance",
  description: "Need help with your IPTV subscription? Contact the BexyTV support team for technical assistance, billing inquiries, and instant troubleshooting.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
