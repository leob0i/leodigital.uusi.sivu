"use client";

import { ArrowRight, Star, CheckCircle } from "lucide-react";

export function PartnershipHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 lg:py-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#111111]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#f0f0f0]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#f0f0f0]/3 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Main Hero Box - Glass effect */}
        <div className="relative bg-[#1a1a1a]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f0f0f0]/5 via-transparent to-transparent rounded-3xl pointer-events-none" />
          
          {/* Badge */}
          <div className="relative mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-sm text-[#d4af37] font-medium">
              <Star className="w-4 h-4" />
              All in one Kumppanuus
            </span>
          </div>

          {/* Content Grid */}
          <div className="relative grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left - Main Content */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-[#f0f0f0] mb-6">
                Ryhdy
                <br />
                <span className="text-stroke">kumppaniksemme</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#a0a0a0] mb-8 max-w-2xl leading-relaxed">
                Kaikki samasta paikasta. Kirjanpito ja koko digitaalinen näkyvyys sekä sen ylläpito yhdessä paketissa.
              </p>

              <p className="text-[#a0a0a0] mb-10 max-w-2xl leading-relaxed">
                <span className="text-[#d4af37] font-medium">All in one Kumppanuus</span> on suunniteltu yrityksille, jotka haluavat keskittyä ydintoimintaansa ja antaa digitaalisen puolen sekä taloushallinnon ammattilaisten hoitoon. Saat henkilökohtaisen yhteyshenkilön, joka tuntee yrityksesi ja auttaa sinua kasvamaan.
              </p>

              {/* Key highlights */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f0f0f0] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-[#f0f0f0] font-medium">Kirjanpito Repolan kanssa</h3>
                    <p className="text-sm text-[#a0a0a0]">Ammattimainen kirjanpito ja taloushallinto</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f0f0f0] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-[#f0f0f0] font-medium">Jatkuvasti kehittyvät Kotisivut</h3>
                    <p className="text-sm text-[#a0a0a0]">Sivustosi kasvaa yrityksesi mukana</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f0f0f0] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-[#f0f0f0] font-medium">Kuukausiraportointi</h3>
                    <p className="text-sm text-[#a0a0a0]">Selkeä raportti kaikesta toiminnasta</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f0f0f0] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-[#f0f0f0] font-medium">Jatkuva tuki</h3>
                    <p className="text-sm text-[#a0a0a0]">Digiasioissa ja kirjanpidossa</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#yhteystiedot"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#f0f0f0] text-[#0d0d0d] font-medium hover:bg-[#e0e0e0] transition-colors rounded-full group"
              >
                Ota yhteyttä
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right - Price Card */}
            <div className="lg:col-span-1 flex items-center">
              <div className="w-full bg-[#111111]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-2xl p-8 text-center">
                <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">All in one Kumppanuus</span>
                
                <div className="mt-6 mb-4">
                  <span className="font-display text-6xl md:text-7xl text-[#f0f0f0]">299</span>
                  <span className="text-2xl text-[#a0a0a0]">€</span>
                  <span className="text-[#a0a0a0] text-lg">/kk</span>
                </div>
                
                <p className="text-sm text-[#a0a0a0] mb-6">+ ALV 25.5%</p>
                
                <div className="border-t border-[#2a2a2a] pt-6 mb-6">
                  <p className="text-sm text-[#a0a0a0]">Sisältää:</p>
                  <p className="text-[#f0f0f0] mt-2">Kirjanpito + Digitaalinen näkyvyys + Ylläpito + Maksuominaisuudet</p>
                </div>

                <a
                  href="#yhteystiedot"
                  className="w-full py-4 flex items-center justify-center gap-2 bg-[#f0f0f0] text-[#0d0d0d] font-medium hover:bg-[#e0e0e0] transition-colors rounded-full group"
                >
                  Aloita kumppanuus
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
