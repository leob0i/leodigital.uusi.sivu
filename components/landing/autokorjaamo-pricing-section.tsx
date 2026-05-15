"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function AutokorjaamoPricingSection() {
  const pricingInView = useInView(0.1);

  return (
    <section id="hinnoittelu" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
        <img src="/images/bmwt.webp" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0d0d0d]/80" />
      </div>
      <div ref={pricingInView.ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`mb-16 transition-all duration-700 ${
            pricingInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-6">
            <span className="w-8 h-px bg-[#f0f0f0]/30" />
            Hinnoittelu
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] max-w-2xl">
            Selkeä ja läpinäkyvä hinnoittelu
          </h2>
        </div>

        <div
          className={`grid lg:grid-cols-3 gap-6 transition-all duration-700 delay-100 ${
            pricingInView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main pricing card */}
          <div className="lg:col-span-2 p-8 lg:p-12 border border-[#2a2a2a] rounded-2xl bg-[#111111]">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <h3 className="text-[#f0f0f0] text-2xl font-display">
                Mitä autokorjaamon sivuihin kuuluu
              </h3>
            </div>
            <div className="space-y-5 mb-10">
              {[
                "Räätälöity ulkoasu – ei templaatteja, ei WordPressiä. Sivu tehdään juuri sinun korjaamolle sopivaksi.",
                "Hakukoneoptimointi (SEO) – oikeat avainsanat, tekninen rakenne ja sisältö, joka löytyy Googlesta kun asiakas etsii korjaamoa läheltä.",
                "Tekoälyhakuoptimointi (GEO) – sivusto on rakennettu niin, että ChatGPT, Perplexity ja muut tekoälypohjaiset haut suosittelevat yritystäsi.",
                "Mobiilioptimoidut sivut – toimii moitteettomasti puhelimella, tabletilla ja tietokoneella.",
                "Nopea latausaika – nopeus vaikuttaa suoraan hakukonenäkyvyyteen ja siihen, jääkö asiakas sivulle.",
                "Yhteydenottolomake – asiakkaat voivat ottaa yhteyttä suoraan sivulta.",
                "Tietosuoja- ja käyttöehtosivut – lakisääteiset sivut mukana automaattisesti.",
                "Enintään 6 sivua – etusivu, palvelut, tietoa korjaamosta, yhteystiedot ja muut tarpeelliset.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#f0f0f0]" />
                  </div>
                  <p className="text-[#a0a0a0] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-xl lg:text-2xl font-display text-[#f0f0f0] leading-snug mb-6">
              Laajemmat kokonaisuudet – kuten ajanvarausjärjestelmät, integraatiot ja räätälöidyt ratkaisut – hinnoitellaan erikseen.
            </p>
            <p className="text-sm text-[#a0a0a0] italic mb-6">
              Otan mielelläni vastaan isommatkin projektit –{" "}
              <a
                href="#yhteydenotto"
                className="text-[#f0f0f0] underline underline-offset-2 hover:text-[#a0a0a0] transition-colors"
              >
                kysy lisää!
              </a>
            </p>
          </div>

          {/* Discount card + CTA */}
          <div className="flex flex-col gap-4">
            <div className="relative p-8 border border-[#b8960c]/60 rounded-2xl bg-black/30 overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
              <div className="relative">
                <span className="font-mono text-xs tracking-widest text-[#d4a017] uppercase block mb-4">
                  ⭐ Starter – Sivut + ylläpito
                </span>
                <div className="mb-4">
                  <span className="font-display text-4xl text-[#f0c040] leading-none">399 €</span>
                  <span className="font-mono text-sm text-[#d4a017] ml-2">+ 14 €/kk</span>
                </div>
                <p className="text-[#d4a017]/80 text-sm leading-relaxed mb-4">
                  Sivun rakennushinta + Perus-ylläpitopaketti sisältäen:
                </p>
                <ul className="space-y-2 mb-8">
                  {["Domain & SSL-sertifikaatti", "Hosting & varmuuskopiot", "Sähköpostituki"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#d4a017]/80">
                      <Check className="w-3.5 h-3.5 text-[#d4a017] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-[#b8960c]/40">
                  <a
                    href="/yllapito"
                    className="inline-flex items-center gap-2 text-sm text-[#d4a017] hover:text-[#f0c040] transition-colors group"
                  >
                    Lue lisää Perus-ylläpitopaketeista
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
            {/* One-time purchase card */}
            <div className="relative p-8 border border-[#f0f0f0]/20 rounded-2xl bg-black/30 overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
              <div className="relative">
                <span className="font-mono text-xs tracking-widest text-[#f0f0f0] uppercase block mb-4">
                  Tai kertaostos – ei sitoutumista
                </span>
                <div className="mb-4">
                  <span className="font-display text-4xl text-[#f0f0f0] leading-none">499 €</span>
                </div>
                <p className="text-[#f0f0f0]/70 text-sm leading-relaxed">
                  Kaikki sama sisältö, mutta ilman kuukausimaksua. Domain, hosting ja ylläpito järjestetään itse tai lisätään myöhemmin.{" "}
                  <span className="italic">(Huomaa sivumme tarvitsee jonkin webhotellin,{" "}
                    <a href="#yhteydenotto" className="underline underline-offset-2 hover:text-[#f0f0f0] transition-colors">kysy lisää</a>)
                  </span>
                </p>
              </div>
            </div>
            <a
              href="#yhteydenotto"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f0f0f0] text-[#0d0d0d] font-medium hover:bg-[#e0e0e0] transition-colors rounded-full group"
            >
              Pyydä ilmainen demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/nettisivut"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[#f0f0f0] font-medium border border-[#f0f0f0]/30 hover:border-[#f0f0f0]/60 transition-colors rounded-full group"
            >
              Lue lisää mitä sivut sisältää
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
