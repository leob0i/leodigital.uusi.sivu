"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Leo teki homman selkeästi ja sovitussa aikataulussa. Lopputulos oli enemmän kuin odotimme! Iso suositus Leolle ja Leodigitalille!",
    author: "Rautaranta",
    role: "Asiakas",
    rating: 5,
  },
  {
    quote: "Ammattitaitoista ja nopeaa palvelua. Verkkosivumme uudistus sujui täysin kivuttomasti ja lopputulos ylitti odotukset.",
    author: "Repola",
    role: "Asiakas",
    rating: 5,
  },
];

// Featured client showcases (left side)
const featuredClients: { name: string; image: string; url: string; tagline: string; quote?: string }[] = [
  {
    name: "Wheeltec",
    image: "/images/wheeltec.etusivu.jpeg",
    url: "https://www.wheeltec.fi/",
    tagline: "Yli 6 vuoden kokemus autoalalta tarkoittaa että tyyli välillä ratkaisee. Mutta myös sivu pysyy todella nopeana joka ruudulla.",
  },
  {
    name: "Repola",
    image: "/images/repola.etusivu.jpeg",
    url: "https://www.kirjanpitopalvelutrepola.fi/",
    tagline: "Nettisivut, jotka tuovat taloushallinnon palveluille enemmän näkyvyyttä ja asiakkaita.",
    quote: "Asiantuntevaa ja mukavaa palvelua Leolta. Nettisivujen ylläpito erittäin helppoa ja sujuvaa tämän kaverin ansiosta.\n\n-Repola",
  },
];

// Client logos (right side)
const clients = [
  { name: "Rautaranta", logo: "/images/rautaranta.logo.png", url: "https://www.rautaranta.fi/" },
  { name: "WrapPoint", logo: "/images/wrappoint.logo.png", url: "https://www.wrappoint.fi/" },
  { name: "Kelmutus", logo: "/images/logo.kelmutuspng.png", url: "https://www.kelmutus.fi/" },
  { name: "Rasa & Väänänen", logo: "/images/rasa.vaananen.logo.png", url: "https://adkorjaamomikkeli.com/" },
  { name: "Abo Marine Service", logo: "/images/abo.marine.service.logo.png", url: "https://www.abomarineservice.com/" },
  { name: "Kirjanpito ja Digitoimisto", logo: "/images/apellxrepola.logo.png", url: "https://kirjanpitojadigitoimisto.fi/" },
  { name: "Rakennuspalvelu Kolehmainen", logo: "/images/rakennuskolehmainen.logo.webp", url: "https://www.rakennuskolehmainen.fi" },
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="asiakkaat" ref={sectionRef} className="relative pt-24 lg:pt-32 pb-10 lg:pb-12 border-t border-[#2a2a2a] bg-[#0d0d0d]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Clients */}
        <div>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-8">
            <span className="w-8 h-px bg-[#f0f0f0]/30" />
            Asiakkaat
          </span>
          <h2 
            className={`text-3xl lg:text-4xl font-display text-[#f0f0f0] mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Yritykset, jotka luottavat osaamiseeni
          </h2>
          
          {/* Featured pairs + Logo row */}
          <div className="flex flex-col gap-8 lg:gap-12 max-w-6xl">
            {/* Featured client showcases: card + text side by side */}
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
              {featuredClients.map((client, index) => (
                <div key={client.name} className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 flex-1 text-center sm:text-left">
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-48 sm:w-64 lg:w-80 aspect-[3/5] shrink-0 overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#404040] transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
                      className="object-cover object-top filter brightness-75 group-hover:brightness-90 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
                    <div className="absolute top-2 left-2 text-sm font-display text-[#f0f0f0]">
                      {client.name}
                    </div>
                    <div className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 sm:gap-2 text-base sm:text-lg lg:text-xl font-mono text-[#f0f0f0]">
                      Katso sivu
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </a>
                  {client.tagline && (
                    <div>
                      <p className="text-base sm:text-lg font-medium text-[#f0f0f0] leading-snug">
                        {client.tagline}
                      </p>
                      {client.quote && (
                        <p className="mt-4 text-sm sm:text-base text-[#a0a0a0] leading-snug whitespace-pre-line">
                          {client.quote}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Client Logos row */}
            <div
              className={`relative left-1/2 -translate-x-1/2 w-screen overflow-hidden transition-opacity duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex gap-6 lg:gap-8 marquee">
                {[...Array(2)].map((_, dupIndex) => (
                  <div key={dupIndex} className="flex gap-6 lg:gap-8 shrink-0">
                    {clients.map((client) => {
                      const cardContent = (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={client.logo}
                            alt={client.name}
                            fill
                            sizes="185px"
                            className="object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                          />
                        </div>
                      );

                      const className =
                        "w-28 sm:w-36 lg:w-44 aspect-square shrink-0 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#404040] flex items-center justify-center transition-colors group";

                      return client.url ? (
                        <a
                          key={`${client.name}-${dupIndex}`}
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={className}
                        >
                          {cardContent}
                        </a>
                      ) : (
                        <div key={`${client.name}-${dupIndex}`} className={className}>
                          {cardContent}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>



{/* Testimonials */}
        {/* <div>
          <span className="inline-flex items-center gap-3 text-sm font-mono text-[#a0a0a0] mb-8">
            <span className="w-8 h-px bg-[#f0f0f0]/30" />
            Arvostelut
          </span>
          <h3 
            className={`text-3xl lg:text-4xl font-display text-[#f0f0f0] mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Mitä asiakkaat kertovat
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 lg:p-10 border border-[#2a2a2a] hover:border-[#404040] bg-[#1a1a1a] transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f0f0f0] text-[#f0f0f0]" />
                  ))}
                </div>
                <blockquote className="text-lg lg:text-xl font-display text-[#f0f0f0] leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-medium text-[#f0f0f0]">{testimonial.author}</div>
                  <div className="text-sm text-[#a0a0a0]">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
