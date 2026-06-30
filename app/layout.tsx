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
  metadataBase: new URL('https://www.leodigital.fi'),
  title: 'Leo Digital Suomi | Kotisivut & Ylläpito Yrityksille – Kaikki Samasta',
  description: 'Räätälöidyt kotisivut suomalaisille yrityksille alusta alkaen. Verkkosivut, ylläpito, hakukoneoptimointi ja tekoälyhakuihin optimointi samasta paikasta. Sinä keskityt bisnekseen, minä hoidan digin.',
  keywords: [
    'kotisivut edullisesti',
    'GEO optimointi',
'generative engine optimization',
    'kotisivut ylläpito',
    'verkkosivut ylläpito',
    'hakukoneoptimointi',
    'tekoälyhakuoptimointi',
    'AI SEO',
    'kotisivut alkaville yrityksille',
    'verkkosivut alusta alkaen',
    'Leo Digital Suomi',
    'kotisivut Suomi',
  ],
  authors: [{ name: 'Leo Apell' }],
  creator: 'Leo Digital Suomi',
  openGraph: {
    title: 'Leo Digital Suomi | Kotisivut & Ylläpito – Kaikki Hoituu Puolestasi',
    description: 'Räätälöidyt kotisivut, ylläpito ja näkyvyys Googlessa sekä tekoälyhauissa suomalaisille yrityksille. Kaikki samasta paikasta helposti ja vaivattomasti.',
    url: 'https://www.leodigital.fi',
    siteName: 'Leo Digital Suomi',
    locale: 'fi_FI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leo Digital Suomi | Kotisivut & Ylläpito Yrityksille',
    description: 'Räätälöidyt kotisivut, ylläpito ja hakukoneoptimointi suomalaisille yrityksille. Kaikki hoituu sinulle – ei säätöä.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.leodigital.fi',
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
