"use client";

import { useEffect, useRef, useState } from "react";

export function IntroSection() {
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
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#0a0a0a] border-t border-[#2a2a2a]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <h2
            className={`text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Kaikki digiasiat yhdestä paikasta
          </h2>
          <p
            className={`text-lg text-[#a0a0a0] leading-relaxed mb-5 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Yrityksen nettisivut eivät enää ole vain &ldquo;käyntikortti&rdquo;. Ne vaikuttavat
            siihen löydetäänkö yrityksesi hakutuloksista, kuinka luotettavalta se näyttää ja kuinka
            helposti asiakkaat ottavat yhteyttä.
          </p>
          <p
            className={`text-lg text-[#a0a0a0] leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Leo Digital Suomi suunnittelee, toteuttaa ja ylläpitää verkkosivut alusta loppuun ilman
            turhaa säätöä tai useita eri palveluntarjoajia. Nettisivut, ylläpito, näkyvyys ja
            asiakaspalveluratkaisut hoituvat yhdestä paikasta niin, että voit itse keskittyä
            yrityksesi pyörittämiseen.
          </p>
        </div>
      </div>
    </section>
  );
}
