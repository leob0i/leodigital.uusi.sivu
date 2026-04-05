"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

const navLinksFi = [
  { name: "Palvelut", href: "#palvelut" },
  { name: "Ylläpito", href: "#yllapito" },
  { name: "Paketit", href: "#paketit" },
  { name: "Kuka on Leo?", href: "/leodigital" },
  { name: "Yhteystiedot", href: "#yhteystiedot" },
];

const navLinksEn = [
  { name: "Services", href: "#palvelut" },
  { name: "Maintenance", href: "#yllapito" },
  { name: "Packages", href: "#paketit" },
  { name: "Who is Leo?", href: "/leodigital" },
  { name: "Contact", href: "#yhteystiedot" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'fi' | 'en'>('fi');
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = language === 'fi' ? navLinksFi : navLinksEn;

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

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fi' ? 'en' : 'fi');
  };

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
          <a href="/" className="flex items-center gap-2 group">
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
          <div className={`flex gap-4 pt-8 border-t border-[#2a2a2a] transition-all duration-500 ${
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
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
              className="flex-1 bg-[#f0f0f0] text-[#0d0d0d] rounded-full h-14 text-base hover:bg-[#e0e0e0]"
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
