import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Fotograaf Groningen',
  description:
    'Neem contact op met Likiwi Fotografie — fotograaf Lisa in Groningen. Voor zwangerschapsfotografie, geboorte, newborn, familiefotografie of koppelshoot. Stuur een bericht of DM op Instagram.',
  openGraph: {
    title: 'Contact | Likiwi Fotografie — Fotograaf Groningen',
    description:
      'Neem contact op met Lisa voor jullie zwangerschap-, geboorte-, newborn-, familie- of koppelshoot in Groningen.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-16 px-6 bg-warm-sand text-center">
        <p className="text-warm-taupe text-xs uppercase tracking-widest mb-4">
          Laten we kennismaken
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-warm-dark mb-5">
          Neem contact op
        </h1>
        <p className="text-warm-medium max-w-md mx-auto leading-relaxed">
          Heb je een vraag of wil je een shoot inplannen? Stuur me gerust een
          bericht — ik reageer binnen 1–2 werkdagen.
        </p>
      </section>

      {/* ── Content ── */}
      <section className="py-20 px-6 bg-warm-bg">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-14">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-warm-dark mb-5">
                Contactgegevens
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-warm-taupe mt-0.5" aria-hidden="true">📍</span>
                  <div>
                    <p className="text-sm font-medium text-warm-dark">Locatie</p>
                    <p className="text-sm text-warm-medium">
                      Groningen en omgeving<br />
                      (provincie Groningen, Drenthe en Friesland)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-warm-taupe mt-0.5" aria-hidden="true">📸</span>
                  <div>
                    <p className="text-sm font-medium text-warm-dark">Instagram</p>
                    <a
                      href="https://www.instagram.com/likiwifotografie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-warm-taupe hover:text-warm-dark transition-colors"
                    >
                      @likiwifotografie
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-warm-taupe mt-0.5" aria-hidden="true">⏱</span>
                  <div>
                    <p className="text-sm font-medium text-warm-dark">Reactietijd</p>
                    <p className="text-sm text-warm-medium">Binnen 1–2 werkdagen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram DM CTA */}
            <div className="bg-warm-sand rounded-2xl p-6">
              <p className="font-serif text-lg text-warm-dark mb-2">
                Liever een DM sturen?
              </p>
              <p className="text-sm text-warm-medium mb-5 leading-relaxed">
                Stuur me een berichtje via Instagram — ik reageer daar ook snel op!
              </p>
              <a
                href="https://www.instagram.com/likiwifotografie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-5 py-3 bg-warm-taupe text-white rounded-full hover:bg-warm-dark transition-colors"
              >
                <svg
                  width="15"
                  height="15"
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
                DM via Instagram
              </a>
            </div>

            {/* SEO text block */}
            <div>
              <h2 className="font-serif text-xl text-warm-dark mb-3">
                Fotograaf in Groningen
              </h2>
              <p className="text-sm text-warm-medium leading-relaxed">
                Als zwangerschapsfotograaf, newborn fotograaf en familiefotograaf
                in Groningen werk ik met veel liefde voor mensen en voor licht.
                Ik fotografeer in Groningen stad en de hele provincie, maar rij
                ook graag naar bijzondere locaties elders.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            <h2 className="font-serif text-2xl text-warm-dark mb-8">
              Stuur een bericht
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
