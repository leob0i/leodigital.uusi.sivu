"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinksFi = [
  { name: "Nettisivut", href: "/nettisivut" },
  { name: "Ylläpito", href: "/yllapito" },
  { name: "Autoala", href: "/autokorjaamonsivut" },
  { name: "Kuka on Leo?", href: "/leodigital" },
  { name: "Työni", href: "#asiakkaat" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = navLinksFi;

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return; // Let normal links work as-is
    e.preventDefault();
    const sectionId = href.slice(1);
    if (pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? "top-4 left-4 right-4" 
          : "top-0 left-0 right-0"
      }`}
    >
      <nav 
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#111111]/80 backdrop-blur-xl border border-[#2a2a2a] rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-0.5 group">
            <img src="/images/leodigital.logo.webp" alt="Leo Digital logo" className={`transition-all duration-500 object-contain ${isScrolled ? "h-10" : "h-14"}`} />
            <span className={`font-display tracking-tight transition-all duration-500 text-[#f0f0f0] ${isScrolled ? "text-xl" : "text-2xl"}`}>Leo Digital</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#f0f0f0] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            {/* <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 text-[#a0a0a0] hover:text-[#f0f0f0] transition-all duration-500 ${isScrolled ? "text-xs" : "text-sm"}`}
            >
              <Globe className="w-4 h-4" />
              {language === 'fi' ? 'EN' : 'FI'}
            </button> */}
            <Button
              size="sm"
              className={`bg-[#f0f0f0] hover:bg-[#e0e0e0] text-[#0d0d0d] rounded-full transition-all duration-500 ${isScrolled ? "px-4 h-8 text-xs" : "px-6"}`}
              onClick={() => {
                if (pathname === "/") {
                  document.getElementById("yhteystiedot")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  router.push("/#yhteystiedot");
                }
              }}
            >
              Ota yhteyttä
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#f0f0f0]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>
      
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[#0d0d0d] z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          {/* Logo Link */}
          <a
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 left-6 p-2 flex items-center gap-0.5 font-display text-xl text-[#f0f0f0]"
          >
            <img src="/images/leodigital.logo.webp" alt="Leo Digital logo" className="h-10 object-contain" />
            Leo Digital
          </a>
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-[#f0f0f0]"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { handleAnchorClick(e, link.href); setIsMobileMenuOpen(false); }}
                className={`text-5xl font-display text-[#f0f0f0] hover:text-[#a0a0a0] transition-all duration-500 ${
                  isMobileMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Bottom CTAs */}
          <div className={`flex flex-col gap-4 pt-8 border-t border-[#2a2a2a] transition-all duration-500 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <a
              href="https://wa.me/358452031377"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] transition-colors shadow-md shadow-black/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5 text-white shrink-0" aria-hidden="true">
                <path fill="currentColor" transform="translate(1.5 -0)" d="M19.11 17.53c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.28-.74.9-.9 1.08-.17.18-.33.2-.6.06-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.56-1.94-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.49.14-.17.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.64-1.55-.87-2.12-.23-.56-.46-.49-.64-.49h-.55c-.2 0-.49.07-.74.35-.26.28-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.88.14.18 1.97 3 4.77 4.2.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.64.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" />
                <path fill="currentColor" d="M16.01 3.2c-7.03 0-12.75 5.7-12.75 12.7 0 2.23.6 4.41 1.73 6.33L3.2 28.8l6.75-1.77a12.8 12.8 0 0 0 6.06 1.54c7.03 0 12.75-5.7 12.75-12.7S23.04 3.2 16.01 3.2zm0 23.12c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.01 1.05 1.07-3.9-.25-.4a10.51 10.51 0 0 1-1.61-5.57c0-5.8 4.75-10.52 10.66-10.52 5.9 0 10.66 4.72 10.66 10.52 0 5.8-4.76 10.55-10.66 10.55z" />
              </svg>
              <span className="text-base font-medium text-white">WhatsApp</span>
            </a>
            {/* <Button
              variant="outline"
              className="flex-1 rounded-full h-14 text-base border-[#2a2a2a] text-[#f0f0f0] hover:bg-[#1a1a1a]"
              onClick={() => {
                toggleLanguage();
                setIsMobileMenuOpen(false);
              }}
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'fi' ? 'English' : 'Suomi'}
            </Button> */}
            <Button
              className="w-full bg-[#f0f0f0] text-[#0d0d0d] rounded-full h-14 text-base hover:bg-[#e0e0e0]"
              onClick={() => {
                if (pathname === "/") {
                  document.getElementById("yhteystiedot")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  router.push("/#yhteystiedot");
                }
                setIsMobileMenuOpen(false);
              }}
            >
              Ota yhteyttä
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
