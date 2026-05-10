import type { Metadata } from 'next'
import InstagramGrid from '@/components/InstagramGrid'
import CTASection from '@/components/CTASection'
import { photos, type PhotoCategory } from '@/data/photos'

export const metadata: Metadata = {
  title: 'Portfolio | Fotograaf Groningen',
  description:
    'Bekijk het volledige portfolio van Likiwi Fotografie — zwangerschapsfotografie, geboorte, newborn, familiefotografie en koppelshoot in Groningen en omgeving.',
  openGraph: {
    title: 'Portfolio | Likiwi Fotografie — Fotograaf Groningen',
    description:
      'Het volledige portfolio: zwangerschap, geboorte, newborn, familie en liefde in Groningen.',
  },
}

const VALID_CATEGORIES: PhotoCategory[] = [
  'zwangerschap',
  'geboorte',
  'newborn',
  'familie',
  'liefde',
]

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>
}) {
  const { cat } = await searchParams
  const initialCategory =
    cat && VALID_CATEGORIES.includes(cat as PhotoCategory)
      ? (cat as PhotoCategory)
      : 'all'

  return (
    <>
      {/* ── Header section ── */}
      <section className="pt-36 pb-12 px-6 bg-warm-sand text-center">
        <p className="text-warm-taupe text-xs uppercase tracking-widest mb-4">
          Mijn werk
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-warm-dark mb-5">
          Portfolio
        </h1>
        <p className="text-warm-medium max-w-md mx-auto leading-relaxed">
          Een selectie van mijn werk — voor de nieuwste foto&apos;s, volg me op{' '}
          <a
            href="https://www.instagram.com/likiwifotografie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-taupe underline underline-offset-2 hover:text-warm-dark transition-colors"
          >
            Instagram
          </a>
          .
        </p>
      </section>

      {/* ── Grid with filter ── */}
      <section className="py-12 px-4 md:px-6 max-w-6xl mx-auto" aria-label="Fotogalerij">
        <InstagramGrid photos={photos} showFilter initialCategory={initialCategory} />
      </section>

      {/* ── Instagram CTA ── */}
      <section className="py-16 px-6 bg-warm-sand text-center">
        <p className="text-warm-taupe text-xs uppercase tracking-widest mb-3">
          Meer bekijken
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-warm-dark mb-4">
          Nieuwsgierig naar meer?
        </h2>
        <p className="text-warm-medium mb-8 max-w-sm mx-auto">
          Mijn volledige en meest actuele portfolio vind je op Instagram.
        </p>
        <a
          href="https://www.instagram.com/likiwifotografie"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-warm-taupe text-white rounded-full hover:bg-warm-dark transition-colors font-medium"
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
          @likiwifotografie op Instagram
        </a>
      </section>

      <CTASection
        heading="Klaar voor jullie eigen shoot?"
        subtext="Plan een sessie in Groningen of omgeving. Neem contact op en we bespreken alle mogelijkheden."
        primaryLabel="Neem contact op"
        primaryHref="/contact"
        secondaryLabel="Over Lisa"
        secondaryHref="/over-lisa"
      />
    </>
  )
}
