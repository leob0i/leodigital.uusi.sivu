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
];

const clients = [
  "Rautaranta",
  "Repola",
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 border-t border-[#2a2a2a] bg-[#0d0d0d]">
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
          <div className="flex flex-wrap gap-8 lg:gap-16">
            {clients.map((client, index) => (
              <div
                key={client}
                className={`text-2xl lg:text-3xl font-display text-[#606060] hover:text-[#f0f0f0] transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
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

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-3xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 lg:p-12 border border-[#2a2a2a] hover:border-[#404040] bg-[#1a1a1a] transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f0f0f0] text-[#f0f0f0]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl font-display text-[#f0f0f0] leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-medium text-[#f0f0f0]">{testimonial.author}</div>
                  <div className="text-sm text-[#a0a0a0]">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
