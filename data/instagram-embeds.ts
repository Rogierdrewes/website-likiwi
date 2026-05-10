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
  // Vul hier de gekopieerde Instagram-links in, bijv.:
  // 'https://www.instagram.com/p/ABC123/',
  // 'https://www.instagram.com/p/DEF456/',
]

export function extractShortcode(url: string): string | null {
  const match = url.match(/instagram\.com\/(?:p|reel)\/([A-Za-z0-9_-]+)/)
  return match?.[1] ?? null
}
