import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'Leo Digital | Verkkosivut, Ylläpito & Digitaalinen Näkyvyys',
  description: 'Suunnittelen ja toteutan moderneja verkkosivuja sekä tarjoan täyden ylläpitopalvelun. Räätälöidyt kotisivut, SEO-optimointi ja digitaalinen näkyvyys yrityksellesi.',
  keywords: ['verkkosivut', 'kotisivut', 'ylläpito', 'SEO', 'hakukoneoptimointi', 'digitaalinen markkinointi', 'Leo Digital', 'nettisivut', 'verkkokauppa'],
  authors: [{ name: 'Leo Apell' }],
  creator: 'Leo Digital',
  openGraph: {
    title: 'Leo Digital | Verkkosivut, Ylläpito & Digitaalinen Näkyvyys',
    description: 'Suunnittelen ja toteutan moderneja verkkosivuja sekä tarjoan täyden ylläpitopalvelun. Räätälöidyt kotisivut yrityksellesi.',
    url: 'https://www.leodigital.fi',
    siteName: 'Leo Digital',
    locale: 'fi_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leo Digital | Verkkosivut & Ylläpito',
    description: 'Moderneja verkkosivuja ja täysi ylläpitopalvelu yrityksellesi.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.leodigital.fi',
    languages: {
      'fi': 'https://www.leodigital.fi',
      'en': 'https://www.leodigital.fi/en',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fi">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
