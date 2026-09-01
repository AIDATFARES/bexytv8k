"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, CircleHelp, Clock3, CreditCard, HelpCircle, Mail, MessageCircle, MonitorPlay, Send, Settings2, Sparkles, UserRound } from "lucide-react";

type Category = "About BexyTV" | "Setup & Streaming" | "Plans & Access" | "Payments & Support";

type FAQItem = {
  category: Category;
  question: string;
  answer: React.ReactNode;
};

const categories: { label: Category; icon: typeof CircleHelp }[] = [
  { label: "About BexyTV", icon: CircleHelp },
  { label: "Setup & Streaming", icon: Settings2 },
  { label: "Plans & Access", icon: UserRound },
  { label: "Payments & Support", icon: CreditCard },
];

const faqs: FAQItem[] = [
  {
    category: "About BexyTV",
    question: "1. What is BexyTV?",
    answer: (
      <>
        BexyTV is a premium IPTV service offering 50,000+ live channels, VOD movies, TV series, and sports channels in 60 FPS 4K Ultra HD quality. Check out our{" "}
        <Link href="/channels" className="text-[#38BDF8] font-semibold hover:text-[#818CF8] transition-colors">live TV channels</Link> and{" "}
        <Link href="/pricing" className="text-[#38BDF8] font-semibold hover:text-[#818CF8] transition-colors">IPTV subscription plans</Link>.
      </>
    ),
  },
  {
    category: "About BexyTV",
    question: "2. Is BexyTV authorized?",
    answer: (
      <>
        BexyTV is intended to be used in accordance with applicable laws, local regulations, and our service terms. Please ensure that the content you access and the way you use the service are permitted in your location.
      </>
    ),
  },
  {
    category: "About BexyTV",
    question: "3. What channels and content are included with BexyTV?",
    answer: (
      <>
        BexyTV includes a broad selection of live channels covering sports, news, and entertainment, along with a regularly updated 150,000+ video-on-demand library. Check our <Link href="/channels" className="text-[#38BDF8] font-semibold hover:text-[#818CF8] transition-colors">full channels catalog</Link>.
      </>
    ),
  },
  {
    category: "About BexyTV",
    question: "4. Can I watch live sports and PPV events on BexyTV?",
    answer: (
      <>
        Yes! BexyTV includes full access to live sports and Pay-Per-View events, including Premier League, NFL Sunday Ticket, NBA League Pass, UFC, and Boxing mega-fights in 60 FPS 4K.
      </>
    ),
  },
  {
    category: "About BexyTV",
    question: "5. Which devices can I use?",
    answer: (
      <>
        BexyTV works on Smart TVs (Samsung, LG, Sony), Firestick, Android TV, Apple TV, MAG, Enigma2, iOS, Android, and Windows. Follow our <Link href="/installation" className="text-[#38BDF8] font-semibold hover:text-[#818CF8] transition-colors">installation guides</Link> to get started.
      </>
    ),
  },
  {
    category: "Setup & Streaming",
    question: "1. How do I install BexyTV on my device?",
    answer: (
      <>
        Start by installing a compatible IPTV player on your device (TiviMate, IPTV Smarters, etc.). Enter the BexyTV credentials sent to your WhatsApp and email. View our step-by-step <Link href="/installation" className="text-[#38BDF8] font-semibold hover:text-[#818CF8] transition-colors">installation guides</Link>.
      </>
    ),
  },
  {
    category: "Setup & Streaming",
    question: "2. Can I use BexyTV on a Smart TV?",
    answer: (
      <>
        Yes! BexyTV works seamlessly on Samsung (Tizen), LG (webOS), Android TV, and Fire TV using players like Smart IPTV, IPTV Smarters Pro, or TiviMate.
      </>
    ),
  },
  {
    category: "Setup & Streaming",
    question: "3. What internet speed do I need for smooth BexyTV streaming?",
    answer: (
      <>
        We recommend at least 15 Mbps for 1080p HD and 30 Mbps for 60 FPS 4K Ultra HD. An Ethernet connection or 5 GHz Wi-Fi provides the optimal buffer-free experience.
      </>
    ),
  },
  {
    category: "Setup & Streaming",
    question: "4. Why is BexyTV buffering or freezing?",
    answer: (
      <>
        Restart your IPTV app and router. Thanks to our Anti-Freeze Tech v2, buffering is minimal. If issues persist, <Link href="/contact" className="text-[#38BDF8] font-semibold hover:text-[#818CF8] transition-colors">contact support</Link> for 24/7 technical help.
      </>
    ),
  },
  {
    category: "Setup & Streaming",
    question: "5. Do I need a VPN to use BexyTV?",
    answer: (
      <>
        A VPN is not mandatory, but if your ISP throttles streaming traffic during major sports events, using a VPN ensures 100% unrestricted 4K streaming.
      </>
    ),
  },
  {
    category: "Plans & Access",
    question: "1. Are there any hidden fees or contracts with BexyTV?",
    answer: (
      <>
        No contracts and zero hidden fees. Choose an <Link href="/pricing" className="text-[#38BDF8] font-semibold hover:text-[#818CF8] transition-colors">IPTV subscription plan</Link> with transparent pricing and instant credential delivery.
      </>
    ),
  },
  {
    category: "Plans & Access",
    question: "2. Can I use BexyTV on multiple devices?",
    answer: (
      <>
        Yes! We offer multi-device subscription options (1, 2, or 3 simultaneous connections). Select your preferred connection count on our <Link href="/pricing" className="text-[#38BDF8] font-semibold hover:text-[#818CF8] transition-colors">pricing page</Link>.
      </>
    ),
  },
  {
    category: "Plans & Access",
    question: "3. What are BexyTV M3U and Xtream Codes details?",
    answer: (
      <>
        Your welcome message contains both M3U playlist URLs and Xtream Codes API login credentials for instant activation on any player.
      </>
    ),
  },
  {
    category: "Payments & Support",
    question: "1. Does BexyTV offer a free trial?",
    answer: (
      <>
        Yes! We offer a 24-hour test pass. <a href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20BexyTV%20IPTV." target="_blank" rel="noreferrer" className="text-[#38BDF8] font-semibold hover:text-[#818CF8] transition-colors">Click here to request a free trial via WhatsApp</a>.
      </>
    ),
  },
  {
    category: "Payments & Support",
    question: "2. Which payment methods does BexyTV accept?",
    answer: (
      <>
        We accept PayPal, Credit/Debit Cards, Crypto (Bitcoin/USDT), and Instant Bank Transfers. For custom payment methods, reach out to our <Link href="/contact" className="text-[#38BDF8] font-semibold hover:text-[#818CF8] transition-colors">support team</Link>.
      </>
    ),
  },
  {
    category: "Payments & Support",
    question: "3. How long does activation take after I purchase a plan?",
    answer: (
      <>
        Activation is automated &amp; instant. Your Xtream credentials and M3U playlist link are delivered to your WhatsApp and email immediately after checkout.
      </>
    ),
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<Category>("About BexyTV");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleFaqs = faqs.filter((faq) => faq.category === activeCategory);

  function selectCategory(category: Category) {
    setActiveCategory(category);
    setActiveIndex(null);
  }

  function sendSupportMessage(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "General support").trim();
    const message = String(formData.get("message") || "").trim();
    const text = encodeURIComponent(`Hello BexyTV support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="flex-grow px-4 sm:px-6 pb-20 pt-12 md:pt-16 bg-[#060810] bg-tech-grid bg-atmosphere text-[#F8FAFC]">
      <div className="mx-auto max-w-[1140px]">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#38BDF8]">
            <Sparkles className="w-3.5 h-3.5" /> BEXYTV IPTV HELP CENTER
          </span>
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            BexyTV IPTV Frequently Asked Questions<br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">(FAQ &amp; Support)</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-[#A7B0C0]">
            Find quick answers to common questions about BexyTV IPTV service, including{" "}
            <Link href="/pricing" className="text-[#38BDF8] font-semibold hover:text-[#818CF8] transition-colors">IPTV subscription plans</Link>,{" "}
            <Link href="/installation" className="text-[#38BDF8] font-semibold hover:text-[#818CF8] transition-colors">device setup tutorials</Link>, 60 FPS 4K streaming performance, and instant credential delivery.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10">
          <aside aria-label="FAQ categories" className="md:sticky md:top-28 md:self-start">
            <div className="rounded-3xl border border-white/10 bg-[#0D111B] p-3 shadow-2xl">
              <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
                {categories.map(({ label, icon: Icon }) => {
                  const isSelected = activeCategory === label;
                  return (
                    <button
                      aria-pressed={isSelected}
                      className={`flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3.5 text-left text-xs font-extrabold uppercase tracking-wider transition-all md:w-full ${
                        isSelected
                          ? "bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#060810] shadow-lg shadow-cyan-500/25"
                          : "text-[#A7B0C0] hover:bg-white/5 hover:text-white"
                      }`}
                      key={label}
                      onClick={() => selectCategory(label)}
                      type="button"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <section aria-live="polite" className="space-y-4">
            <div className="mb-6 flex items-center gap-3">
              <MonitorPlay className="h-5 w-5 text-[#38BDF8]" />
              <h2 className="text-xl font-black text-white uppercase">{activeCategory}</h2>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {visibleFaqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                const contentId = `faq-${activeCategory.replaceAll(" ", "-").toLowerCase()}-${index}`;

                return (
                  <article className="flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-[#0D111B] shadow-xl hover:border-[#38BDF8]/40 transition-colors" key={faq.question}>
                    {/* Header Banner */}
                    <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-[#38BDF8] shrink-0" />
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <button
                        aria-controls={contentId}
                        aria-expanded={isOpen}
                        className="text-[#A7B0C0] hover:text-white transition-colors"
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        type="button"
                      >
                        <ChevronDown className={`h-5 w-5 shrink-0 text-[#38BDF8] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>

                    {/* Answer Content */}
                    <div className="p-6 text-xs sm:text-sm text-[#A7B0C0] leading-relaxed flex-1 bg-[#0D111B]" id={contentId}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        <section className="mt-24 border-t border-white/10 pt-16 sm:pt-20">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-white uppercase">Get in Touch with Our 24/7 Team</h2>
            <p className="mt-3 text-xs leading-6 text-[#A7B0C0]">We&apos;re here to help you get the best 4K IPTV experience. Send us a message and we&apos;ll reply instantly.</p>
          </header>
          
          <div className="mt-10 grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-10">
            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <a className="flex min-h-40 flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0D111B] p-6 text-center transition-all hover:border-[#38BDF8]/50 shadow-xl" href="mailto:support@bexytv8k.shop">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20"><Mail className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-white">Email Us</span>
                <span className="mt-2 block text-xs text-[#A7B0C0]">For general inquiries and setup.</span>
                <span className="mt-3 block text-xs font-semibold text-[#38BDF8]">support@bexytv8k.shop</span>
              </a>
              
              <a className="flex min-h-40 flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0D111B] p-6 text-center transition-all hover:border-[#38BDF8]/50 shadow-xl" href="https://wa.me/213552069874?text=Hello%20BexyTV%20IPTV%20support%2C%20I%20need%20help." rel="noreferrer" target="_blank">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20"><MessageCircle className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-white">WhatsApp 24/7</span>
                <span className="mt-2 block text-xs text-[#A7B0C0]">Fastest way to get instant activation.</span>
                <span className="mt-3 block text-xs font-extrabold text-[#38BDF8]">Start WhatsApp Chat →</span>
              </a>
              
              <div className="flex min-h-40 flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0D111B] p-6 text-center shadow-xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/20"><Clock3 className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-white">Response Time</span>
                <span className="mt-2 block text-xs text-[#A7B0C0]">Under <strong className="text-white">5 minutes</strong> via WhatsApp 24/7.</span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0D111B] p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-black text-white uppercase">Send Us a Direct Message</h3>
              <form action={sendSupportMessage} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-xs font-bold text-[#A7B0C0] uppercase tracking-wider">Your Name
                    <input className="mt-2 w-full rounded-2xl border border-white/10 bg-[#060810] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-[#64748B] focus:border-[#38BDF8]" name="name" placeholder="John Doe" required />
                  </label>
                  <label className="block text-xs font-bold text-[#A7B0C0] uppercase tracking-wider">Email Address
                    <input className="mt-2 w-full rounded-2xl border border-white/10 bg-[#060810] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-[#64748B] focus:border-[#38BDF8]" name="email" placeholder="john@example.com" required type="email" />
                  </label>
                </div>
                <label className="block text-xs font-bold text-[#A7B0C0] uppercase tracking-wider">Subject
                  <input className="mt-2 w-full rounded-2xl border border-white/10 bg-[#060810] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-[#64748B] focus:border-[#38BDF8]" name="subject" placeholder="How can we help you?" />
                </label>
                <label className="block text-xs font-bold text-[#A7B0C0] uppercase tracking-wider">Message
                  <textarea className="mt-2 min-h-32 w-full resize-y rounded-2xl border border-white/10 bg-[#060810] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-[#64748B] focus:border-[#38BDF8]" name="message" placeholder="Describe your inquiry..." required />
                </label>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] py-4 text-xs font-black text-[#060810] uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01]" type="submit">
                  <Send className="h-4 w-4" />Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
