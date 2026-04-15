"use client";

import { useState } from "react";
import { Send, User } from "lucide-react";

export function PartnershipContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="yhteystiedot" className="py-24 lg:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#f0f0f0] mb-6">
            Ryhdy <span className="text-[#d4af37]">kumppaniksemme</span>
          </h2>
          <p className="text-lg text-[#a0a0a0] max-w-2xl mx-auto">
            Ota yhteyttä ja kerromme lisää All in one Kumppanuudesta
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left - Leo Profile */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              {/* Profile Card */}
              <div className="bg-[#111111]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl p-8">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-2xl flex items-center justify-center overflow-hidden">
                  <User className="w-16 h-16 text-[#404040]" />
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl text-[#f0f0f0] mb-2">Leo Apell</h3>
                  <p className="text-[#d4af37] text-sm font-medium mb-1">Perustaja & Omistaja</p>
                  <p className="text-[#a0a0a0] text-sm">Leo Digital</p>
                </div>

                <div className="border-t border-[#2a2a2a] pt-6">
                  <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                    Uskon vahvasti siihen, että paras tapa rakentaa liiketoimintaa on aito kumppanuus. 
                    En ole vain palveluntarjoaja vaan haluan olla osa yrityksesi kasvutarinaa.
                  </p>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">
                    Kumppanuus tarkoittaa minulle sitä, että menestyksesi on myös minun menestymistäni. 
                    Siksi panostamme jatkuvaan kehitykseen ja läpinäkyvään yhteistyöhön.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Large Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#111111]/60 backdrop-blur-xl border border-[#2a2a2a] rounded-3xl p-8 md:p-12">
              <h3 className="font-display text-2xl md:text-3xl text-[#f0f0f0] mb-8">
                Kerro yrityksestäsi
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#f0f0f0] mb-3">
                      Nimi *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl text-[#f0f0f0] placeholder-[#505050] focus:outline-none focus:border-[#d4af37] transition-colors text-base"
                      placeholder="Etunimi Sukunimi"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#f0f0f0] mb-3">
                      Sähköposti *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl text-[#f0f0f0] placeholder-[#505050] focus:outline-none focus:border-[#d4af37] transition-colors text-base"
                      placeholder="nimi@yritys.fi"
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#f0f0f0] mb-3">
                      Puhelinnumero
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl text-[#f0f0f0] placeholder-[#505050] focus:outline-none focus:border-[#d4af37] transition-colors text-base"
                      placeholder="+358 40 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#f0f0f0] mb-3">
                      Yrityksen nimi
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-5 py-4 bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl text-[#f0f0f0] placeholder-[#505050] focus:outline-none focus:border-[#d4af37] transition-colors text-base"
                      placeholder="Yritys Oy"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#f0f0f0] mb-3">
                    Viesti *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl text-[#f0f0f0] placeholder-[#505050] focus:outline-none focus:border-[#d4af37] transition-colors resize-none text-base"
                    placeholder="Kerro yrityksestäsi, nykytilanteesta ja tavoitteistasi. Mitä haasteita haluaisit ratkaista? Millaista kumppanuutta etsit?"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-5 bg-[#d4af37] text-[#0d0d0d] font-semibold hover:bg-[#c9a432] transition-colors rounded-full flex items-center justify-center gap-3 group text-lg"
                  >
                    Lähetä viesti
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                <p className="text-sm text-[#606060] pt-2">
                  Vastaamme yhteydenottoihin yleensä saman päivän aikana.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
