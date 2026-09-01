"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, X, CreditCard, Headphones, HelpCircle, MonitorSmartphone, ShieldCheck, Sparkles, Tv, Zap, Bitcoin, Wallet } from "lucide-react";

type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  duration: string;
  saving?: string;
  popular?: boolean;
  features: PlanFeature[];
  buttonText: string;
};

const plans: Plan[] = [
  {
    id: "3-months",
    name: "BexyTV Basic",
    subtitle: "Perfect for trying out our premium service.",
    price: 35,
    duration: "/ 3 Months",
    saving: "Save 22%",
    features: [
      { text: "HD/4K Streaming Quality", included: true },
      { text: "Full EPG Support", included: true },
      { text: "Antifreeze Technology", included: true },
      { text: "24/7 Standard Support", included: true },
      { text: "Multi-device connection", included: false },
    ],
    buttonText: "Select Basic",
  },
  {
    id: "12-months",
    name: "BexyTV Ultimate",
    subtitle: "The ultimate entertainment experience for a full year.",
    price: 69.99,
    oldPrice: 80,
    duration: "/ 12 Months",
    saving: "Save 61%",
    popular: true,
    features: [
      { text: "Premium HD/4K/8K Quality", included: true },
      { text: "Advanced EPG & Catchup", included: true },
      { text: "Premium Antifreeze Tech v2", included: true },
      { text: "24/7 Priority VIP Support", included: true },
      { text: "Up to 3 simultaneous devices", included: true },
    ],
    buttonText: "Get Ultimate Pass",
  },
  {
    id: "6-months",
    name: "BexyTV Pro",
    subtitle: "A solid choice for half a year of uninterrupted joy.",
    price: 49.99,
    duration: "/ 6 Months",
    saving: "Save 44%",
    features: [
      { text: "HD/4K Streaming Quality", included: true },
      { text: "Full EPG Support", included: true },
      { text: "Antifreeze Technology", included: true },
      { text: "24/7 Priority Support", included: true },
      { text: "Multi-device connection", included: false },
    ],
    buttonText: "Select Pro",
  },
];

const includedFeatures = [
  { icon: Tv, title: "+50,000 Channels", text: "Explore live channels from around the world, including sports, news and entertainment." },
  { icon: MonitorSmartphone, title: "200,000+ VODs", text: "Enjoy +150,000 Films & Series and a massive, regularly refreshed video-on-demand library." },
  { icon: Zap, title: "Anti-freeze Technology", text: "Optimized 60 FPS streaming technology helps deliver zero buffering even at peak times." },
  { icon: Headphones, title: "24/7 Support", text: "The BexyTV support team is here to help with setup and streaming questions anytime." },
  { icon: Sparkles, title: "Instant Setup", text: "Your BexyTV M3U playlist & Xtream credentials are delivered immediately upon checkout." },
  { icon: CreditCard, title: "TV Guide (EPG)", text: "Browse your channel schedule effortlessly with a full interactive electronic program guide." },
];

const billingQuestions = [
  { question: "1. Which payment methods can I use?", answer: <>Available payment options include PayPal, Credit/Debit Card, and Instant Crypto. <Link className="font-semibold text-[#38BDF8] hover:text-[#818CF8] transition-colors" href="/contact">Contact BexyTV support</Link> if you need assistance before purchasing.</> },
  { question: "2. Is my payment protected?", answer: "All transactions are fully encrypted with 256-bit SSL protection. We never store raw payment details or auto-charge without consent." },
  { question: "3. Will my subscription renew automatically?", answer: <>BexyTV plans do NOT auto-bill. You control when and if you wish to extend your subscription. <Link className="font-semibold text-[#38BDF8] hover:text-[#818CF8] transition-colors" href="/contact">Contact support</Link> anytime to extend.</> },
  { question: "4. Can I change my plan or number of connections?", answer: <>Yes! <Link className="font-semibold text-[#38BDF8] hover:text-[#818CF8] transition-colors" href="/contact">Contact our 24/7 support team</Link> with your order email to upgrade your plan or add extra simultaneous device connections.</> },
];

export default function PricingPageContent() {
  const [devices, setDevices] = useState(1);
  const priceFor = (plan: Plan) => (plan.price * devices).toFixed(2);

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the ${plan.name} plan (${plan.duration}) with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden bg-[#060810] bg-tech-grid bg-atmosphere py-16 sm:py-20 lg:py-24 text-[#F8FAFC]">
      {/* Glow Backdrops */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#38BDF8]/10 via-[#818CF8]/5 to-transparent blur-3xl opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
        <header className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#38BDF8]">
            <Sparkles className="w-3.5 h-3.5" /> BEXYTV IPTV PLANS
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block text-white uppercase">Premium IPTV Subscription</span>
            <span className="mt-2 block bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent uppercase">Plans &amp; Pricing</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#A7B0C0] sm:text-base">Choose the BexyTV IPTV subscription plan that fits your entertainment needs. Enjoy 50,000+ live channels, 150,000+ VOD movies, 60 FPS sports, and instant activation.</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#A7B0C0]">Need setup help? Check our <Link className="font-semibold text-[#38BDF8] hover:text-[#818CF8]" href="/installation">IPTV installation guide</Link> or explore our <Link className="font-semibold text-[#38BDF8] hover:text-[#818CF8]" href="/channels">IPTV channel catalog</Link> before placing your order.</p>
        </header>

        {/* Device Selector */}
        <div className="mx-auto mb-12 max-w-xl" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-[#A7B0C0]">Choose Your Simultaneous Connections</p>
          <div className="grid grid-cols-3 rounded-2xl border border-white/10 bg-[#0D111B] p-1.5 shadow-2xl">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  aria-checked={selected}
                  className={`rounded-xl px-3 py-3 text-sm font-bold transition-all ${selected ? "bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#060810] shadow-lg shadow-cyan-500/25" : "text-[#A7B0C0] hover:text-white hover:bg-white/5"}`}
                  key={count}
                  onClick={() => setDevices(count)}
                  role="radio"
                  type="button"
                >
                  {count} Device{count > 1 ? "s" : ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 items-stretch pt-4">
          {plans.map((plan) => (
            <article 
              key={plan.id}
              className={`relative flex flex-col rounded-3xl bg-[#0D111B] p-8 transition-all duration-300 hover:-translate-y-1.5 border ${
                plan.popular 
                  ? "border-[#38BDF8] shadow-[0_0_35px_rgba(56,189,248,0.2)] md:-mt-4 bg-gradient-to-b from-[#0D111B] via-[#111726] to-[#0D111B]" 
                  : "border-white/10 hover:border-[#38BDF8]/50 shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full bg-gradient-to-r from-[#38BDF8] to-[#818CF8] px-5 py-1.5 shadow-lg shadow-cyan-500/30 whitespace-nowrap">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#060810]">MOST POPULAR — BEST VALUE</span>
                </div>
              )}
              
              <h3 className="text-2xl font-black text-white">{plan.name}</h3>
              <p className="mt-2 text-xs text-[#A7B0C0] leading-relaxed min-h-[36px]">{plan.subtitle}</p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-black tracking-tight text-white">${priceFor(plan)}</span>
                <span className="ml-2 text-xs font-bold text-[#A7B0C0] uppercase tracking-wider">{plan.duration}</span>
              </div>
              
              <div className="min-h-[24px] mt-2 flex items-center gap-2">
                {plan.saving && (
                  <span className="text-xs font-extrabold text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-0.5 rounded-full border border-[#38BDF8]/20">{plan.saving}</span>
                )}
                {plan.oldPrice && (
                   <span className="text-xs font-semibold text-[#64748B] line-through">${(plan.oldPrice * devices).toFixed(2)}</span>
                )}
              </div>

              <div className="my-6 border-t border-white/10" />

              <ul className="flex-grow space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#38BDF8]" strokeWidth={2.5} />
                    ) : (
                      <X className="h-5 w-5 shrink-0 text-[#64748B]" strokeWidth={2.5} />
                    )}
                    <span className={`text-sm font-medium ${feature.included ? "text-slate-200" : "text-[#64748B] line-through"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                type="button"
                onClick={() => handleOrder(plan)}
                className={`mt-8 w-full rounded-2xl py-4 text-sm font-black transition-all duration-300 ${
                  plan.popular 
                    ? "bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#060810] shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02]" 
                    : "bg-white/10 hover:bg-gradient-to-r hover:from-[#38BDF8] hover:to-[#818CF8] text-white hover:text-[#060810] hover:scale-[1.02]"
                }`}
              >
                {plan.buttonText}
              </button>
            </article>
          ))}
        </div>

        {/* Bottom Security Banner */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-[#0D111B] p-6 sm:p-8 shadow-2xl border border-white/10 border-l-4 border-l-[#38BDF8]">
            <div>
              <p className="text-lg font-bold text-white">Instant Credential Delivery & 256-Bit SSL Encryption</p>
              <p className="mt-1 text-xs sm:text-sm text-[#A7B0C0]">Pay safely via PayPal, Credit Card, or Crypto. Your order setup details arrive instantly via WhatsApp &amp; Email.</p>
            </div>
            <div className="flex shrink-0 items-center gap-4 text-[#38BDF8]">
              <CreditCard className="h-7 w-7" strokeWidth={1.5} />
              <Bitcoin className="h-7 w-7" strokeWidth={1.5} />
              <Wallet className="h-7 w-7" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-center text-3xl font-black text-white uppercase tracking-tight">Every Plan Includes</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map(({ icon: Icon, title, text }) => (
              <article className="rounded-3xl border border-white/10 bg-[#0D111B] p-6 text-center shadow-xl hover:border-[#38BDF8]/40 transition-all duration-300" key={title}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-[#A7B0C0]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-3xl font-black text-white uppercase tracking-tight">Billing &amp; Subscription FAQ</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {billingQuestions.map((item) => (
              <div className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0D111B] shadow-xl hover:border-[#38BDF8]/40 transition-colors" key={item.question}>
                <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#38BDF8] shrink-0" />
                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div className="p-6 text-xs text-[#A7B0C0] leading-relaxed flex-1">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 flex items-center justify-center gap-2 text-xs text-[#A7B0C0]">
          <ShieldCheck className="h-5 w-5 text-[#38BDF8]" />
          <span className="font-semibold text-white">256-bit encrypted checkout</span> with instant BexyTV WhatsApp setup.
        </div>
      </div>
    </section>
  );
}
