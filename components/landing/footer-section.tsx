"use client";

import { Mail, Building2 } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Paketit: [
    { name: "Perus", href: "#paketit" },
    { name: "Plus", href: "#paketit" },
   
  ],
  Yritys: [
    { name: "Tietoa meistä", href: "/leodigital" },
    { name: "Yhteystiedot", href: "#yhteystiedot" },
  ],
};

export function FooterSection() {
  return (
    <footer className="relative border-t border-[#2a2a2a] bg-[#0d0d0d]">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-10 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-10 lg:py-12">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Brand Column */}
            <div className="max-w-xs">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display text-[#f0f0f0]">Leo Digital</span>
              </a>

              <p className="text-[#a0a0a0] leading-relaxed max-w-xs">
                Suunnittelen ja toteutan moderneja verkkosivuja sekä huolehdin koko digitaalisesta näkyvyydestäsi.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:leo@leodigital.fi" className="flex items-center gap-3 text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                leo@leodigital.fi
              </a>
              <div className="flex items-center gap-3 text-sm text-[#a0a0a0]">
                <Building2 className="w-4 h-4 shrink-0" />
                Y-3452422-4
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

            {/* Link Columns */}
            <div className="flex gap-16">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="text-sm font-medium text-[#f0f0f0] mb-6">{title}</h3>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors inline-flex items-center gap-2"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#a0a0a0]">
            2025 Leo Digital. Kaikki oikeudet pidätetään.
          </p>

          <div className="flex items-center gap-6 text-sm text-[#a0a0a0]">
            <a href="/kayttoehdot" className="hover:text-[#f0f0f0] transition-colors">Käyttöehdot ja tietosuoja</a>
          </div>
        </div>
      </div>
    </footer>
  );
}