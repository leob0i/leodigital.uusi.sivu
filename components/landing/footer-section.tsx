"use client";

import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Palvelut: [
    { name: "Verkkosivut", href: "#palvelut" },
    { name: "Ylläpito", href: "#yllapito" },
    { name: "SEO", href: "#palvelut" },
    { name: "Tekoälybotit", href: "#palvelut" },
  ],
  Paketit: [
    { name: "Perus", href: "#paketit" },
    { name: "Plus", href: "#paketit" },
    { name: "Pro", href: "#paketit" },
    { name: "Premium", href: "#paketit" },
  ],
  Yritys: [
    { name: "Tietoa meistä", href: "#meista" },
    { name: "Yhteystiedot", href: "#yhteystiedot" },
  ],
};

const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/358452031377" },
  { name: "LinkedIn", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display">Leo Digital</span>
              </a>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Suunnittelen ja toteutan moderneja verkkosivuja sekä huolehdin koko digitaalisesta näkyvyydestäsi.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <a href="tel:+358452031377" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  +358 45 203 1377
                </a>
                <a href="mailto:info@leodigital.fi" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  info@leodigital.fi
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  Suomi
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
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

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2025 Leo Digital. Kaikki oikeudet pidätetään.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Tietosuoja</a>
            <a href="#" className="hover:text-foreground transition-colors">Käyttöehdot</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
