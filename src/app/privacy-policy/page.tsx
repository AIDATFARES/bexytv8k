import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | BexyTV",
  description: "Read the official BexyTV privacy policy. Learn how we securely collect, use, and protect your personal information while you enjoy our 4K IPTV services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    title: "1. Data We Collect",
    content: [
      <>We collect personal data that you voluntarily provide when you subscribe to our IPTV service, request information about our products or services, or <Link className="font-bold text-[#38BDF8] hover:text-[#818CF8] transition-colors" href="/contact">contact us</Link>. The personal data we collect may include the following:</>,
    ],
    items: [
      "Contact information: Your email address, which we use for account creation and communication.",
      "Payment data: Information required to process a purchase, such as your payment method. Payment details are processed and stored securely by our payment processor.",
      "Device and connection information: When you access our service, we may automatically collect your IP address and device details, including device type and operating system, to ensure optimal streaming performance.",
    ],
  },
  {
    title: "2. How We Use Your Data",
    content: ["We use the information we collect to:"],
    items: [
      "Provide and manage your account, including keeping your subscription active.",
      "Process transactions and bill you for the services you purchase.",
      "Send administrative information, including account notices, service updates, and policy changes.",
      "Protect our services by helping prevent unauthorized access, fraud, and security threats.",
    ],
  },
  {
    title: "3. Legal Bases for Processing",
    content: ["We process your personal information using one or more of the following legal bases:"],
    items: [
      "Consent: You have given us clear permission to use your personal information for a specific purpose.",
      "Legitimate interests: Processing is necessary for legitimate business purposes, such as delivering our services and preventing fraudulent activity.",
      "Performance of a contract: Processing is necessary to provide the services covered by our agreement with you.",
    ],
  },
  {
    title: "4. Data Retention",
    content: ["We retain personal information only for as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required or permitted by law for tax, accounting, or other legal obligations."],
  },
  {
    title: "5. Cookies & Tracking Technologies",
    content: ["We may use cookies and similar technologies to collect or store information. These are primarily functional cookies that are essential for the website and client area to operate effectively."],
  },
  {
    title: "6. Third-Party Services",
    content: ["We may share data with third-party vendors, service providers, or agents that perform services for us or on our behalf and need the information to carry out their duties."],
  },
  {
    title: "7. Data Security",
    content: ["We use appropriate technical and organizational security measures to protect the confidentiality of the personal information we process."],
  },
  {
    title: "8. Your Data Protection Rights",
    content: ["Subject to applicable law, you may have the right to:"],
    items: [
      "Access and request copies of your personal information.",
      "Request correction of inaccurate or incomplete information.",
      "Request erasure of your personal information in certain circumstances.",
      "Opt out of marketing and promotional communications at any time.",
    ],
    after: <>To exercise any of these rights, please <Link className="font-bold text-[#38BDF8] hover:text-[#818CF8] transition-colors" href="/contact">contact our support team</Link>.</>,
  },
  {
    title: "9. Children's Privacy",
    content: ["Our services are not intended for anyone under the age of 18. We do not knowingly collect personal information from children under 18."],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#060810] bg-tech-grid bg-atmosphere text-[#F8FAFC] px-5 pb-20 pt-16 sm:px-8 relative z-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#38BDF8]/10 via-[#818CF8]/5 to-transparent blur-3xl opacity-50" />

      <article className="mx-auto max-w-4xl relative z-10">
        <header className="border-b border-white/10 pb-10 text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#38BDF8] mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Legal Information
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight uppercase">
            <span className="block text-white">Privacy &amp; Data Protection</span>
            <span className="mt-2 block bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">Official Policy</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#A7B0C0]">Last updated: September 14, 2025</p>
        </header>

        <div className="mt-10 space-y-10 text-xs sm:text-sm leading-relaxed text-[#A7B0C0]">
          <p>Welcome to BexyTV. We are committed to protecting your personal information and respecting your privacy. If you have questions or concerns about this policy or our data practices, please <Link className="font-bold text-[#38BDF8] hover:text-[#818CF8] transition-colors" href="/contact">contact our support team</Link>.</p>
          {sections.map((section) => (
            <section key={section.title} className="bg-[#0D111B] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">{section.title}</h2>
              {section.content.map((paragraph, index) => <p className="mt-3" key={index}>{paragraph}</p>)}
              {section.items && <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#38BDF8]">{section.items.map((item, index) => <li key={index}>{item}</li>)}</ul>}
              {section.after && <p className="mt-3">{section.after}</p>}
            </section>
          ))}
          <section className="bg-[#0D111B] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">10. Contact Us</h2>
            <p className="mt-3">If you would like to discuss this policy or our handling of your personal information, please contact our <Link className="font-bold text-[#38BDF8] hover:text-[#818CF8] transition-colors" href="/contact">support team</Link>.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
