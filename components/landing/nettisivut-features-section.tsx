"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Räätälöidyt Verkkosivut",
    description:
      "Jokainen sivu räätälöidään sinun yrityksellesi sopivaksi. Ulkoasu, sisältö ja rakenne tehdään brändisi mukaan. Tämä takaa nopean latausajan, täyden muokattavuuden ja siistin, ammattimaisen ulkoasun.",
    visual: "code",
  },
  {
    number: "02",
    title: "SEO ja AI hakukonenäkyvyys",
    description:
      "Hakukoneoptimointi huomioidaan jokaisessa projektissa alusta alkaen. Oikeat avainsanat, tekninen SEO ja rakenne, joka miellyttää Googlea ja tekoälypohjaista hakua.",
    visual: "seo",
  },
  {
    number: "03",
    title: "Mobiilioptimoidut Sivut",
    description:
      "Sivut toimivat moitteettomasti kaikilla laitteilla. Responsiivinen suunnittelu varmistaa, että asiakkaasi löytävät sinut puhelimella, tabletilla ja tietokoneella.",
    visual: "mobile",
  },
  {
    number: "04",
    title: "Jatkuva ylläpito",
    description:
      "Sivun päivitykset helposti ja nopeasti WhatsApp:in välityksellä, kuten uudet kuvat, palvelu tai puhelinnumeron vaihdos. Huolehdin myös domainista, hostingista, varmuuskopioista ja muusta digistä puolestasi.",
    visual: "update",
    link: "/yllapito",
    linkLabel: "Lue lisää ylläpidosta",
  },
];

function CodeVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="nettisivutCodeClip">
          <rect x="30" y="20" width="140" height="120" rx="4" />
        </clipPath>
      </defs>
      <rect x="30" y="20" width="140" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <g clipPath="url(#nettisivutCodeClip)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x="40" y={35 + i * 16} width="120" height="10" rx="2" fill="currentColor" opacity="0.15">
            <animate attributeName="opacity" values="0.15;0.8;0.15" dur="2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
            <animate attributeName="width" values="20;120;20" dur="2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
          </rect>
        ))}
      </g>
      <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// Coordinates pre-computed to avoid SSR/client float mismatch
const seoPoints = [
  { x2: 150.00, y2: 80.00 },
  { x2: 125.00, y2: 123.30 },
  { x2: 75.00,  y2: 123.30 },
  { x2: 50.00,  y2: 80.00 },
  { x2: 75.00,  y2: 36.70 },
  { x2: 125.00, y2: 36.70 },
];

function SEOVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <circle cx="100" cy="80" r="12" fill="currentColor">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
      </circle>
      {seoPoints.map((pt, i) => (
        <g key={i}>
          <line x1="100" y1="80" x2={pt.x2} y2={pt.y2} stroke="currentColor" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </line>
          <circle cx={pt.x2} cy={pt.y2} r="6" fill="none" stroke="currentColor" strokeWidth="2">
            <animate attributeName="r" values="6;8;6" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      <circle cx="100" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="20;60" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function MobileVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <rect x="70" y="20" width="60" height="120" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="75" y="35" width="50" height="90" rx="2" fill="currentColor" opacity="0.1">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
      </rect>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="80" y={45 + i * 18} width="40" height="8" rx="2" fill="currentColor" opacity="0.3">
          <animate attributeName="width" values="20;40;20" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
        </rect>
      ))}
      <circle cx="100" cy="130" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function UpdateVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <circle cx="100" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      <path
        d="M 100 45 A 35 35 0 1 1 65 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <animateTransform attributeName="transform" type="rotate" from="0 100 80" to="360 100 80" dur="2.5s" repeatCount="indefinite" />
      </path>
      <polygon points="65,80 55,68 76,68" fill="currentColor">
        <animateTransform attributeName="transform" type="rotate" from="0 100 80" to="360 100 80" dur="2.5s" repeatCount="indefinite" />
      </polygon>
      {[0, 1, 2].map((i) => (
        <rect key={i} x="76" y={70 + i * 10} width="48" height="6" rx="3" fill="currentColor" opacity="0.25">
          <animate attributeName="opacity" values="0.25;0.6;0.25" dur="1.8s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "code":   return <CodeVisual />;
    case "seo":    return <SEOVisual />;
    case "mobile": return <MobileVisual />;
    case "update": return <UpdateVisual />;
    default:       return <CodeVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-[#2a2a2a]">
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display text-[#f0f0f0] mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-[#a0a0a0] leading-relaxed">{feature.description}</p>
            {"link" in feature && feature.link && (
              <div className="mt-6">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 text-base rounded-full border-[#f0f0f0]/20 text-[#f0f0f0] hover:bg-[#f0f0f0]/5 hover:border-[#f0f0f0]/40"
                  asChild
                >
                  <a href={feature.link}>
                    {feature.linkLabel}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            )}
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-[#f0f0f0]">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NettisivutFeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/tumma.tausta.webp" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#0a0a0a]/92" />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 lg:mb-24">
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight text-[#f0f0f0] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Sivut jotka kasvavat yrityksesi mukana
          </h2>
        </div>
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
