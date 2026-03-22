"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Räätälöidyt Verkkosivut",
    description: "Jokainen sivu koodataan yksilöllisesti alusta alkaen - ei valmispohjia. Tämä takaa nopean latausajan, täyden muokattavuuden ja erottuvan ulkoasun.",
    visual: "code",
  },
  {
    number: "02",
    title: "SEO & Hakukonenäkyvyys",
    description: "Hakukoneoptimointi huomioidaan jokaisessa projektissa alusta alkaen. Oikeat avainsanat, tekninen SEO ja rakenne, joka miellyttää Googlea.",
    visual: "seo",
  },
  {
    number: "03",
    title: "Mobiilioptimoidut Sivut",
    description: "Sivut toimivat moitteettomasti kaikilla laitteilla. Responsiivinen suunnittelu varmistaa, että asiakkaasi löytävät sinut puhelimella, tabletilla ja tietokoneella.",
    visual: "mobile",
  },
  {
    number: "04",
    title: "Tekoäly-botti 24/7",
    description: "Älykäs asiakaspalvelubotti vastaa kysymyksiin ympäri vuorokauden. Toimii WhatsAppissa, nettisivuilla tai Instagramissa - ohjaa tarvittaessa ihmiselle.",
    visual: "ai",
  },
];

function CodeVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="codeClip">
          <rect x="30" y="20" width="140" height="120" rx="4" />
        </clipPath>
      </defs>
      
      <rect x="30" y="20" width="140" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      
      <g clipPath="url(#codeClip)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="40"
            y={35 + i * 16}
            width="120"
            height="10"
            rx="2"
            fill="currentColor"
            opacity="0.15"
          >
            <animate
              attributeName="opacity"
              values="0.15;0.8;0.15"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              values="20;120;20"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>
      
      <circle cx="100" cy="155" r="3" fill="currentColor" opacity="0.3">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function SEOVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <circle cx="100" cy="80" r="12" fill="currentColor">
        <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 50;
        return (
          <g key={i}>
            <line
              x1="100"
              y1="80"
              x2={100 + Math.cos(angle) * radius}
              y2={80 + Math.sin(angle) * radius}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </line>
            
            <circle
              cx={100 + Math.cos(angle) * radius}
              cy={80 + Math.sin(angle) * radius}
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="6;8;6"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}
      
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
      {/* Phone outline */}
      <rect x="70" y="20" width="60" height="120" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      
      {/* Screen */}
      <rect x="75" y="35" width="50" height="90" rx="2" fill="currentColor" opacity="0.1">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="2s" repeatCount="indefinite" />
      </rect>
      
      {/* Content lines */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x="80"
          y={45 + i * 18}
          width="40"
          height="8"
          rx="2"
          fill="currentColor"
          opacity="0.3"
        >
          <animate
            attributeName="width"
            values="20;40;20"
            dur="2s"
            begin={`${i * 0.2}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
      
      {/* Home button */}
      <circle cx="100" cy="130" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function AIVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Chat bubble */}
      <path
        d="M 50 40 L 150 40 Q 160 40 160 50 L 160 100 Q 160 110 150 110 L 80 110 L 60 130 L 60 110 L 50 110 Q 40 110 40 100 L 40 50 Q 40 40 50 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Typing dots */}
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={85 + i * 15}
          cy="75"
          r="5"
          fill="currentColor"
        >
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="1s"
            begin={`${i * 0.2}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
      
      {/* Pulse effect */}
      <circle cx="100" cy="75" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="20;50" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "code":
      return <CodeVisual />;
    case "seo":
      return <SEOVisual />;
    case "mobile":
      return <MobileVisual />;
    case "ai":
      return <AIVisual />;
    default:
      return <CodeVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
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
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="palvelut"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Palvelut
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Kaikki mitä tarvitset.
            <br />
            <span className="text-muted-foreground">Ei turhaa monimutkaisuutta.</span>
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
