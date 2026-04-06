"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await fetch("https://formsubmit.co/ajax/leo@leodigital.fi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });
};

  return (
    <section id="yhteystiedot" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden border-t border-[#2a2a2a] bg-[#0d0d0d]">
      <Image
        src="/images/punanen.tausta.webp"
        alt=""
        fill
        className="object-cover opacity-20"
        priority={false}
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-[#f0f0f0] bg-[#1a1a1a] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(240,240,240,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left content */}
              <div>
                <span className="font-mono text-xs tracking-widest text-[#a0a0a0] uppercase block mb-6">
                  Yhteystiedot
                </span>
                <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-[#f0f0f0] mb-8 leading-[0.95]">
                  Pyydä maksuton suunnitelma
                </h2>

                <p className="text-xl text-[#a0a0a0] mb-12 leading-relaxed max-w-md">
                  Maksuton suunnitelma sisältää karkean suunnitelman työstä ja arvioidun hinnan, eikä se sido ostopäätökseen. Voit myös kysyä mitä tahansa, vastaan mahdollisimman pian!
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#f0f0f0] mb-2">Nimi *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                        placeholder="Nimesi"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#f0f0f0] mb-2">Yritys</label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                        placeholder="Yrityksen nimi (valinnainen)"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#f0f0f0] mb-2">Sähköposti *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                        placeholder="sahkoposti@esimerkki.fi"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#f0f0f0] mb-2">Puhelin</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors"
                        placeholder="+358 40 123 4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#f0f0f0] mb-2">Viesti *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] focus:border-[#f0f0f0] text-[#f0f0f0] placeholder-[#606060] outline-none transition-colors resize-none"
                      placeholder="Kerro mitä tarvitset..."
                    />
                  </div>

                  <p className="text-xs text-[#a0a0a0]">
                    Lähettämällä lomakkeen hyväksyt, että otamme sinuun yhteyttä.
                  </p>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-[#f0f0f0] hover:bg-[#e0e0e0] text-[#0d0d0d] px-8 h-14 text-base rounded-full group"
                  >
                    Lähetä tarjouspyyntö
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-[#2a2a2a]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-[#2a2a2a]" />
        </div>
      </div>
    </section>
  );
}
