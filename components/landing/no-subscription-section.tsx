"use client";

import { useEffect, useRef, useState } from "react";

export function NoSubscriptionSection() {
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
            Voit ostaa sivut myös ilman kuukausimaksua
          </h2>
          <p
            className={`text-lg text-[#a0a0a0] leading-relaxed mb-5 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Kaikki verkkosivut voidaan toteuttaa myös kertamaksulla ilman jatkuvaa sopimusta. Moni asiakkaista kuitenkin valitsee ylläpitopaketin, jolloin huolehdin teknisestä ylläpidosta, tietoturvasta, pienistä muutoksista ja näkyvyyden kehittämisestä jatkuvasti.
          </p>
          <p
            className={`text-lg text-[#a0a0a0] leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Ylläpitopaketti sopii erityisesti yrityksille, jotka haluavat keskittyä omaan liiketoimintaan ilman huolta verkkosivujen toimivuudesta tai päivityksistä. Sinä keskityt liiketoimintaan ja me pidetään digi kunnossa!
          </p>
        </div>
      </div>
    </section>
  );
}
