"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, User, Play } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Channels List", href: "/channels" },
    { name: "Contact Support", href: "/contact" },
    { name: "Reseller", href: "/reseller" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 flex flex-col ${
        scrolled
          ? "bg-[#060810]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50"
          : "bg-[#060810]/85 backdrop-blur-md border-b border-white/5"
      }`}
    >
      {/* Top Promotional Announcement */}
      <div className="w-full bg-gradient-to-r from-blue-900/60 via-purple-900/50 to-cyan-900/60 border-b border-white/10 py-1.5 overflow-hidden flex items-center">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-2 px-8 text-xs font-medium text-[#A7B0C0] tracking-wide whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8] animate-pulse" />
              <span>Limited Offer: Get <strong className="text-white">2 Months FREE</strong> on 12-Month 4K IPTV Plans</span>
              <a 
                href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20bexytv%20IPTV." 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1 ml-2 bg-[#38BDF8] text-[#061018] px-2.5 py-0.5 rounded-full text-[11px] font-bold hover:bg-[#818CF8] hover:text-white transition-colors"
              >
                Claim Trial
              </a>
            </span>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between relative">
        
        {/* LOGO */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center shrink-0 z-20">
          <BrandLogo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex relative z-10 items-center gap-7 px-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={link.href === "/" ? handleLogoClick : undefined}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-[#A7B0C0] hover:text-[#60A5FA]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 z-20">
          <Link
            href="/pricing"
            className="btn-primary text-sm py-2.5 px-6"
          >
            <Play className="w-4 h-4 fill-current" />
            Get Started
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors z-20"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080B14] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 font-medium text-[#A7B0C0]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#60A5FA] py-1 text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center py-3 justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
