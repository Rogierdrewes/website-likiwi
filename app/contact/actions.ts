'use server'

interface FormState {
  success?: boolean
  error?: string
}

export async function submitContactForm(
  _prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const shootType = formData.get('shootType') as string
  const message = formData.get('message') as string

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { error: 'Vul alle verplichte velden in.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: 'Voer een geldig e-mailadres in.' }
  }

  // TODO: Connect to an email service such as Resend (https://resend.com)
  // Example:
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'website@likiwifotografie.nl',
  //   to: 'lisa@likiwifotografie.nl',
  //   subject: `Nieuw contactverzoek van ${name}`,
  //   text: `Naam: ${name}\nEmail: ${email}\nType: ${shootType}\n\n${message}`,
  // })

  console.log('[Contact form]', { name, email, shootType, message })

  return { success: true }
}
