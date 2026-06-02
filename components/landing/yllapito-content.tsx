"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { CtaSection } from "@/components/landing/cta-section";
import { MaintenanceSection } from "@/components/landing/maintenance-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { AboutSectionYllapito } from "@/components/landing/about-section-yllapito";



export function YllapitoContent() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0d0d0d]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/taustakuva.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0d0d0d]/75" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-[1]">
          {[...Array(8)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute h-px bg-[#f0f0f0]/10"
              style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-px bg-[#f0f0f0]/10"
              style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
          {/* Eyebrow */}
          <div
            className={`mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0]">
              <span className="w-8 h-px bg-[#f0f0f0]/30" />
              Täysi ylläpitopalvelu – kaikki samasta
            </span>
          </div>

          {/* Headline */}
          <div className="mb-12">
            <div
              className={`text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tight text-[#f0f0f0] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">Jätä digitaalinen</span>
              <span className="block relative">
                huoli minulle
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#f0f0f0]/10" />
              </span>
            </div>
          </div>

          {/* Description + CTAs */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mt-8">
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xl lg:text-2xl text-[#a0a0a0] leading-relaxed max-w-xl mb-6">
                Täysi ylläpitopalvelu tarkoittaa, että sinun ei tarvitse huolehtia
                mistään teknisestä. Domain, hosting, tietoturva, päivitykset jne...
                Kaikki samasta helposti ja edullisesti!
              </p>
              <div className="inline-flex items-baseline gap-2">
                <span className="text-sm font-mono text-[#a0a0a0]">alkaen</span>
                <span className="text-4xl font-display text-[#f0c040] leading-none">49€/kk</span>
              </div>
            </div>
            <div
              className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                className="bg-[#f0f0f0] hover:bg-[#e0e0e0] text-[#0d0d0d] px-8 h-14 text-base rounded-full group"
                asChild
              >
                <a href="#yhteystiedot">
                  Pyydä tarjous
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-full border-[#f0f0f0]/20 text-[#f0f0f0] hover:bg-[#f0f0f0]/5 hover:border-[#f0f0f0]/40"
                asChild
              >
                <a href="#yllapito-paketit">Hinnoittelu</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ArrowDown className="w-5 h-5 text-[#a0a0a0] animate-bounce" />
        </div>
      </section>

      {/* ── Why ── */}
      <section className="relative py-12 lg:py-16 border-t border-[#2a2a2a] bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                Mitä kotisivujen ylläpito maksaa vuonna 2026?
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Itse hoidettuna: aikaa, päänvaivaa ja teknistä osaamista<br />
                Virastoilla: 50 € – 200 €/kk
              </p>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                Mitä tapahtuu kun kotisivuja ei ylläpidetä?
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Sivut hidastuvat. Tietoturva-aukot kasvavat. Google rankaa alemmas.
              </p>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-4">
                Miksi valita ylläpito?
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Sinulla on varmasti muitakin kiireitä kuin säätää domainien, hostingin ja muiden maksujen ja kilpailun kanssa joka jatkuvasti kehittyy
              </p>
            </div>
          </div>
        </div>
      </section>

      <MaintenanceSection />
      <FeaturesSection />


      <AboutSectionYllapito />
      <CtaSection backgroundImage="/images/tumma.tausta.webp" />
    </>
  );
}
