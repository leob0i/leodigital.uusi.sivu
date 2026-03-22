"use client";

import { Check, Shield, Zap, Clock, Headphones } from "lucide-react";

export function StarterHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#111111]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.02),transparent_50%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Large Glass Box */}
        <div className="relative w-full bg-[#1a1a1a]/40 backdrop-blur-xl border border-[#2a2a2a] rounded-3xl p-8 lg:p-12 xl:p-16">
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <span className="inline-block font-mono text-xs tracking-widest text-[#a0a0a0] uppercase mb-6 px-3 py-1 border border-[#2a2a2a] rounded-full">
                Ylläpitopaketit
              </span>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#f0f0f0] mb-6">
                Valitse tarpeisiisi sopiva
                <br />
                <span className="text-stroke">ylläpitopaketti</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-[#a0a0a0] mb-8 leading-relaxed">
                Kaikki paketit sisältävät domain, hostingin ja teknisen tuen. Keskity yrityksesi pyörittämiseen — me huolehdimme verkkosivustosi toiminnasta, tietoturvasta ja kehityksestä. Saat ammattilaistasoisen ylläpidon ilman teknistä osaamista.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#f0f0f0]" />
                  </div>
                  <div>
                    <p className="text-[#f0f0f0] font-medium">SSL & Tietoturva</p>
                    <p className="text-sm text-[#a0a0a0]">Automaattiset päivitykset</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#f0f0f0]" />
                  </div>
                  <div>
                    <p className="text-[#f0f0f0] font-medium">Nopea hosting</p>
                    <p className="text-sm text-[#a0a0a0]">99.9% käytettävyys</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#f0f0f0]" />
                  </div>
                  <div>
                    <p className="text-[#f0f0f0] font-medium">Varmuuskopiot</p>
                    <p className="text-sm text-[#a0a0a0]">Päivittäiset backupit</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-[#f0f0f0]" />
                  </div>
                  <div>
                    <p className="text-[#f0f0f0] font-medium">Tekninen tuki</p>
                    <p className="text-sm text-[#a0a0a0]">Suomenkielinen palvelu</p>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#f0f0f0]" />
                  <span className="text-[#a0a0a0]">Ei piilokuluja — kaikki sisältyy kuukausihintaan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#f0f0f0]" />
                  <span className="text-[#a0a0a0]">Joustava sopimus — voit perua milloin vain</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#f0f0f0]" />
                  <span className="text-[#a0a0a0]">Nopea käyttöönotto — sivut toiminnassa heti</span>
                </div>
              </div>
            </div>

            {/* Right - Price Box */}
            <div className="lg:w-80 shrink-0">
              <div className="bg-[#161616]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-2xl p-8">
                <span className="font-mono text-xs tracking-widest text-[#a0a0a0] uppercase block mb-4">
                  Alkaen
                </span>
                
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-6xl lg:text-7xl text-[#f0f0f0]">
                    19
                  </span>
                  <span className="text-2xl text-[#a0a0a0]">€</span>
                  <span className="text-lg text-[#a0a0a0]">/kk</span>
                </div>
                
                <p className="text-sm text-[#a0a0a0] mb-6">
                  + ALV 25.5%
                </p>

                <div className="h-px bg-[#2a2a2a] mb-6" />

                <p className="text-[#a0a0a0] text-sm mb-6 leading-relaxed">
                  Täydellinen ratkaisu pienyrityksille ja aloittaville yrittäjille. Sisältää kaiken mitä tarvitset ammattimaiseen verkkopresenssiin.
                </p>

                <a
                  href="#paketit"
                  className="w-full py-4 flex items-center justify-center gap-2 bg-[#f0f0f0] text-[#0d0d0d] font-medium hover:bg-[#e0e0e0] transition-colors rounded-xl"
                >
                  Katso kaikki paketit
                  <span className="text-lg">↓</span>
                </a>

                <p className="text-center text-xs text-[#a0a0a0] mt-4">
                  Ei sitoutumispakkoa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
