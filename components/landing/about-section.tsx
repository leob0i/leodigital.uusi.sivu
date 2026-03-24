"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const features = [
  "yksilöllisesti suunnitellun ja toteutetun nettisivun",
  "mobiiliystävällisen ja nopean rakenteen",
  "hakukoneystävällisen pohjan (SEO)",
  "yhteydenottolomakkeet, kartat ja tarvittavat integraatiot",
  "Google-näkyvyyden perustan sekä arvostelujen hyödyntämisen",
  "mahdollisuuden laajentaa sivustoa ja toiminnallisuuksia myöhemmin",
];

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
      className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#0d0d0d]"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f0f0f0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#f0f0f0]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Glass Box */}
        <div 
          className={`relative p-8 lg:p-12 xl:p-16 rounded-3xl border border-[#2a2a2a]/60 bg-[#1a1a1a]/40 backdrop-blur-xl shadow-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#f0f0f0]/5 via-transparent to-[#f0f0f0]/3 pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="mb-10">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display tracking-tight text-[#f0f0f0] mb-4">
                Kotisivut alkaen <span className="text-stroke">499 €</span>
              </h2>
              <p className="text-xl lg:text-2xl text-[#f0f0f0]/90 font-medium">
                Enemmän kuin pelkkä &ldquo;nettisivu&rdquo;
              </p>
            </div>

            {/* Description paragraphs */}
            <div className="max-w-4xl space-y-6 mb-10">
              <p className="text-lg text-[#a0a0a0] leading-relaxed">
                Rakennamme yrityksellesi yksilölliset kotisivut, jotka eivät ainoastaan näytä hyvältä – vaan myös toimivat. Jokainen sivu suunnitellaan alusta alkaen sinun yrityksesi tarpeisiin, olipa tavoitteena selkeä esittelysivu tai näyttävä, täysin räätälöity kokonaisuus.
              </p>
              <p className="text-lg text-[#a0a0a0] leading-relaxed">
                Vuonna 2026 pelkkä nettisivu ei enää riitä. Siksi huomioimme jo toteutusvaiheessa näkyvyyden, hakukoneystävällisen rakenteen sekä sen, että asiakkaasi löytävät sinut helposti ja luottavat yritykseesi heti ensisilmäyksellä.
              </p>
            </div>

            {/* Features list */}
            <div className="mb-10">
              <h3 className="text-lg font-medium text-[#f0f0f0] mb-6">
                Saat käyttöösi kokonaisuuden, joka sisältää:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl border border-[#2a2a2a]/40 bg-[#111111]/40"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[#f0f0f0] flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-[#0d0d0d]" />
                    </div>
                    <span className="text-[#a0a0a0]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <div className="space-y-6 mb-10 max-w-4xl">
              <p className="text-lg text-[#a0a0a0] leading-relaxed">
                <span className="text-[#f0f0f0] font-medium">Juuri sinun brändisi ja tavoitteidesi mukaan.</span> Halutessasi toteutamme myös täysin räätälöidyt designit ja laajemmat toiminnallisuudet.
              </p>
              <p className="text-lg text-[#a0a0a0] leading-relaxed">
                Voit hankkia pelkän nettisivun kertaprojektina tai yhdistää sen ylläpitoon ja jatkuvaan kehitykseen.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed border-l-2 border-[#2a2a2a] pl-4 italic">
                Laajemmat kokonaisuudet, kuten varausjärjestelmät, maksutoiminnot ja räätälöidyt ratkaisut, suunnitellaan ja hinnoitellaan aina erikseen projektin laajuuden mukaan.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
