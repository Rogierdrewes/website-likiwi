import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import { reviews } from '@/data/reviews'

export const metadata: Metadata = {
  title: 'Reviews | Fotograaf Groningen',
  description:
    'Wat klanten zeggen over Likiwi Fotografie — lees ervaringen van gezinnen, koppels en moeders die Lisa als fotograaf in Groningen kozen voor zwangerschap, geboorte, newborn en familie.',
  openGraph: {
    title: 'Reviews | Likiwi Fotografie — Fotograaf Groningen',
    description:
      'Ervaringen van klanten van Likiwi Fotografie — zwangerschap, geboorte, newborn en familiefotografie in Groningen.',
  },
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? '#C9A882' : 'none'}
          stroke="#C9A882"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

const featured = reviews.find((r) => r.featured)
const rest = reviews.filter((r) => !r.featured)

export default function ReviewsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-16 px-6 bg-warm-sand text-center">
        <p className="text-warm-taupe text-xs uppercase tracking-widest mb-4">
          Ervaringen
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-warm-dark mb-5">
          Wat klanten zeggen
        </h1>
        <p className="text-warm-medium max-w-md mx-auto leading-relaxed">
          Niets mooier dan te horen dat jullie verhaal precies zo is vastgelegd
          als jullie hadden gehoopt.
        </p>
      </section>

      {/* ── Featured review ── */}
      {featured && (
        <section className="py-20 px-6 bg-warm-bg" aria-label="Uitgelichte review">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="mx-auto mb-6 text-warm-beige"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
            </svg>

            <blockquote className="font-serif text-2xl md:text-3xl text-warm-dark leading-relaxed mb-8 italic">
              &ldquo;{featured.text}&rdquo;
            </blockquote>

            <div className="flex flex-col items-center gap-2">
              <Stars rating={featured.rating} />
              <p className="font-medium text-warm-dark">{featured.name}</p>
              <p className="text-sm text-warm-taupe">{featured.shootType}</p>
            </div>
          </div>
        </section>
      )}

      {/* ── Review grid ── */}
      <section className="py-16 px-6 bg-warm-sand" aria-label="Alle reviews">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-warm-taupe text-xs uppercase tracking-widest mb-3">
              Meer ervaringen
            </p>
            <h2 className="font-serif text-3xl text-warm-dark">
              Wat anderen meemaakten
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((review) => (
              <article
                key={review.id}
                className="bg-white rounded-2xl p-7 flex flex-col gap-4"
              >
                <Stars rating={review.rating} />
                <blockquote className="text-warm-medium text-sm leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <footer>
                  <p className="font-medium text-warm-dark text-sm">{review.name}</p>
                  <p className="text-warm-taupe text-xs mt-0.5">{review.shootType}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leave a review CTA ── */}
      <section className="py-16 px-6 bg-warm-bg text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-warm-taupe text-xs uppercase tracking-widest mb-4">
            Eerder samengewerkt?
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-warm-dark mb-4">
            Deel jouw ervaring
          </h2>
          <p className="text-warm-medium leading-relaxed mb-8">
            Ik hoor graag hoe de sessie voor jullie was. Een review helpt ook
            andere gezinnen om de stap te zetten.
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
            Stuur een DM via Instagram
          </a>
        </div>
      </section>

      <CTASection
        heading="Jullie verhaal verdient mooie beelden"
        subtext="Neem contact op voor een vrijblijvend gesprek over jullie wensen en een sessie in Groningen."
        primaryLabel="Neem contact op"
        primaryHref="/contact"
        secondaryLabel="Bekijk portfolio"
        secondaryHref="/portfolio"
        variant="dark"
      />
    </>
  )
}
