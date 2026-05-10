import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-warm-dark text-warm-light">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-white mb-3">Likiwi Fotografie</p>
            <p className="text-sm leading-relaxed text-warm-light">
              Warme, pure beelden van de mooiste momenten in jullie leven. Gevestigd in Groningen.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-warm-beige mb-4">Navigatie</p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigatie">
              {[
                { href: '/', label: 'Home' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/over-lisa', label: 'Over Lisa' },
                { href: '/reviews', label: 'Reviews' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-warm-light hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Instagram CTA */}
          <div>
            <p className="text-xs uppercase tracking-widest text-warm-beige mb-4">Volg mij</p>
            <p className="text-sm text-warm-light mb-4">
              Mijn nieuwste werk vind je op Instagram. Volg me voor dagelijkse inspiratie.
            </p>
            <a
              href="https://www.instagram.com/likiwifotografie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white border border-warm-light/30 rounded-full px-5 py-2.5 hover:border-white transition-colors"
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
              @likiwifotografie
            </a>
            <p className="text-sm text-warm-light mt-4">
              <span className="text-warm-beige">📍</span> Groningen en omgeving
            </p>
          </div>
        </div>

        <div className="border-t border-warm-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warm-light/60">
            © {year} Likiwi Fotografie — Lisa. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-warm-light/60">
            Fotograaf in Groningen
          </p>
        </div>
      </div>
    </footer>
  )
}
