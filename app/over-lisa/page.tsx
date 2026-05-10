import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Over Lisa | Fotograaf Groningen',
  description:
    'Maak kennis met Lisa van Likiwi Fotografie — fotograaf in Groningen gespecialiseerd in zwangerschap, geboorte, newborn, familie en koppelshoot. Warm, persoonlijk en puur.',
  openGraph: {
    title: 'Over Lisa | Likiwi Fotografie — Fotograaf Groningen',
    description:
      'Maak kennis met Lisa — fotograaf in Groningen met een warme, persoonlijke aanpak.',
  },
}

export default function OverLisaPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-6 bg-warm-sand">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Portrait */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md max-w-sm mx-auto md:max-w-none">
            <Image
              src="https://picsum.photos/seed/likiwi-lisa/600/800"
              alt="Lisa van Likiwi Fotografie — portretfoto van de fotografe in Groningen"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 80vw, 40vw"
            />
          </div>

          {/* Intro */}
          <div>
            <p className="text-warm-taupe text-xs uppercase tracking-widest mb-4">
              Maak kennis met
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-warm-dark mb-6">
              Hallo, ik ben Lisa
            </h1>
            <div className="space-y-4 text-warm-medium leading-relaxed">
              <p>
                Fotografie is voor mij meer dan beelden maken — het is verhalen
                vertellen. Elk gezin, elk stel, elke baby heeft een uniek verhaal,
                en ik heb het grootste plezier om dat verhaal vast te leggen.
              </p>
              <p>
                Ik geloof in spontane momenten, zachte kleuren en echt verbinding.
                Geen stijve poses, maar echte lachjes, geknuffel en de kleine
                details die jullie nooit wilt vergeten.
              </p>
              <p>
                Vanuit Groningen werk ik door de hele provincie — in jullie eigen
                huis, een favoriet park, of op een locatie die bij jullie past.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Werkwijze ── */}
      <section className="py-20 px-6 bg-warm-bg" aria-labelledby="werkwijze-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-warm-taupe text-xs uppercase tracking-widest mb-3">
              Hoe ik werk
            </p>
            <h2
              id="werkwijze-heading"
              className="font-serif text-3xl md:text-4xl text-warm-dark"
            >
              Mijn aanpak
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Kennismaking',
                text: 'We beginnen met een kort gesprek — telefonisch of via Instagram. Zo leer ik jullie kennen en bespreek ik wat jullie wensen zijn.',
              },
              {
                step: '02',
                title: 'De sessie',
                text: 'Op de dag zelf zorg ik voor een ontspannen sfeer. Ik geef sturing waar nodig, maar laat de mooiste momenten spontaan ontstaan.',
              },
              {
                step: '03',
                title: 'De beelden',
                text: 'Na de sessie selecteer en bewerk ik de mooiste foto\'s in mijn warme, zachte stijl. Jullie ontvangen de beelden via een privé online galerij.',
              },
            ].map(({ step, title, text }) => (
              <div key={step} className="bg-warm-sand rounded-2xl p-8">
                <p className="font-serif text-4xl text-warm-beige mb-4">{step}</p>
                <h3 className="font-serif text-xl text-warm-dark mb-3">{title}</h3>
                <p className="text-sm text-warm-medium leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram section ── */}
      <section className="py-20 px-6 bg-warm-sand text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-warm-taupe text-xs uppercase tracking-widest mb-4">
            Mijn portfolio
          </p>
          <h2 className="font-serif text-3xl text-warm-dark mb-5">
            Mijn meest recente werk vind je op Instagram
          </h2>
          <p className="text-warm-medium leading-relaxed mb-8">
            Ik deel regelmatig nieuwe sessies, achter-de-schermen momenten en
            persoonlijke updates op Instagram. Volg me voor een kijkje in mijn
            dagelijkse werk als fotograaf in Groningen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/likiwifotografie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-warm-taupe text-white rounded-full hover:bg-warm-dark transition-colors font-medium"
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
              Volg @likiwifotografie
            </a>
            <Link
              href="/portfolio"
              className="px-8 py-4 border border-warm-taupe text-warm-taupe rounded-full hover:bg-warm-beige transition-colors font-medium text-center"
            >
              Bekijk portfolio
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        heading="Zin om samen te werken?"
        subtext="Stuur me een berichtje en we kijken samen hoe ik jullie verhaal het mooiste kan vastleggen."
        primaryLabel="Neem contact op"
        primaryHref="/contact"
        secondaryLabel="DM op Instagram"
        secondaryHref="https://www.instagram.com/likiwifotografie"
        variant="dark"
      />
    </>
  )
}
