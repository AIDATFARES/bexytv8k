"use client";

import { useEffect, useRef, useState } from "react";

export default function TopFeatureBar() {
  const stats = [
    { value: 7, label: "In Business", prefix: "", suffix: " Years" },
    { value: 7500, label: "Satisfied customers", prefix: "+", suffix: "" },
    { value: 120000, label: "Films & Series", prefix: "+", suffix: "" },
    { value: 50000, label: "Channels", prefix: "+", suffix: "" },
  ];

  return (
    <section className="bg-[#060810] bg-tech-grid bg-atmosphere relative z-20 w-full border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8 py-10 text-center sm:grid-cols-4 sm:gap-4 sm:py-12">
          {stats.map((stat) => (
            <div key={stat.label} className="transition-all duration-300">
              <AnimatedStat {...stat} />
              <span className="mt-1 block text-sm font-medium text-[#A7B0C0]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const duration = 1200;
    const startedAt = performance.now();
    let frameId = 0;
    const element = ref.current;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const currentCount = Math.round(value * eased);
      element.textContent = `${prefix}${currentCount.toLocaleString()}${suffix}`;
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, prefix, suffix]);

  return <span className="block text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent sm:text-4xl" ref={ref}>{prefix}0{suffix}</span>;
}
