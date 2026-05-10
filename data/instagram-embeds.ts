/**
 * Instagram post-links voor de embed-preview.
 *
 * Hoe een link te kopiëren (Instagram-app):
 *   Ga naar een foto → tik ··· → Link kopiëren
 *   Formaat: https://www.instagram.com/p/XXXXXXXXXX/
 *
 * Zodra INSTAGRAM_ACCESS_TOKEN + INSTAGRAM_USER_ID zijn ingesteld in Vercel,
 * haalt de website de foto's automatisch op via de Graph API en wordt dit
 * bestand niet meer gebruikt.
 */
export const instagramPostUrls: string[] = [
  'https://www.instagram.com/p/DXM883ojhOG/',
  'https://www.instagram.com/p/DWGvzqEjWCM/',
  'https://www.instagram.com/p/DWPOONPjlmH/',
  'https://www.instagram.com/p/DMqUP97MMuu/',
  'https://www.instagram.com/p/DIqAcAGiwAo/',
  'https://www.instagram.com/p/DGdl1_ZNt4c/',
  'https://www.instagram.com/p/DRO9Ts9DQIL/',
  'https://www.instagram.com/p/DRHCZCWDZrs/',
  'https://www.instagram.com/p/DWjmY9zDR4s/',
  'https://www.instagram.com/p/DXgZrYTjQo3/',
  'https://www.instagram.com/p/DMlPvcysugr/',
]

export function extractShortcode(url: string): string | null {
  const match = url.match(/instagram\.com\/(?:p|reel)\/([A-Za-z0-9_-]+)/)
  return match?.[1] ?? null
}
