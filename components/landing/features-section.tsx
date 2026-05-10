"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Kilpailukyky ja näkyvyys",
    description: "Jokaisen päivityksen yhteydessä käymme aina läpi hakusanat jotta yrityksesi pysyy aina kilpailukykyisenä myös tekoälyyn pohjautuvissa hauissa. Näin sivusi pysyy aina \"freshin\" näköisenä.",
    visual: "ranking",
  },
  {
    number: "02",
    title: "Huoleton yhteistyö",
    description: "Tavoitteena on tehdä verkkopuolesta yrittäjälle mahdollisimman yksinkertainen. Saat yhden yhteyshenkilön verkkosivuihin, näkyvyyteen ja digitaaliseen kehitykseen liittyvissä asioissa ilman turhaa teknistä säätöä.",
    visual: "collaboration",
  },
  {
    number: "03",
    title: "Jatkuva kehitys",
    description: "Sivustoa voidaan päivittää myös julkaisun jälkeen ilman että kaikkea tarvitsee rakentaa uudelleen. Uudet palvelut, sisältömuutokset, lisäsivut ja parannukset onnistuvat hallitusti yrityksen kasvaessa.",
    visual: "development",
  },
];

function RankingVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Search result rows */}
      {[
        { y: 22, w: 88, primary: true },
        { y: 62, w: 64, primary: false },
        { y: 102, w: 72, primary: false },
      ].map((item, i) => (
        <g key={i}>
          <rect
            x="22"
            y={item.y}
            width="130"
            height="28"
            rx="5"
            fill="currentColor"
            opacity={item.primary ? 0.18 : 0.07}
            stroke="currentColor"
            strokeWidth={item.primary ? 1 : 0.5}
            strokeOpacity={item.primary ? 0.6 : 0.2}
          >
            {item.primary && (
              <animate
                attributeName="opacity"
                values="0.18;0.38;0.18"
                dur="2.5s"
                repeatCount="indefinite"
              />
            )}
          </rect>
          <text
            x="33"
            y={item.y + 18}
            fill="currentColor"
            fillOpacity={item.primary ? 0.9 : 0.3}
            fontSize="9"
            fontFamily="monospace"
            fontWeight={item.primary ? "bold" : "normal"}
          >
            #{i + 1}
          </text>
          <rect
            x="55"
            y={item.y + 10}
            width={item.w}
            height="8"
            rx="2"
            fill="currentColor"
            opacity={item.primary ? 0.5 : 0.15}
          />
        </g>
      ))}
      {/* Rising arrow */}
      <line x1="172" y1="138" x2="172" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.25" strokeDasharray="3,3" />
      <polygon points="172,22 167,33 177,33" fill="currentColor" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
      </polygon>
      {/* Pulse on #1 row */}
      <rect x="22" y="22" width="130" height="28" rx="5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="opacity" values="0.4;0" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="x" values="22;16" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="y" values="22;16" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="width" values="130;142" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="height" values="28;40" dur="2.5s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

function CollaborationVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Center hub */}
      <circle cx="100" cy="80" r="20" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4">
        <animate attributeName="r" values="20;23;20" dur="2.5s" repeatCount="indefinite" />
      </circle>
      {/* Person head */}
      <circle cx="100" cy="74" r="6" fill="currentColor" opacity="0.7" />
      {/* Person shoulders */}
      <path d="M89 88 Q100 84 111 88" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.7" />

      {/* Spoke lines — coordinates pre-computed to avoid SSR/client float mismatch */}
      {[
        { x2: 136.77, y2: 116.77 },
        { x2: 63.23,  y2: 116.77 },
        { x2: 63.23,  y2: 43.23  },
        { x2: 136.77, y2: 43.23  },
      ].map((pt, i) => (
        <line
          key={i}
          x1="100"
          y1="80"
          x2={pt.x2}
          y2={pt.y2}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.15"
        >
          <animate
            attributeName="opacity"
            values="0.15;0.5;0.15"
            dur="2s"
            begin={`${i * 0.5}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}

      {/* Satellite nodes — coordinates pre-computed to avoid SSR/client float mismatch */}
      {[
        { cx: 140.31, cy: 120.31 },
        { cx: 59.69,  cy: 120.31 },
        { cx: 59.69,  cy: 39.69  },
        { cx: 140.31, cy: 39.69  },
      ].map((pt, i) => (
        <circle
          key={i}
          cx={pt.cx}
          cy={pt.cy}
          r="9"
          fill="currentColor"
          opacity="0.08"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.35"
        >
          <animate
            attributeName="opacity"
            values="0.08;0.22;0.08"
            dur="2s"
            begin={`${i * 0.5}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Ripple pulse from center */}
      <circle cx="100" cy="80" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="20;65" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function DevelopmentVisual() {
  const layers = [
    { width: 88, offsetX: 56 },
    { width: 104, offsetX: 48 },
    { width: 116, offsetX: 42 },
    { width: 126, offsetX: 37 },
  ];
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Static stacked layers from bottom */}
      {layers.map((l, i) => (
        <rect
          key={i}
          x={l.offsetX}
          y={118 - i * 24}
          width={l.width}
          height="16"
          rx="3"
          fill="currentColor"
          opacity={0.12 + i * 0.06}
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.25"
        />
      ))}

      {/* New layer dropping in */}
      <rect
        x="30"
        y="22"
        width="140"
        height="16"
        rx="3"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.8"
        opacity="0"
      >
        <animate
          attributeName="y"
          values="10;22;22;22"
          keyTimes="0;0.35;0.7;1"
          dur="2.2s"
          begin="0.3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0.55;0.55;0"
          keyTimes="0;0.3;0.65;1"
          dur="2.2s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Plus icon above the incoming layer */}
      <line x1="100" y1="4" x2="100" y2="14" stroke="currentColor" strokeWidth="2" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.75;0.3" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
      </line>
      <line x1="95" y1="9" x2="105" y2="9" stroke="currentColor" strokeWidth="2" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.75;0.3" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}


function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "ranking":
      return <RankingVisual />;
    case "collaboration":
      return <CollaborationVisual />;
    case "development":
      return <DevelopmentVisual />;
    default:
      return <RankingVisual />;
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
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-[#2a2a2a]">
        
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display text-[#f0f0f0] mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-[#a0a0a0] leading-relaxed">
              {feature.description}
            </p>
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
      className="relative pt-24 lg:pt-32 pb-8 lg:pb-10 bg-[#0a0a0a]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight text-[#f0f0f0] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Kumppani yrityksellesi helpottamaan arkeasi ja edistämään liiketoimintaasi.
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
