'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Photo, PhotoCategory } from '@/data/photos'
import Lightbox from './Lightbox'

interface InstagramGridProps {
  photos: Photo[]
  showFilter?: boolean
  initialCategory?: PhotoCategory | 'all'
}

const CATEGORIES: Array<{ key: PhotoCategory | 'all'; label: string }> = [
  { key: 'all', label: 'Alles' },
  { key: 'zwangerschap', label: 'Zwangerschap' },
  { key: 'geboorte', label: 'Geboorte' },
  { key: 'newborn', label: 'Newborn' },
  { key: 'familie', label: 'Familie' },
  { key: 'liefde', label: 'Liefde' },
]

export default function InstagramGrid({
  photos,
  showFilter = false,
  initialCategory = 'all',
}: InstagramGridProps) {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory | 'all'>(initialCategory)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === activeCategory)

  const handlePhotoClick = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => setLightboxIndex(null)
  const prevPhoto = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  const nextPhoto = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null))

  return (
    <div>
      {showFilter && (
        <div className="flex flex-wrap gap-2 justify-center mb-10" role="group" aria-label="Filteer op categorie">
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              aria-pressed={activeCategory === key}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                activeCategory === key
                  ? 'bg-warm-taupe text-white shadow-sm'
                  : 'bg-warm-beige text-warm-dark hover:bg-warm-taupe hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-1.5">
        {filtered.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => handlePhotoClick(index)}
            className="aspect-square relative overflow-hidden group block focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-taupe"
            aria-label={photo.alt}
          >
            <Image
              src={photo.thumbnail}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/25 transition-colors duration-300 flex items-end justify-start p-3">
              {photo.caption && (
                <span className="text-white text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-1">
                  {photo.caption}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photo={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </div>
  )
}
