import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-lato',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://likiwifotografie.nl'),
  title: {
    default: 'Likiwi Fotografie | Fotograaf in Groningen',
    template: '%s | Likiwi Fotografie',
  },
  description:
    'Likiwi Fotografie — Lisa legt jullie verhaal vast in warme, pure beelden. Zwangerschap, geboorte, newborn, familie en liefde in Groningen en omgeving.',
  keywords: [
    'fotograaf Groningen',
    'zwangerschapsfotograaf Groningen',
    'newborn fotograaf Groningen',
    'familiefotograaf Groningen',
    'geboortefotografie Groningen',
    'koppelsfotograaf Groningen',
    'Likiwi Fotografie',
    'Lisa fotograaf Groningen',
  ],
  authors: [{ name: 'Lisa — Likiwi Fotografie' }],
  creator: 'Likiwi Fotografie',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://likiwifotografie.nl',
    siteName: 'Likiwi Fotografie',
    title: 'Likiwi Fotografie | Fotograaf in Groningen',
    description:
      'Warme, pure beelden van zwangerschap, geboorte, newborn, familie en liefde in Groningen.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Likiwi Fotografie — Lisa, fotograaf in Groningen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Likiwi Fotografie | Fotograaf in Groningen',
    description:
      'Warme, pure beelden van zwangerschap, geboorte, newborn, familie en liefde in Groningen.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Likiwi Fotografie',
  description:
    'Professionele fotograaf in Groningen voor zwangerschap, geboorte, newborn, familie en koppels.',
  url: 'https://likiwifotografie.nl',
  image: 'https://likiwifotografie.nl/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Groningen',
    addressRegion: 'Groningen',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.2194,
    longitude: 6.5665,
  },
  areaServed: [
    { '@type': 'City', name: 'Groningen' },
    { '@type': 'State', name: 'Groningen' },
  ],
  sameAs: ['https://www.instagram.com/likiwifotografie'],
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
