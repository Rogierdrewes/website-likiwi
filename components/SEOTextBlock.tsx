import Link from 'next/link'
import { categoryDescriptions } from '@/data/photos'

const categories = [
  {
    key: 'zwangerschap' as const,
    label: 'Zwangerschapsfotografie',
    icon: '🌸',
    filter: 'zwangerschap',
  },
  {
    key: 'geboorte' as const,
    label: 'Geboortereportage',
    icon: '✨',
    filter: 'geboorte',
  },
  {
    key: 'newborn' as const,
    label: 'Newborn fotografie',
    icon: '🌿',
    filter: 'newborn',
  },
  {
    key: 'familie' as const,
    label: 'Familiefotografie',
    icon: '☀️',
    filter: 'familie',
  },
  {
    key: 'liefde' as const,
    label: 'Koppelsfotografie',
    icon: '💛',
    filter: 'liefde',
  },
]

export default function SEOTextBlock() {
  return (
    <section className="py-20 px-6 bg-warm-bg" aria-label="Fotografie categorieën">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-warm-taupe text-xs uppercase tracking-widest mb-3">
            Wat ik fotografeer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-warm-dark mb-4">
            Elke fase verdient een herinnering
          </h2>
          <p className="text-warm-medium max-w-xl mx-auto leading-relaxed">
            Van de eerste echo tot de eerste stappen — ik leg de momenten vast die
            je nooit wilt vergeten, in en rond Groningen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ key, label, icon, filter }) => (
            <Link
              key={key}
              href={`/portfolio?cat=${filter}`}
              className="group bg-warm-sand rounded-2xl p-7 hover:bg-warm-beige transition-colors duration-300"
            >
              <span className="text-2xl mb-4 block" aria-hidden="true">
                {icon}
              </span>
              <h3 className="font-serif text-xl text-warm-dark mb-3 group-hover:text-warm-taupe transition-colors">
                {label}
              </h3>
              <p className="text-sm text-warm-medium leading-relaxed">
                {categoryDescriptions[key]}
              </p>
              <span className="inline-block mt-4 text-xs text-warm-taupe uppercase tracking-wider">
                Bekijk foto&apos;s →
              </span>
            </Link>
          ))}

          {/* Groningen info card */}
          <div className="bg-warm-beige rounded-2xl p-7">
            <span className="text-2xl mb-4 block" aria-hidden="true">📍</span>
            <h3 className="font-serif text-xl text-warm-dark mb-3">
              Groningen & omgeving
            </h3>
            <p className="text-sm text-warm-medium leading-relaxed">
              Als fotograaf in Groningen werk ik door de hele provincie en op bijzondere
              locaties in de omgeving. Op zoek naar een fotograaf in Groningen?
              Neem gerust contact op.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
