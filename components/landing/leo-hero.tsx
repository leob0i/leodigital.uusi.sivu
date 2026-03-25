"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export function LeoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#0d0d0d]">
      {/* Animated gradient background that follows mouse */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Back button */}
      <Link 
        href="/"
        className={`fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a2a2a] bg-[#111111]/80 backdrop-blur-xl text-[#a0a0a0] hover:text-[#f0f0f0] hover:border-[#404040] transition-all duration-500 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Takaisin</span>
      </Link>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left content */}
          <div className="space-y-8">
            {/* Animated heading */}
            <div className="overflow-hidden">
              <h1 
                className={`text-5xl md:text-6xl lg:text-7xl font-display tracking-tight text-[#f0f0f0] transition-all duration-1000 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                }`}
              >
                <span className="block">Hei,</span>
                <span className="block mt-2">
                  olen{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Leo Apell</span>
                    <span 
                      className={`absolute bottom-2 left-0 h-3 bg-white/20 transition-all duration-1000 delay-500 ${
                        isLoaded ? "w-full" : "w-0"
                      }`}
                    />
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtitle with stagger animation */}
            <p 
              className={`text-xl lg:text-2xl text-[#a0a0a0] leading-relaxed transition-all duration-1000 delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Leo Digitalin perustaja ja omistaja. Autan yrityksia menestymaan verkossa modernien verkkosivujen ja digitaalisten ratkaisujen avulla.
            </p>

            {/* Animated line */}
            <div 
              className={`h-px bg-gradient-to-r from-[#f0f0f0] via-[#404040] to-transparent transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 w-full" : "opacity-0 w-0"
              }`}
            />

            {/* Story section */}
            <div 
              className={`space-y-6 transition-all duration-1000 delay-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl font-display text-[#f0f0f0]">Tarina</h2>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Leo Digital syntyi halusta auttaa suomalaisia yrityksia erottumaan digitaalisessa maailmassa. Uskon, etta jokainen yritys ansaitsee toimivan ja naytt&auml;van verkkolasnaolon - koosta tai budjetista riippumatta.
                </p>
                <p>
                  Erikoisalani on rakentaa nopeita, hakukoneystav&auml;llisia ja moderneja verkkosivuja, jotka eivat ainoastaan nayta hyvilta vaan myos tuottavat tuloksia. Jokainen projekti on minulle henkilokohtainen - en ole vain palveluntarjoaja, vaan kumppani yrityksesi digitaalisella matkalla.
                </p>
              </div>
            </div>

            {/* Contact info with reveal animation */}
            <div 
              className={`flex flex-wrap gap-6 pt-4 transition-all duration-1000 delay-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a 
                href="mailto:info@leodigital.fi"
                className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors group"
              >
                <div className="p-2 rounded-full border border-[#2a2a2a] group-hover:border-[#404040] group-hover:bg-[#1a1a1a] transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@leodigital.fi</span>
              </a>
              <a 
                href="tel:+358401234567"
                className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors group"
              >
                <div className="p-2 rounded-full border border-[#2a2a2a] group-hover:border-[#404040] group-hover:bg-[#1a1a1a] transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+358 40 123 4567</span>
              </a>
              <div className="flex items-center gap-2 text-[#a0a0a0]">
                <div className="p-2 rounded-full border border-[#2a2a2a]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Suomi</span>
              </div>
            </div>
          </div>

          {/* Right side - Profile with 3D effect */}
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Glowing background effect */}
            <div 
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-xl opacity-50"
              style={{
                transform: `translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)`,
              }}
            />
            
            {/* Main card with parallax effect */}
            <div 
              className="relative rounded-3xl border border-[#2a2a2a] bg-[#111111]/60 backdrop-blur-xl overflow-hidden"
              style={{
                transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 5}deg) rotateX(${(mousePosition.y - 0.5) * -5}deg)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Profile image placeholder */}
              <div className="aspect-[4/5] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]">
                  {/* Decorative elements */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#2a2a2a]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#2a2a2a]/50" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#2a2a2a]/25" />
                  
                  {/* Initials */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-display text-[#f0f0f0]/10">
                    LA
                  </div>
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              </div>

              {/* Info bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#111111] to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-display text-[#f0f0f0]">Leo Apell</h3>
                    <p className="text-sm text-[#a0a0a0]">Perustaja & Omistaja</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-[#a0a0a0]">Vapaana projekteihin</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div 
              className={`absolute -top-4 -right-4 px-4 py-2 rounded-full border border-[#2a2a2a] bg-[#111111]/90 backdrop-blur-xl transition-all duration-1000 delay-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <span className="text-sm font-medium text-[#f0f0f0]">Leo Digital</span>
            </div>
          </div>
        </div>

        {/* Bottom section - Values */}
        <div 
          className={`mt-24 lg:mt-32 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-display text-[#f0f0f0] text-center mb-16">
            Arvot joiden takana seison
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Laatu",
                description: "Jokainen projekti saa saman omistautumisen. En tee kompromisseja laadun suhteen.",
                delay: 0,
              },
              {
                title: "Läpinäkyvyys",
                description: "Selkeä kommunikaatio ja rehellinen hinnoittelu. Ei piilokustannuksia tai yllätyksiä.",
                delay: 100,
              },
              {
                title: "Kumppanuus",
                description: "En ole vain palveluntarjoaja vaan aidosti kiinnostunut yrityksesi menestyksesta.",
                delay: 200,
              },
            ].map((value, i) => (
              <div 
                key={value.title}
                className="group relative p-8 rounded-2xl border border-[#2a2a2a] bg-[#111111]/40 backdrop-blur-sm hover:border-[#404040] hover:bg-[#1a1a1a]/60 transition-all duration-500"
                style={{ transitionDelay: `${1200 + value.delay}ms` }}
              >
                {/* Number */}
                <span className="absolute top-4 right-4 text-6xl font-display text-[#f0f0f0]/5 group-hover:text-[#f0f0f0]/10 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                
                <h3 className="text-xl font-display text-[#f0f0f0] mb-3">{value.title}</h3>
                <p className="text-[#a0a0a0] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className={`mt-24 text-center transition-all duration-1000 delay-[1500ms] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl text-[#a0a0a0] mb-8">
            Kiinnostaako yhteistyo? Ota yhteytta ja jutellaan projektistasi.
          </p>
          <a
            href="/#yhteystiedot"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#f0f0f0] text-[#0d0d0d] font-medium hover:bg-[#e0e0e0] transition-colors"
          >
            Ota yhteyttä
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-40px) translateX(-5px);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-20px) translateX(-10px);
            opacity: 0.4;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}
