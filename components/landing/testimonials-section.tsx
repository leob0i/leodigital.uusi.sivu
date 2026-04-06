"use client";

import { useEffect, useRef, useState } from "react";
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

// Client logos
const clients = [
  { name: "Rautaranta", logo: "/images/rautaranta.logo.png", url: "https://www.rautaranta.fi/" },
  { name: "WrapPoint", logo: "/images/wrappoint.logo.png", url: "https://www.wrappoint.fi/" },
  { name: "Repola", logo: "/images/repola.logo.jpg", url: "https://www.kirjanpitopalvelutrepola.fi/" },
  { name: "Kelmutus", logo: "/images/logo.kelmutuspng.png", url: "https://www.kelmutus.fi/" },
  { name: "Rasa & Väänänen", logo: "/images/rasa.vaananen.logo.png", url: "https://adkorjaamomikkeli.com/" },
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
    <section id="asiakkaat" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#0d0d0d]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Clients */}
        <div className="mb-20">
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
          
          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 max-w-5xl">
            {clients.map((client, index) => {
              const cardContent = (
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
              );

              const className = `aspect-square bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#404040] flex items-center justify-center transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`;

              return client.url ? (
                <a
                  key={client.name}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={client.name}
                  className={className}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {cardContent}
                </div>
              );
            })}
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
