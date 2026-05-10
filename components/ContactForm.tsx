'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContactForm } from '@/app/contact/actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto px-10 py-4 bg-warm-taupe text-white rounded-full font-medium hover:bg-warm-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? 'Bezig met verzenden…' : 'Stuur mijn bericht'}
    </button>
  )
}

const SHOOT_TYPES = [
  'Zwangerschap',
  'Geboorte',
  'Newborn',
  'Familie',
  'Liefde / koppels',
  'Anders',
]

export default function ContactForm() {
  const [state, action] = useActionState(submitContactForm, null)

  if (state?.success) {
    return (
      <div className="bg-warm-sand rounded-2xl p-10 text-center">
        <p className="text-3xl mb-4">💛</p>
        <h3 className="font-serif text-2xl text-warm-dark mb-3">Bedankt!</h3>
        <p className="text-warm-medium leading-relaxed">
          Je bericht is ontvangen. Ik neem zo snel mogelijk contact met je op, meestal
          binnen 1-2 werkdagen.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm text-warm-dark mb-2">
            Naam <span className="text-warm-taupe">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jouw naam"
            className="w-full px-4 py-3.5 rounded-xl border border-warm-beige bg-white text-warm-dark placeholder-warm-light focus:outline-none focus:border-warm-taupe transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-warm-dark mb-2">
            E-mailadres <span className="text-warm-taupe">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jouw@email.nl"
            className="w-full px-4 py-3.5 rounded-xl border border-warm-beige bg-white text-warm-dark placeholder-warm-light focus:outline-none focus:border-warm-taupe transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="shootType" className="block text-sm text-warm-dark mb-2">
          Type shoot
        </label>
        <select
          id="shootType"
          name="shootType"
          className="w-full px-4 py-3.5 rounded-xl border border-warm-beige bg-white text-warm-dark focus:outline-none focus:border-warm-taupe transition-colors appearance-none"
        >
          <option value="">Maak een keuze…</option>
          {SHOOT_TYPES.map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-warm-dark mb-2">
          Bericht <span className="text-warm-taupe">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Vertel me iets over jullie wensen, de datum of locatie die je in gedachten hebt…"
          className="w-full px-4 py-3.5 rounded-xl border border-warm-beige bg-white text-warm-dark placeholder-warm-light focus:outline-none focus:border-warm-taupe transition-colors resize-y"
        />
      </div>

      {state?.error && (
        <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
          {state.error}
        </p>
      )}

      <SubmitButton />
    </form>
  )
}
