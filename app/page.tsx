import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InstagramGrid from '@/components/InstagramGrid'
import CTASection from '@/components/CTASection'
import SEOTextBlock from '@/components/SEOTextBlock'
import { photos } from '@/data/photos'

export const metadata: Metadata = {
  title: 'Fotograaf in Groningen | Likiwi Fotografie',
  description:
    'Likiwi Fotografie — Lisa legt jullie verhaal vast in warme, pure beelden. Zwangerschapsfotografie, geboorte, newborn, familiefotografie en koppelshoot in Groningen.',
  openGraph: {
    title: 'Likiwi Fotografie | Fotograaf in Groningen',
    description:
      'Warme, pure beelden van de mooiste momenten in jullie leven. Groningen en omgeving.',
  },
}

const featuredPhotos = photos.slice(0, 9)

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="min-h-screen pt-20 flex items-center bg-warm-sand">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-warm-taupe text-xs uppercase tracking-widest mb-6">
              Fotograaf · Groningen
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-dark leading-[1.1] mb-7 text-balance">
              Ik leg met veel plezier jullie verhaal vast
            </h1>
            <p className="text-warm-medium text-lg leading-relaxed mb-10 max-w-md">
              Zwangerschap, geboorte, newborn, familie en liefde — vastgelegd in
              warme, pure beelden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-warm-taupe text-white rounded-full hover:bg-warm-dark transition-all duration-300 font-medium text-center"
              >
                Bekijk mijn werk
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-warm-taupe text-warm-taupe rounded-full hover:bg-warm-beige transition-all duration-300 font-medium text-center"
              >
                Neem contact op
              </Link>
            </div>
          </div>

          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg order-first md:order-last">
            <Image
              src="https://picsum.photos/seed/likiwi-hero/800/1067"
              alt="Sfeervolle portretfotografie door Lisa van Likiwi Fotografie in Groningen — warm en persoonlijk"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3">
              <p className="font-serif text-sm text-warm-dark">📍 Groningen</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Instagram-style photo grid ── */}
      <section className="py-20 px-6 bg-warm-bg" aria-labelledby="grid-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-warm-taupe text-xs uppercase tracking-widest mb-3">
              Mijn werk
            </p>
            <h2
              id="grid-heading"
              className="font-serif text-3xl md:text-4xl text-warm-dark mb-4"
            >
              Een blik in mijn portfolio
            </h2>
            <p className="text-warm-medium max-w-md mx-auto leading-relaxed">
              Bekijk mijn meest recente werk — voor de volledige feed, volg me op
              Instagram.
            </p>
          </div>

          <InstagramGrid photos={featuredPhotos} />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-warm-taupe text-white rounded-full hover:bg-warm-dark transition-colors font-medium text-center"
            >
              Bekijk alle foto&apos;s
            </Link>
            <a
              href="https://www.instagram.com/likiwifotografie"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-warm-taupe text-warm-taupe rounded-full hover:bg-warm-sand transition-colors font-medium text-center inline-flex items-center justify-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              Volg op Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── SEO category blocks ── */}
      <SEOTextBlock />

      {/* ── Final CTA ── */}
      <CTASection
        variant="dark"
        heading="Laten we kennismaken"
        subtext="Klaar om jullie verhaal te laten vastleggen? Neem contact op voor een vrijblijvend gesprek over jullie wensen."
        primaryLabel="Stuur een bericht"
        primaryHref="/contact"
        secondaryLabel="DM op Instagram"
        secondaryHref="https://www.instagram.com/likiwifotografie"
      />
    </>
  )
}
