import Link from 'next/link'

interface CTASectionProps {
  heading?: string
  subtext?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  variant?: 'light' | 'dark'
}

export default function CTASection({
  heading = 'Klaar om jullie verhaal vast te leggen?',
  subtext = 'Neem gerust contact op voor meer informatie of om een vrijblijvende datum te bespreken.',
  primaryLabel = 'Neem contact op',
  primaryHref = '/contact',
  secondaryLabel = 'Bekijk Instagram',
  secondaryHref = 'https://www.instagram.com/likiwifotografie',
  variant = 'light',
}: CTASectionProps) {
  const isDark = variant === 'dark'

  return (
    <section
      className={`py-24 px-6 text-center ${
        isDark ? 'bg-warm-dark text-white' : 'bg-warm-sand'
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className={`font-serif text-3xl md:text-4xl mb-5 text-balance ${
            isDark ? 'text-white' : 'text-warm-dark'
          }`}
        >
          {heading}
        </h2>
        <p
          className={`text-base md:text-lg leading-relaxed mb-10 ${
            isDark ? 'text-warm-light' : 'text-warm-medium'
          }`}
        >
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className={`px-8 py-4 rounded-full font-medium transition-all duration-300 text-center ${
              isDark
                ? 'bg-warm-taupe text-white hover:bg-white hover:text-warm-dark'
                : 'bg-warm-taupe text-white hover:bg-warm-dark'
            }`}
          >
            {primaryLabel}
          </Link>
          {secondaryHref.startsWith('http') ? (
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 text-center border ${
                isDark
                  ? 'border-warm-light/30 text-white hover:border-white'
                  : 'border-warm-taupe text-warm-taupe hover:bg-warm-beige'
              }`}
            >
              {secondaryLabel}
            </a>
          ) : (
            <Link
              href={secondaryHref}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 text-center border ${
                isDark
                  ? 'border-warm-light/30 text-white hover:border-white'
                  : 'border-warm-taupe text-warm-taupe hover:bg-warm-beige'
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
