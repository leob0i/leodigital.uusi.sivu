"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Alkukartoitus ja tarjous",
    description:
      "Käydään läpi mitä yrityksesi tarvitsee nyt, onko se liikaa asiakkaita vai liian vähän, ja missä voimme helpottaa tilannetta digiratkaisulla. Teiltä saatujen tietojen pohjalta laadin suunnitelman mitä tehdään ja miksi. Samalla saat selkeän hinnan työlle. Tämä vaihe ei vielä sido mihinkään!",
  },
  {
    number: "02",
    title: "Toteutus alkaa",
    description:
      "Aloitan projektin rakentamisen suunnitelman mukaisesti. Kun rakenne alkaa olla valmiina saat testilinkin sivulle ja voit halutessasi kommentoida kehityssuuntaa, tai vaikka värimaailmaa.",
  },
  {
    number: "03",
    title: "Julkaisu ja jatko",
    description:
      "Sivut voidaan toteuttaa kertamaksulla tai jatkuvalla ylläpidolla sisältäen kaiken mitä netissä näkymiseen tarvitset helposti ja edullisesti.",
  },
];

export function HowItWorksSection() {
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
        <h2
          className={`text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0] mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Miten homma toimii?
        </h2>

        <div className="flex flex-col gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex items-start gap-8 py-10 border-b border-[#2a2a2a] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <span className="text-4xl lg:text-5xl font-display font-bold text-blue-500 shrink-0 leading-none mt-1">
                {step.number}
              </span>
              <div>
                <h3 className="text-xl lg:text-2xl font-display text-[#f0f0f0] mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-[#a0a0a0] leading-relaxed max-w-3xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
