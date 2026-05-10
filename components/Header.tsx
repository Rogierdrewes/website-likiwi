'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/over-lisa', label: 'Over Lisa' },
  { href: '/reviews', label: 'Reviews' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const transparent = isHome && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-warm-bg/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl text-warm-dark tracking-wide hover:text-warm-taupe transition-colors"
        >
          Likiwi Fotografie
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Hoofdnavigatie">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? 'text-warm-taupe'
                  : 'text-warm-dark hover:text-warm-taupe'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm px-5 py-2.5 bg-warm-taupe text-white rounded-full hover:bg-warm-dark transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-warm-dark p-1"
          aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={menuOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-warm-bg border-t border-warm-beige px-6 py-6 flex flex-col gap-5"
          aria-label="Mobiele navigatie"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-base transition-colors ${
                pathname === href
                  ? 'text-warm-taupe font-medium'
                  : 'text-warm-dark hover:text-warm-taupe'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="w-fit text-sm px-6 py-3 bg-warm-taupe text-white rounded-full hover:bg-warm-dark transition-colors"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
