"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "Jokainen ratkaisu on käytännönläheinen ja helppo ylläpitää",
  "Ei valmispohjia - kaikki koodataan yksilöllisesti",
  "Maksu 50% alussa ja 50% loput luovutuksen yhteydessä",
  "Suora kommunikaatio ilman välikäsiä",
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
      className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#111111]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - About Text */}
          <div>
            <h2
              className={`text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Hei, olen Leo Apell
            </h2>
            <p 
              className={`text-lg text-[#a0a0a0] leading-relaxed mb-6 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Autan pieniä ja keskisuuria yrityksiä saamaan enemmän irti digitaalisista kanavista 
              - ilman turhaa monimutkaisuutta.
            </p>
            <p 
              className={`text-lg text-[#a0a0a0] leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Suunnittelen ja toteutan verkkosivuja, asiakaspalvelubotteja ja muuta digitaalista 
              tekemistä alusta loppuun itse, jotta kommunikaatio pysyy suorana ja selkeänä.
            </p>

            <div 
              className={`space-y-3 mb-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f0f0f0] mt-0.5 shrink-0" />
                  <span className="text-[#a0a0a0]">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="#yhteystiedot"
              className={`inline-flex items-center gap-2 text-[#f0f0f0] hover:opacity-70 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <span className="font-medium">Pyydä maksuton arvio</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Profile Image */}
          <div 
            className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Profile Image Placeholder */}
              <div className="w-full h-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center overflow-hidden">
                {/* Placeholder - replace src with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center">
                  <svg 
                    className="w-24 h-24 text-[#404040]" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-2 border border-[#2a2a2a] -z-10" />
              <div className="absolute -inset-4 border border-[#1a1a1a] -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
