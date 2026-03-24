"use client";

import { Globe, Paintbrush, Smartphone, Search, Wrench } from "lucide-react";
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
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#f0f0f0]" />
                </div>
                <div>
                  <strong className="text-[#f0f0f0] block mb-1">Domain & hosting</strong>
                  <p>Verkkotunnus ja nopea palvelintila kuuluvat hintaan. Sinun ei tarvitse erikseen tilata, maksaa tai hallinnoida niitä – kaikki hoituu yhdeltä laskulla.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                  <Paintbrush className="w-6 h-6 text-[#f0f0f0]" />
                </div>
                <div>
                  <strong className="text-[#f0f0f0] block mb-1">Nettisivun suunnittelu ja toteutus</strong>
                  <p>Suunnittelemme ja rakennamme sinulle modernin, selkeän nettisivun valmiiksi käyttöön. Sivu antaa yrityksestäsi ammattimaisen ensivaikutelman heti.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-[#f0f0f0]" />
                </div>
                <div>
                  <strong className="text-[#f0f0f0] block mb-1">Mobiiliystävällinen rakenne</strong>
                  <p>Sivu toimii moitteettomasti puhelimella, tabletilla ja tietokoneella – ilman erillisiä säätöjä.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-[#f0f0f0]" />
                </div>
                <div>
                  <strong className="text-[#f0f0f0] block mb-1">Perus-SEO alusta alkaen</strong>
                  <p>Sivusto rakennetaan teknisesti hakukoneystävälliseksi, jotta asiakkaasi löytävät sinut Googlesta.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-[#f0f0f0]" />
                </div>
                <div>
                  <strong className="text-[#f0f0f0] block mb-1">Tekninen toimivuus</strong>
                  <p>Jos sivusto kohtaa teknisiä ongelmia ja kaatuu, selvitämme tilanteen ja palautamme sen toimintaan normaalitilanteissa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
