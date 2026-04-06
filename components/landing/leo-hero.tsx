"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, ArrowRight, Building2 } from "lucide-react";
import Image from "next/image";

interface Particle {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

export function LeoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setIsLoaded(true);
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${10 + Math.random() * 10}s`,
      }))
    );
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
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
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
              Rakennan yrityksille toimivia ja näyttäviä kokonaisuuksia aina verkkosivuista räätälöityihin sovelluksiin ja täysin uusiin digitaalisiin palveluihin.
            </p>

 {/* Animated line */}
            <div
              className={`h-px bg-gradient-to-r from-[#f0f0f0] via-[#404040] to-transparent transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 w-full" : "opacity-0 w-0"
              }`}
            />


            {/* Profile image - mobile only */}
            <div
              className={`lg:hidden relative transition-all duration-1000 delay-500 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-xl opacity-50"
                style={{
                  transform: `translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)`,
                }}
              />
              <div
                className="relative rounded-3xl border border-[#2a2a2a] bg-[#111111]/60 backdrop-blur-xl overflow-hidden"
                style={{
                  transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 5}deg) rotateX(${(mousePosition.y - 0.5) * -5}deg)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/leoprofiilikuva.jpeg"
                    alt="Leo Apell"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#111111] to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-display text-[#f0f0f0]">Leo Apell</h3>
                      <p className="text-sm text-[#a0a0a0]">Perustaja & Omistaja</p>
                    </div>
                    <div className="flex items-center gap-2" />
                  </div>
                </div>
              </div>
            </div>

          
            {/* Story section */}
            <div 
              className={`space-y-6 transition-all duration-1000 delay-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Toimin täysin etänä ja hyödynnän uusimpia teknologioita tehokkaasti, minkä ansiosta pystyn tarjoamaan modernia web- ja sovelluskehitystä erittäin kilpailukykyiseen hintaan. En veloita vanhanaikaisista ja turhista työvaiheista. 
                </p>
                <p>
                  Halutessasi pääset mukaan seuraamaan työn etenemistä ja vaikuttamaan lopputulokseen omilla näkemyksilläsi. Vastaan kuitenkin aina kokonaisuudesta alusta loppuun, joten sinulle prosessi on vaivaton ja turvallinen. Jokainen projekti rakennetaan yksilöllisesti yrityksesi tavoitteiden mukaan.
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
                href="mailto:leo@leodigital.fi"
                className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors group"
              >
                <div className="p-2 rounded-full border border-[#2a2a2a] group-hover:border-[#404040] group-hover:bg-[#1a1a1a] transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">leo@leodigital.fi</span>
              </a>
              <div className="flex items-center gap-2 text-[#a0a0a0]">
                <div className="p-2 rounded-full border border-[#2a2a2a]">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-sm">Y-3452422-4</span>
              </div>
              <a
                href="https://wa.me/358452031377"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] transition-colors shadow-md shadow-black/30"
              >
                <svg viewBox="0 0 32 32" className="w-4 h-4 shrink-0 text-white" aria-hidden="true">
                  <path fill="currentColor" transform="translate(1.5 -0)" d="M19.11 17.53c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.28-.74.9-.9 1.08-.17.18-.33.2-.6.06-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.56-1.94-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.49.14-.17.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.64-1.55-.87-2.12-.23-.56-.46-.49-.64-.49h-.55c-.2 0-.49.07-.74.35-.26.28-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.88.14.18 1.97 3 4.77 4.2.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.64.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" />
                  <path fill="currentColor" d="M16.01 3.2c-7.03 0-12.75 5.7-12.75 12.7 0 2.23.6 4.41 1.73 6.33L3.2 28.8l6.75-1.77a12.8 12.8 0 0 0 6.06 1.54c7.03 0 12.75-5.7 12.75-12.7S23.04 3.2 16.01 3.2zm0 23.12c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.01 1.05 1.07-3.9-.25-.4a10.51 10.51 0 0 1-1.61-5.57c0-5.8 4.75-10.52 10.66-10.52 5.9 0 10.66 4.72 10.66 10.52 0 5.8-4.76 10.55-10.66 10.55z" />
                </svg>
                <span className="text-sm font-medium text-white">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right side - Profile with 3D effect */}
          <div
            className={`hidden lg:block relative transition-all duration-1000 delay-500 ${
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
              {/* Profile image */}
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/leoprofiilikuva.jpeg"
                  alt="Leo Apell"
                  fill
                  className="object-cover"
                  priority
                />
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
                    
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Contact form */}
        <div
          className={`mt-24 lg:mt-32 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="relative border border-[#f0f0f0] bg-[#1a1a1a]">
            <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Left content */}
                <div>
                  <span className="font-mono text-xs tracking-widest text-[#a0a0a0] uppercase block mb-6">
                    Yhteystiedot
                  </span>
                  <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-[#f0f0f0] mb-8 leading-[0.95]">
                    Pyydä tarjous
                    <br />
                    <span className="text-stroke">tai kysy lisää</span>
                  </h2>
                  <p className="text-xl text-[#a0a0a0] mb-12 leading-relaxed max-w-md">
                    Kerro lyhyesti mitä tarvitset. Vastaan mahdollisimman pian!
                  </p>
                  <div className="space-y-4 mb-8">
                    <a
                      href="https://wa.me/358452031377"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 border border-[#2a2a2a] hover:border-[#404040] bg-[#161616] transition-colors group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center border border-[#2a2a2a] text-[#f0f0f0] group-hover:bg-[#f0f0f0] group-hover:text-[#0d0d0d] transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-medium text-[#f0f0f0]">WhatsApp</span>
                        <span className="text-sm text-[#a0a0a0]">+358 45 203 1377</span>
                      </div>
                      <ArrowRight className="w-4 h-4 ml-auto text-[#f0f0f0] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                      href="mailto:leo@leodigital.fi"
                      className="flex items-center gap-4 p-4 border border-[#2a2a2a] hover:border-[#404040] bg-[#161616] transition-colors group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center border border-[#2a2a2a] text-[#f0f0f0] group-hover:bg-[#f0f0f0] group-hover:text-[#0d0d0d] transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-medium text-[#f0f0f0]">Sähköposti</span>
                        <span className="text-sm text-[#a0a0a0]">leo@leodigital.fi</span>
                      </div>
                      <ArrowRight className="w-4 h-4 ml-auto text-[#f0f0f0] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>

                {/* Right - Form */}
                <div>
                 <form onSubmit={async (e) => { e.preventDefault(); await fetch("https://formsubmit.co/ajax/leo@leodigital.fi", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(contactForm) }); }} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="leo-name" className="block text-sm font-medium text-[#f0f0f0] mb-2">Nimi *</label>
                        <input
                          type="text"
                          id="leo-name"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                          placeholder="Nimesi"
                        />
                      </div>
                      <div>
                        <label htmlFor="leo-company" className="block text-sm font-medium text-[#f0f0f0] mb-2">Yritys</label>
                        <input
                          type="text"
                          id="leo-company"
                          value={contactForm.company}
                          onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                          className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                          placeholder="Yrityksen nimi (valinnainen)"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="leo-email" className="block text-sm font-medium text-[#f0f0f0] mb-2">Sähköposti *</label>
                        <input
                          type="email"
                          id="leo-email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                          placeholder="sahkoposti@esimerkki.fi"
                        />
                      </div>
                      <div>
                        <label htmlFor="leo-phone" className="block text-sm font-medium text-[#f0f0f0] mb-2">Puhelin</label>
                        <input
                          type="tel"
                          id="leo-phone"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                          placeholder="+358 40 123 4567"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="leo-message" className="block text-sm font-medium text-[#f0f0f0] mb-2">Viesti *</label>
                      <textarea
                        id="leo-message"
                        required
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors resize-none"
                        placeholder="Kerro mitä tarvitset..."
                      />
                    </div>
                    <p className="text-xs text-[#a0a0a0]">
                      Lähettämällä lomakkeen hyväksyt, että otamme sinuun yhteyttä.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#f0f0f0] hover:bg-[#e0e0e0] text-[#0d0d0d] font-medium rounded-full transition-colors group"
                    >
                      Lähetä tarjouspyyntö
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Decorative corners */}
            <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-[#2a2a2a]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-[#2a2a2a]" />
          </div>
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
