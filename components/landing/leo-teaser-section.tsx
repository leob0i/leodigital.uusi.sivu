"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function LeoTeaserSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-[#2a2a2a] overflow-hidden bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

          {/* Left: text content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-[#f0f0f0]">
              Leo Digital
            </h2>
            <p className="text-xl lg:text-2xl font-display tracking-tight text-[#f0f0f0]">
              Hei, olen Leo Apell, Leo Digitalin takana,
            </p>

            <p className="text-lg text-[#a0a0a0] leading-relaxed">
              Rakennan yrityksille toimivia ja näyttäviä verkkosivuja sekä räätälöityjä digitaalisia palveluita.
            </p>

            <div className="h-px bg-gradient-to-r from-[#f0f0f0] via-[#404040] to-transparent" />

            <div className="space-y-3 text-[#a0a0a0] leading-relaxed">
              <p>
                Toimin täysin etänä hyödyntäen uusimpia teknologioita, minkä ansiosta tarjoan modernia verkkokehitystä kilpailukykyiseen hintaan.
              </p>
              <p>
                Jokainen projekti rakennetaan yksilöllisesti yrityksesi tavoitteiden mukaan – sinulle prosessi on vaivaton ja turvallinen.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://wa.me/358452031377"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] transition-colors shadow-md shadow-black/30"
              >
                <svg viewBox="0 0 32 32" className="w-4 h-4 shrink-0 text-white" aria-hidden="true">
                  <path fill="currentColor" transform="translate(1.5 -0)" d="M19.11 17.53c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.28-.74.9-.9 1.08-.17.18-.33.2-.6.06-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.56-1.94-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.49.14-.17.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.64-1.55-.87-2.12-.23-.56-.46-.49-.64-.49h-.55c-.2 0-.49.07-.74.35-.26.28-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.88.14.18 1.97 3 4.77 4.2.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.64.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z" />
                  <path fill="currentColor" d="M16.01 3.2c-7.03 0-12.75 5.7-12.75 12.7 0 2.23.6 4.41 1.73 6.33L3.2 28.8l6.75-1.77a12.8 12.8 0 0 0 6.06 1.54c7.03 0 12.75-5.7 12.75-12.7S23.04 3.2 16.01 3.2zm0 23.12c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.01 1.05 1.07-3.9-.25-.4a10.51 10.51 0 0 1-1.61-5.57c0-5.8 4.75-10.52 10.66-10.52 5.9 0 10.66 4.72 10.66 10.52 0 5.8-4.76 10.55-10.66 10.55z" />
                </svg>
                <span className="text-sm font-medium text-white">WhatsApp</span>
              </a>

              <Link
                href="/leodigital"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#2a2a2a] hover:border-[#f0f0f0] text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors rounded-full text-sm font-medium group"
              >
                Lue lisää minusta
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: profile image */}
          <div className="relative h-full">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-xl opacity-50" />
            <div className="relative rounded-3xl border border-[#2a2a2a] bg-[#111111]/60 backdrop-blur-xl overflow-hidden h-full">
              <div className="relative h-full min-h-[300px]">
                <Image
                  src="/images/leoprofiilikuva.jpeg"
                  alt="Leo Apell"
                  fill
                  className="object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#111111] to-transparent">
                <h3 className="text-xl font-display text-[#f0f0f0]">Leo Apell</h3>
                <p className="text-sm text-[#a0a0a0]">Perustaja & Omistaja</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
