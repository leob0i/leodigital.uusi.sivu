"use client";

import { Globe, Search, Smartphone, Bot, BarChart3, Lock, RefreshCw, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const animatedTexts = ["jatkuvaa huolenpitoa", "näkyvyyttä", "kaikki maksut samasta"];

export function StarterInfo() {
  const [textIndex, setTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % animatedTexts.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-32 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left Column */}
          <div>
            <span className="font-mono text-xs tracking-widest text-[#a0a0a0] uppercase block mb-6">
              Miksi ylläpito?
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#f0f0f0] mb-8">
              Verkkosivusto vaatii
              <br />
              <span 
                className={`text-stroke inline-block transition-all duration-300 ${
                  isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
              >
                {animatedTexts[textIndex]}
              </span>
            </h2>
            
            <div className="space-y-6 text-[#a0a0a0] leading-relaxed">
              <p>
                Moderni verkkosivusto ei ole kertaluonteinen projekti vaan jatkuvasti elävä kokonaisuus. Hakukoneet, selaimet ja tietoturvauhat kehittyvät jatkuvasti, ja sivustosi täytyy pysyä mukana. Ilman säännöllistä ylläpitoa sivustosi voi hidastua, menettää hakukonenäkyvyyttään tai pahimmassa tapauksessa joutua tietoturvahyökkäyksen kohteeksi.
              </p>
              
              <p>
                Leo Digitalin ylläpitopalvelu vapauttaa sinut teknisistä huolista. Me seuraamme sivustosi toimintaa ympäri vuorokauden, päivitämme ohjelmistot automaattisesti ja reagoimme ongelmiin ennen kuin ne vaikuttavat asiakkaisiisi. Saat mielenrauhan tietäen, että ammattilaiset huolehtivat digitaalisesta läsnäolostasi.
              </p>
              
              <p>
                Jokainen ylläpitopakettimme on suunniteltu erilaisten yritysten tarpeisiin. Olitpa aloittava yrittäjä tai kasvava yritys, meillä on sinulle sopiva ratkaisu. Voit myös helposti päivittää pakettia yrityksesi kasvaessa — ilman monimutkaisia sopimuksia tai piilokustannuksia.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <span className="font-mono text-xs tracking-widest text-[#a0a0a0] uppercase block mb-6">
              Mitä saat?
            </span>
            
            <h3 className="font-display text-2xl md:text-3xl tracking-tight text-[#f0f0f0] mb-8">
              Kattava palvelukokonaisuus
            </h3>
            
            <div className="space-y-6 text-[#a0a0a0] leading-relaxed">
              <p>
                <strong className="text-[#f0f0f0]">Domain ja hosting</strong> — Kaikki paketit sisältävät .fi tai .com domain-nimen sekä nopean ja luotettavan web-hostingin. Sivustosi latautuu salamannopeasti ja on käytettävissä 99.9% ajasta. Emme käytä halpahosting-palveluita vaan premium-infrastruktuuria.
              </p>
              
              <p>
                <strong className="text-[#f0f0f0]">Tietoturva ja varmuuskopiot</strong> — SSL-sertifikaatti turvaa asiakkaidesi tiedot. Teemme päivittäiset varmuuskopiot ja säilytämme ne 30 päivää taaksepäin. Jos jotain menee pieleen, palautamme sivustosi hetkessä toimintakuntoon.
              </p>
              
              <p>
                <strong className="text-[#f0f0f0]">Sisältöpäivitykset</strong> — Haluatko vaihtaa kuvia, lisätä uuden palvelun tai päivittää yhteystietoja? Plus-paketista ylöspäin saat rajattomat sisältöpäivitykset. Lähetä meille päivityspyyntö ja hoidamme loput.
              </p>
              
              <p>
                <strong className="text-[#f0f0f0]">SEO ja näkyvyys</strong> — Pro-paketista alkaen seuraamme hakukonesijoituksiasi ja optimoimme sivustoasi jatkuvasti. Autamme sinua nousemaan Googlen tuloksissa ja tavoittamaan enemmän asiakkaita.
              </p>
              
              <p>
                <strong className="text-[#f0f0f0]">Tekninen tuki</strong> — Ongelmatilanteissa olemme täällä auttamassa. Sähköpostitse, WhatsAppilla tai puhelimitse — valitse sinulle sopivin tapa. Premium-asiakkaat saavat henkilökohtaisen yhteyshenkilön.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="border-t border-[#2a2a2a] pt-16">
          <h3 className="font-display text-2xl md:text-3xl tracking-tight text-[#f0f0f0] mb-12 text-center">
            Kaikki palvelut yhdessä paketissa
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-[#161616]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#f0f0f0]" />
              </div>
              <h4 className="font-medium text-[#f0f0f0] mb-2">Domain & Hosting</h4>
              <p className="text-sm text-[#a0a0a0]">Premium-infrastruktuuri ja oma verkkotunnus</p>
            </div>
            
            <div className="p-6 bg-[#161616]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-[#f0f0f0]" />
              </div>
              <h4 className="font-medium text-[#f0f0f0] mb-2">Tietoturva</h4>
              <p className="text-sm text-[#a0a0a0]">SSL, palomuurit ja automaattiset päivitykset</p>
            </div>
            
            <div className="p-6 bg-[#161616]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-[#f0f0f0]" />
              </div>
              <h4 className="font-medium text-[#f0f0f0] mb-2">Varmuuskopiot</h4>
              <p className="text-sm text-[#a0a0a0]">Päivittäiset backupit ja nopea palautus</p>
            </div>
            
            <div className="p-6 bg-[#161616]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-[#f0f0f0]" />
              </div>
              <h4 className="font-medium text-[#f0f0f0] mb-2">SEO-optimointi</h4>
              <p className="text-sm text-[#a0a0a0]">Hakukonelöydettävyys ja analytiikka</p>
            </div>
            
            <div className="p-6 bg-[#161616]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-[#f0f0f0]" />
              </div>
              <h4 className="font-medium text-[#f0f0f0] mb-2">Mobiilioptimointi</h4>
              <p className="text-sm text-[#a0a0a0]">Täydellinen toimivuus kaikilla laitteilla</p>
            </div>
            
            <div className="p-6 bg-[#161616]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-[#f0f0f0]" />
              </div>
              <h4 className="font-medium text-[#f0f0f0] mb-2">Tekoälybotit</h4>
              <p className="text-sm text-[#a0a0a0]">Automaattinen asiakaspalvelu 24/7</p>
            </div>
            
            <div className="p-6 bg-[#161616]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-[#f0f0f0]" />
              </div>
              <h4 className="font-medium text-[#f0f0f0] mb-2">Analytiikka</h4>
              <p className="text-sm text-[#a0a0a0]">Kävijäseuranta ja kuukausiraportit</p>
            </div>
            
            <div className="p-6 bg-[#161616]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl">
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-[#f0f0f0]" />
              </div>
              <h4 className="font-medium text-[#f0f0f0] mb-2">Tekninen tuki</h4>
              <p className="text-sm text-[#a0a0a0]">Nopea vastaus ja suomenkielinen palvelu</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#a0a0a0] text-lg mb-6">
            Selaa paketteja alta ja löydä yrityksellesi sopiva ratkaisu.
          </p>
          <a
            href="#paketit"
            className="inline-flex items-center gap-2 text-[#f0f0f0] font-medium hover:text-[#a0a0a0] transition-colors"
          >
            Siirry paketteihin
            <span className="text-xl">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
