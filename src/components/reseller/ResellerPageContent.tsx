"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Headphones,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";

type CreditPlan = {
  id: string;
  credits: number;
  price: number;
  oldPrice?: number;
  popular?: boolean;
  bestValue?: boolean;
};

const creditPlans: CreditPlan[] = [
  {
    id: "100-credits",
    credits: 100,
    price: 500,
  },
  {
    id: "200-credits",
    credits: 200,
    price: 1000,
    popular: true,
  },
  {
    id: "300-credits",
    credits: 300,
    price: 1500,
    bestValue: true,
  },
  {
    id: "400-credits",
    credits: 400,
    price: 2000,
  },
  {
    id: "500-credits",
    credits: 500,
    price: 2500,
  },
];

const planFeatures = [
  "1 Credit = 12 Month Subscription",
  "Unlimited Free Trials Everyday",
  "Customize Groups & Channel Lists",
  "Pay As You Go Balance",
  "Credits Never Expire",
  "24/7 Dedicated Partner Support",
  "Create & Manage Sub-Resellers",
];

const advantages = [
  {
    icon: ShoppingCart,
    title: "COMPATIBLE WITH ALL DEVICES",
    description:
      "Our IPTV service works on all major devices: Smart TVs, Android devices, MAG boxes, Apple TV, Firestick & more.",
  },
  {
    icon: Server,
    title: "HIGH-SPEED 60FPS SERVERS",
    description:
      "Empowered with high-capacity anti-freeze servers to provide your clients with uninterrupted 4K Ultra HD streaming.",
  },
  {
    icon: Headphones,
    title: "EXPERT PARTNER SUPPORT",
    description:
      "Our technical support team is active 24/7 via WhatsApp to assist your business whenever needed.",
  },
  {
    icon: Zap,
    title: "FULL CONTROL PANEL",
    description:
      "Effortlessly manage customer lines, edit bouquet channels, generate free trials, and manage sub-resellers.",
  },
];

const resellerFaqs = [
  {
    question: "DOES THE CONTROL PANEL EXPIRE?",
    answer:
      "No, your reseller panel remains active permanently. Purchased credits have no expiration date and remain in your balance until assigned.",
  },
  {
    question: "CAN I RENEW A SUBSCRIPTION?",
    answer:
      "Yes! You can instantly extend or renew any client line directly from your panel with a single click.",
  },
  {
    question: "CAN I SWITCH DEVICES FOR A CLIENT?",
    answer:
      "Absolutely. You can modify lines, switch device types, or update M3U playlists and Xtream Codes parameters anytime.",
  },
  {
    question: "HOW DO I SELL IPTV SUBSCRIPTIONS?",
    answer:
      "You can sell subscriptions through your website, social media, or local network. You set your own prices and keep 100% of profit margins.",
  },
  {
    question: "DOES YOUR SERVER SUPPORT ALL DEVICES?",
    answer:
      "Yes! Our servers support Smart TVs (Samsung, LG), Android TV, Amazon Firestick, MAG boxes, Formuler, Enigma2, iOS, Windows, Mac, and Apple TV.",
  },
  {
    question: "HOW TO ACTIVATE A MAG BOX?",
    answer:
      "Inside your reseller panel, select 'Add MAG Device', enter the client's MAC address (00:1A:79:XX:XX:XX), and assign their package instantly.",
  },
  {
    question: "HOW TO CREATE A PANEL FOR A SUB-RESELLER?",
    answer:
      "Inside your master panel, navigate to 'Sub-Reseller Management', create a new account, and transfer credit balance from your account.",
  },
];

export default function ResellerPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOrderPanel = (plan?: CreditPlan) => {
    const message = plan
      ? `Hello! I would like to order the BexyTV Reseller Panel with ${plan.credits} Credits for $${plan.price}.`
      : `Hello! I am interested in becoming a BexyTV IPTV Reseller and would like to request panel access.`;
    window.open(
      `https://wa.me/213552069874?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleFreeTrial = () => {
    const message = `Hello! I am interested in testing a BexyTV IPTV Reseller Panel free trial account.`;
    window.open(
      `https://wa.me/213552069874?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#060810] py-16 sm:py-20 lg:py-24 text-[#F8FAFC]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-[#38BDF8]/10 via-[#818CF8]/5 to-transparent blur-3xl opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
        
        {/* HERO SECTION */}
        <header className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#38BDF8]">
            <Sparkles className="h-3.5 w-3.5" />
            IPTV Reseller Partner Program
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight uppercase">
            <span className="block text-white">IPTV Reseller Program</span>
            <span className="mt-2 block bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">Become a Partner Today</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xs sm:text-sm leading-relaxed text-[#A7B0C0]">
            Launch your own profitable IPTV business with BexyTV. Access high-capacity 60 FPS Anti-Freeze servers, dedicated reseller control panels, instant credit delivery, and 24/7 technical support.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handleFreeTrial}
              className="rounded-2xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] px-8 py-3.5 text-xs font-black uppercase tracking-wider text-[#060810] shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              Request Test Panel
            </button>
          </div>
        </header>

        {/* OUR RESELLER PLANS */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight uppercase">
              <span className="block text-white">Our Exclusive</span>
              <span className="mt-1 block bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">IPTV Reseller Credit Packages</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm font-bold text-[#A7B0C0]">
              High-margin credit rates with zero hidden fees
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 items-stretch">
            {creditPlans.map((plan) => (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-3xl bg-[#0D111B] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${
                  plan.popular
                    ? "border-[#38BDF8] shadow-cyan-500/20 z-10"
                    : plan.bestValue
                    ? "border-[#818CF8] shadow-indigo-500/20 z-10"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#818CF8] px-4 py-1 text-[10px] font-black uppercase tracking-wider text-[#060810] shadow-md">
                    Most Popular
                  </span>
                )}
                {plan.bestValue && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#818CF8] to-[#C084FC] px-4 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                    Best Value
                  </span>
                )}

                <div className="text-center">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#38BDF8]">
                    BEXYTV RESELLER
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-white">
                    {plan.credits} Credits
                  </h3>
                </div>

                <div className="my-5 rounded-2xl bg-[#060810] border border-white/10 py-4 text-center">
                  <span className="text-3xl font-black text-[#38BDF8]">
                    ${plan.price}
                  </span>
                </div>

                <ul className="flex-grow space-y-3 border-t border-white/10 pt-4 text-xs text-[#A7B0C0]">
                  {planFeatures.map((feature) => (
                    <li className="flex items-center gap-2" key={feature}>
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#38BDF8]/10 text-[#38BDF8]">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleOrderPanel(plan)}
                  className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] py-3.5 text-xs font-black uppercase tracking-wider text-[#060810] shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                >
                  Order Panel Now
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* ADVANTAGES OF IPTV RESELLER */}
        <div className="mt-28">
          <h2 className="text-center text-3xl sm:text-4xl font-black leading-tight tracking-tight uppercase">
            <span className="block text-white">Advantages of</span>
            <span className="mt-1 block bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">BexyTV Reseller Platform</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center p-6 rounded-3xl border border-white/10 bg-[#0D111B] shadow-xl hover:border-[#38BDF8]/40 transition-colors"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 mb-5">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#A7B0C0]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="mx-auto mt-28 max-w-4xl">
          <h2 className="text-center text-3xl sm:text-4xl font-black leading-tight tracking-tight uppercase">
            <span className="block text-white">Reseller Partner</span>
            <span className="mt-1 block bg-gradient-to-r from-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent">Frequently Asked Questions</span>
          </h2>

          <div className="mt-10 space-y-4">
            {resellerFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#0D111B] shadow-xl transition-colors hover:border-[#38BDF8]/40"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-bold text-white transition-colors"
                  >
                    <span className="text-xs sm:text-sm tracking-wide uppercase font-extrabold flex items-center gap-3">
                      <span className="text-[#38BDF8]">▶</span>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-[#38BDF8]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-[#A7B0C0]" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 bg-[#060810] px-6 py-4 text-xs sm:text-sm text-[#A7B0C0] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => handleOrderPanel()}
              className="rounded-2xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] px-10 py-4 text-xs font-black uppercase tracking-wider text-[#060810] shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              Become a Reseller Now
            </button>
          </div>
        </div>

        {/* TRUST BADGE */}
        <div className="mt-16 flex items-center justify-center gap-2 text-xs font-semibold text-[#A7B0C0]">
          <ShieldCheck className="h-4 w-4 text-[#38BDF8]" />
          <span>Official Master Xtream Codes Reseller Panel — 99.9% Uptime Guarantee</span>
        </div>
      </div>
    </section>
  );
}
