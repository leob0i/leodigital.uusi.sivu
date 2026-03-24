"use client";

import { Check, Receipt, Globe, Smartphone, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function StarterHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", () => setVideoLoaded(true));
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 lg:py-40 overflow-hidden">
      {/* Fallback Image - shown while video loads */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
        style={{
          backgroundImage: "url('/images/starter-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 z-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
        poster="/images/starter-bg.jpg"
      >
        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-[#0d0d0d]/70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Large Glass Box */}
        <div className="relative w-full bg-[#1a1a1a]/40 backdrop-blur-xl border border-[#2a2a2a] rounded-3xl p-8 lg:p-12 xl:p-16">
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <span className="inline-block font-mono text-xs tracking-widest text-[#a0a0a0] uppercase mb-6 px-3 py-1 border border-[#2a2a2a] rounded-full">
                ALKU
              </span>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#f0f0f0] mb-6">
                Yrityksesi nettiin,
                <br />
                <span className="text-stroke">helposti ja edullisesti</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-[#a0a0a0] mb-8 leading-relaxed">
                Tarvitsetko yksinkertaisen ja toimivan perussivun yrityksellesi? ALKU-paketti on kevyt ratkaisu, joka tuo yrityksesi verkkoon nopeasti ja edullisesti. Sinä voit keskittyä liiketoimintaasi!
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <Receipt className="w-5 h-5 text-[#f0f0f0]" />
                  </div>
                  <div>
                    <p className="text-[#f0f0f0] font-medium">Selkeä hinnoittelu</p>
                    <p className="text-sm text-[#a0a0a0]">Kaikki laskut yhdestä paikkaa ilman piilokuluja</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#f0f0f0]" />
                  </div>
                  <div>
                    <p className="text-[#f0f0f0] font-medium">Domain + Hosting</p>
                    <p className="text-sm text-[#a0a0a0]">Hoidettuna puolestasi</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-[#f0f0f0]" />
                  </div>
                  <div>
                    <p className="text-[#f0f0f0] font-medium">Mobiili & SEO</p>
                    <p className="text-sm text-[#a0a0a0]">Hakukoneystävällisyys alusta asti</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-[#f0f0f0]" />
                  </div>
                  <div>
                    <p className="text-[#f0f0f0] font-medium">Skaalautuva ratkaisu</p>
                    <p className="text-sm text-[#a0a0a0]">Mahdollisuus laajentaa sivua tai pakettia</p>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#f0f0f0]" />
                  <span className="text-[#a0a0a0]">Ei piilokuluja — kaikki sisältyy kuukausihintaan</span>
                </div>

                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#f0f0f0]" />
                  <span className="text-[#a0a0a0]">Nopea käyttöönotto — sivut toiminnassa heti</span>
                </div>
              </div>
            </div>

            {/* Right - Price Box */}
            <div className="lg:w-80 shrink-0">
              <div className="bg-[#161616]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-2xl p-8">
                <span className="font-mono text-xs tracking-widest text-[#a0a0a0] uppercase block mb-4">
                  Hinnoittelu
                </span>
                
                <div className="mb-2">
                  <span className="text-sm text-[#a0a0a0] block mb-1">Aloitus</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl lg:text-6xl text-[#f0f0f0]">
                      299
                    </span>
                    <span className="text-2xl text-[#a0a0a0]">€</span>
                  </div>
                </div>

                <div className="h-px bg-[#2a2a2a] my-4" />

                <div className="mb-4">
                  <span className="text-sm text-[#a0a0a0] block mb-1">Sen jälkeen</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl text-[#f0f0f0]">
                      17
                    </span>
                    <span className="text-lg text-[#a0a0a0]">€</span>
                    <span className="text-sm text-[#a0a0a0]">/kk</span>
                  </div>
                </div>
                
                <p className="text-xs text-[#a0a0a0] mb-6">
                  + ALV 25.5%
                </p>

                <p className="text-[#a0a0a0] text-sm mb-6 leading-relaxed">
                  Kevyt aloituspaketti yrityksille, jotka tarvitsevat yksinkertaisen perussivun ilman monimutkaisia ominaisuuksia.
                </p>

                <a
                  href="#yhteystiedot"
                  className="w-full py-4 flex items-center justify-center gap-2 bg-[#f0f0f0] text-[#0d0d0d] font-medium hover:bg-[#e0e0e0] transition-colors rounded-xl"
                >
                  Ota yhteyttä
                  <span className="text-lg">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
