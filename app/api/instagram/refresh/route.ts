import { NextResponse } from 'next/server'

const GRAPH_API = 'https://graph.facebook.com/v19.0'

/**
 * Vernieuwt het Instagram long-lived access token (geldig 60 dagen).
 *
 * Wordt maandelijks automatisch aangeroepen via de Vercel Cron Job in vercel.json.
 * Als VERCEL_TOKEN + VERCEL_PROJECT_ID zijn ingesteld, wordt het nieuwe token
 * automatisch opgeslagen in de Vercel environment variables — geen handmatige
 * actie vereist.
 *
 * Handmatig aanroepen: GET /api/instagram/refresh
 * (Vercel stuurt Authorization: Bearer <CRON_SECRET> mee vanuit de cron)
 */
export async function GET(request: Request) {
  // Vercel Cron Jobs sturen Authorization: Bearer <CRON_SECRET>
  const authHeader = request.headers.get('authorization')
  const { searchParams } = new URL(request.url)

  const validBearer = authHeader === `Bearer ${process.env.CRON_SECRET}`
  const validQuery = searchParams.get('secret') === process.env.CRON_SECRET

  if (!validBearer && !validQuery) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN
  if (!currentToken) {
    return NextResponse.json({ error: 'INSTAGRAM_ACCESS_TOKEN niet ingesteld' }, { status: 500 })
  }

  // Vernieuw het token via de Instagram Graph API
  const refreshUrl = new URL(`${GRAPH_API}/refresh_access_token`)
  refreshUrl.searchParams.set('grant_type', 'ig_refresh_token')
  refreshUrl.searchParams.set('access_token', currentToken)

  const refreshRes = await fetch(refreshUrl.toString())
  const refreshData = (await refreshRes.json()) as {
    access_token?: string
    expires_in?: number
    error?: { message: string }
  }

  if (!refreshRes.ok || refreshData.error || !refreshData.access_token) {
    console.error('[Instagram] Token refresh mislukt:', refreshData.error)
    return NextResponse.json(
      { error: refreshData.error?.message ?? 'Refresh mislukt' },
      { status: 500 }
    )
  }

  const newToken = refreshData.access_token

  // Sla het nieuwe token automatisch op in Vercel als de credentials beschikbaar zijn
  if (process.env.VERCEL_TOKEN && process.env.VERCEL_PROJECT_ID) {
    try {
      const teamQuery = process.env.VERCEL_TEAM_ID
        ? `?teamId=${process.env.VERCEL_TEAM_ID}`
        : ''

      // Zoek het env var ID op
      const envListRes = await fetch(
        `https://api.vercel.com/v9/projects/${process.env.VERCEL_PROJECT_ID}/env${teamQuery}`,
        { headers: { Authorization: `Bearer ${process.env.VERCEL_TOKEN}` } }
      )
      const envList = (await envListRes.json()) as { envs: Array<{ id: string; key: string }> }
      const envVar = envList.envs?.find((e) => e.key === 'INSTAGRAM_ACCESS_TOKEN')

      if (envVar) {
        await fetch(
          `https://api.vercel.com/v9/projects/${process.env.VERCEL_PROJECT_ID}/env/${envVar.id}${teamQuery}`,
          {
            method: 'PATCH',
            headers: {
              Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value: newToken }),
          }
        )
        console.log('[Instagram] Token automatisch bijgewerkt in Vercel')
      }
    } catch (err) {
      console.error('[Instagram] Kon token niet opslaan in Vercel:', err)
    }
  }

  return NextResponse.json({
    success: true,
    expires_in_days: Math.floor((refreshData.expires_in ?? 5184000) / 86400),
    auto_saved: Boolean(process.env.VERCEL_TOKEN && process.env.VERCEL_PROJECT_ID),
    // Toon het nieuwe token alleen als auto-save niet beschikbaar is
    ...(!process.env.VERCEL_TOKEN && {
      new_token: newToken,
      action_required:
        'Stel INSTAGRAM_ACCESS_TOKEN in Vercel in op de waarde van new_token en herstart de deployment.',
    }),
  })
}
