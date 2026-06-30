"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="meista"
      ref={sectionRef}
      className="relative py-12 lg:py-16 border-t border-[#2a2a2a] bg-[#0d0d0d] overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/taustakuva.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0d0d0d]/70" />
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f0f0f0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#f0f0f0]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col gap-4">
        {/* Main Glass Box */}
        <div
          id="kotisivut-499"
          className={`relative p-6 lg:p-8 rounded-3xl border border-[#2a2a2a]/60 bg-[#1a1a1a]/40 backdrop-blur-xl shadow-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#f0f0f0]/5 via-transparent to-[#f0f0f0]/3 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display tracking-tight text-[#f0f0f0]">
                  Kotisivut alkaen <span className="font-black text-[#f0c040]">49€/kk</span>
                </h2>
              </div>
              <p className="text-base text-[#f0f0f0]/80 font-medium mb-3">
                Enemmän kuin pelkkä &ldquo;nettisivu&rdquo;
              </p>
              <p className="text-sm text-[#a0a0a0] leading-relaxed max-w-2xl">
                Räätälöidyt kotisivut yrityksesi tarpeisiin. Sisältää kaiken tarvitavan ylläpidon ja päivitykset nopeasti WhatsApp:in kautta.
              </p>
              <p className="text-xs text-[#a0a0a0]/70 mt-2">
                Sähköposti +5€/per sähköpostilaatikko esim info@yrityksesi.fi
              </p>
            </div>

            <a
              href="/nettisivut"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#f0f0f0] text-[#0d0d0d] text-sm font-medium rounded-full hover:bg-[#e0e0e0] transition-colors group"
            >
              Lue lisää
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
