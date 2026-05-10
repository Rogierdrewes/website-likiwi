import type { Photo, PhotoCategory } from '@/data/photos'

const GRAPH_API = 'https://graph.facebook.com/v19.0'

// ISR: revalideer de pagina elk uur zodat nieuwe Instagram posts automatisch verschijnen
export const INSTAGRAM_REVALIDATE = 3600

interface InstagramMedia {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
  timestamp: string
}

// Detecteer de categorie op basis van hashtags in het bijschrift
function detectCategory(caption = ''): PhotoCategory {
  const t = caption.toLowerCase()
  if (/#(zwangerschap\w*|maternity|pregnant)/.test(t)) return 'zwangerschap'
  if (/#(geboorte\w*|birthstory|birthphotography)/.test(t)) return 'geboorte'
  if (/#(newborn\w*|pasgeboren|babyfotografie)/.test(t)) return 'newborn'
  if (/#(liefde\w*|koppels\w*|couples|lovestory|engagement)/.test(t)) return 'liefde'
  return 'familie'
}

function toPhoto(media: InstagramMedia): Photo {
  // Eerste regel van het bijschrift, zonder hashtags, als alt-tekst en caption
  const firstLine = (media.caption ?? '').split('\n')[0]
  const clean = firstLine.replace(/#\S+/g, '').replace(/\s+/g, ' ').trim() || undefined

  return {
    id: media.id,
    src: media.media_url,
    thumbnail: media.media_url,
    alt: clean ?? 'Foto door Likiwi Fotografie — fotograaf in Groningen',
    category: detectCategory(media.caption),
    caption: clean,
    instagramUrl: media.permalink,
    width: 800,
    height: 1000,
  }
}

/**
 * Haalt foto's op via de Instagram Graph API.
 * Geeft null terug als INSTAGRAM_ACCESS_TOKEN / INSTAGRAM_USER_ID niet zijn ingesteld
 * — de pagina valt dan automatisch terug op de placeholder-data in data/photos.ts.
 *
 * Resultaten worden 1 uur gecached (Next.js Data Cache + ISR).
 */
export async function fetchInstagramPhotos(limit = 24): Promise<Photo[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const userId = process.env.INSTAGRAM_USER_ID

  if (!token || !userId) return null

  const url = new URL(`${GRAPH_API}/${userId}/media`)
  url.searchParams.set(
    'fields',
    'id,media_type,media_url,thumbnail_url,permalink,caption,timestamp'
  )
  url.searchParams.set('limit', String(limit))
  url.searchParams.set('access_token', token)

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: INSTAGRAM_REVALIDATE },
    })

    if (!res.ok) {
      console.error('[Instagram] API-fout:', res.status, await res.text())
      return null
    }

    const feed = (await res.json()) as { data: InstagramMedia[] }
    const photos = feed.data
      .filter((m) => m.media_type === 'IMAGE' || m.media_type === 'CAROUSEL_ALBUM')
      .map(toPhoto)

    return photos.length > 0 ? photos : null
  } catch (err) {
    console.error('[Instagram] Fetch mislukt:', err)
    return null
  }
}
