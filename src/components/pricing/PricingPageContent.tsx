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
  { icon: MonitorSmartphone, title: "200,000+ VODs", text: "Enjoy +120,000 Films & Series and a massive, regularly refreshed video-on-demand library." },
  { icon: Zap, title: "Anti-freeze Technology", text: "Optimized streaming technology helps deliver a smoother experience at busy times." },
  { icon: Headphones, title: "24/7 Support", text: "The BexyTV support team is here to help with setup and streaming questions." },
  { icon: Sparkles, title: "Fast Setup", text: "Your BexyTV details are sent after payment so you can start setting up quickly." },
  { icon: CreditCard, title: "TV Guide (EPG)", text: "Browse your channel schedule more easily with an electronic programme guide." },
];

const billingQuestions = [
  { question: "1. Which payment methods can I use?", answer: <>Available payment options are shown when you place your order. <Link className="font-semibold text-[#6366F1] hover:text-[#6366F1] transition-colors" href="/contact">Contact BexyTV support</Link> if you need help before purchasing.</> },
  { question: "2. Is my payment protected?", answer: "Please use the official BexyTV payment process and never share payment details through an unverified link or message." },
  { question: "3. Will my subscription renew automatically?", answer: <>Renewal details are provided when you order. If you have any questions about your subscription period or renewal, <Link className="font-semibold text-[#6366F1] hover:text-[#6366F1] transition-colors" href="/contact">contact support</Link> before your plan expires.</> },
  { question: "4. Can I change my plan or number of connections?", answer: <>Yes. <Link className="font-semibold text-[#6366F1] hover:text-[#6366F1] transition-colors" href="/contact">Contact the support team</Link> with your order email and the plan or connection change you need, and they will advise on the available options.</> },
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
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex rounded-full border border-[#6366F1]/30 bg-[#6366F1]/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#6366F1]">BexyTV</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block text-[#0F172A] uppercase">Premium IPTV Subscription</span>
            <span className="mt-1 block text-[#6366F1] uppercase">Plans &amp; Pricing</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#64748B] sm:text-base">Choose the BexyTV plan that fits you, with secure checkout and helpful 24/7 support.</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#64748B]">Need help getting started? Visit our <Link className="font-semibold text-[#6366F1] hover:text-[#6366F1]" href="/installation">installation guide</Link> or browse the <Link className="font-semibold text-[#6366F1] hover:text-[#6366F1]" href="/channels">channel list</Link> before you order.</p>
        </header>

        {/* Device Selector */}
        <div className="mx-auto mb-10 max-w-2xl" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-[#64748B]">Choose your connections</p>
          <div className="grid grid-cols-3 rounded-2xl border border-[#6366F1]/30 bg-white p-1.5 shadow-sm">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  aria-checked={selected}
                  className={`rounded-xl px-3 py-3 text-sm font-bold transition-all ${selected ? "bg-[#D946EF] text-[#0F172A] shadow-lg shadow-sky-500/25" : "text-[#64748B] hover:text-[#0F172A] hover:bg-sky-50"}`}
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 items-start pt-4">
          {plans.map((plan) => (
            <article 
              key={plan.id}
              className={`relative flex flex-col rounded-2xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1 border-2 ${
                plan.popular 
                  ? "border-[#6366F1] shadow-[0_15px_40px_-10px_rgba(14,165,233,0.25)] md:-mt-4" 
                  : "border-sky-300 shadow-sm hover:shadow-md hover:border-[#6366F1]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-b-xl rounded-t-sm bg-gradient-to-r from-[#D946EF] to-slate-800 px-5 py-1.5 shadow-md whitespace-nowrap">
                  <span className="text-[10px] font-extrabold uppercase tracking-wide text-[#0F172A]">Best Value - Most Popular</span>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-[#0F172A]">{plan.name}</h3>
              <p className="mt-2 text-sm text-[#64748B] leading-relaxed min-h-[40px]">{plan.subtitle}</p>
              
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-black tracking-tighter text-[#6366F1]">${priceFor(plan)}</span>
                <span className="ml-1 text-xs font-semibold text-[#64748B]">{plan.duration}</span>
              </div>
              
              <div className="min-h-[24px] mt-1 flex items-center gap-2">
                {plan.saving && (
                  <p className="text-xs font-bold text-blue-500">{plan.saving}</p>
                )}
                {plan.oldPrice && (
                   <p className="text-xs font-semibold text-[#64748B] line-through">${(plan.oldPrice * devices).toFixed(2)}</p>
                )}
              </div>

              <ul className="mt-6 flex-grow space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <CheckCircle2 className={`h-5 w-5 shrink-0 ${plan.popular ? "text-[#6366F1]" : "text-blue-500"}`} strokeWidth={2.5} />
                    ) : (
                      <X className="h-5 w-5 shrink-0 text-[#64748B]" strokeWidth={2.5} />
                    )}
                    <span className={`text-sm font-medium ${feature.included ? "text-stone-700" : "text-[#64748B]"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                type="button"
                onClick={() => handleOrder(plan)}
                className={`mt-8 w-full rounded-xl py-4 text-sm font-bold text-[#0F172A] transition-all duration-300 ${
                  plan.popular 
                    ? "bg-[#D946EF] shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:bg-[#0C8CE9] hover:-translate-y-0.5" 
                    : "bg-[#0F172A] hover:bg-[#D946EF] text-white hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {plan.buttonText}
              </button>
            </article>
          ))}
        </div>

        {/* Bottom Security Banner */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-white p-6 shadow-sm border border-stone-100 border-l-4 border-l-orange-500">
            <div>
              <p className="text-lg font-bold text-[#0F172A]">Secure Payments & Instant Access</p>
              <p className="mt-1 text-sm text-[#64748B] font-medium">Pay safely using Crypto, Credit Card, or PayPal. Your details are encrypted instantly.</p>
            </div>
            <div className="flex shrink-0 items-center gap-4 text-[#64748B]">
              <CreditCard className="h-7 w-7" strokeWidth={1.5} />
              <Bitcoin className="h-7 w-7" strokeWidth={1.5} />
              <Wallet className="h-7 w-7" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold text-[#0F172A] uppercase">Every plan includes</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map(({ icon: Icon, title, text }) => (
              <article className="rounded-2xl border border-stone-100 bg-white p-6 text-center shadow-sm" key={title}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-[#6366F1]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#0F172A]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-3xl font-black text-[#0F172A] uppercase">Billing &amp; Subscription FAQ</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {billingQuestions.map((item) => (
              <div className="flex flex-col rounded-xl overflow-hidden border border-stone-200 bg-white shadow-sm hover:border-sky-200 transition-colors" key={item.question}>
                <div className="bg-stone-50 border-b border-stone-100 px-5 py-4 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#6366F1] shrink-0 mt-0.5" />
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] leading-snug">
                    {item.question}
                  </h3>
                </div>
                <div className="p-5 text-sm text-[#64748B] leading-relaxed bg-white flex-1">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-[#64748B]">
          <ShieldCheck className="h-5 w-5 text-[#6366F1]" />
          <span className="font-semibold text-[#0F172A]">Secure ordering</span> and friendly BexyTV support.
        </div>
      </div>
    </section>
  );
}
