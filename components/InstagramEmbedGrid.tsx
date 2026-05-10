'use client'

import { useEffect, useRef } from 'react'
import { extractShortcode } from '@/data/instagram-embeds'

interface EmbedGridProps {
  postUrls: string[]
}

// Laad Instagram's embed.js eenmalig
function useInstagramEmbed() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (document.getElementById('instagram-embed-script')) {
      // Script al aanwezig: vraag Instagram om de blockquotes te renderen
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).instgrm?.Embeds?.process()
      return
    }
    const script = document.createElement('script')
    script.id = 'instagram-embed-script'
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])
}

function EmbedPost({ shortcode }: { shortcode: string }) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden rounded-xl bg-white border border-warm-beige"
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/p/${shortcode}/?utm_source=ig_embed`}
        data-instgrm-version="14"
        style={{ margin: 0, maxWidth: '100%', minWidth: '280px', width: '100%' }}
      />
    </div>
  )
}

export default function InstagramEmbedGrid({ postUrls }: EmbedGridProps) {
  useInstagramEmbed()

  const shortcodes = postUrls
    .map(extractShortcode)
    .filter((s): s is string => s !== null)

  if (shortcodes.length === 0) {
    return (
      <div className="py-16 text-center text-warm-medium">
        <p className="text-4xl mb-4">📷</p>
        <p className="font-serif text-xl text-warm-dark mb-2">
          Voeg Instagram-links toe
        </p>
        <p className="text-sm max-w-sm mx-auto">
          Kopieer post-links vanuit de Instagram-app en voeg ze toe aan{' '}
          <code className="text-warm-taupe">data/instagram-embeds.ts</code>.
        </p>
      </div>
    )
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {shortcodes.map((code) => (
        <div key={code} className="break-inside-avoid">
          <EmbedPost shortcode={code} />
        </div>
      ))}
    </div>
  )
}
