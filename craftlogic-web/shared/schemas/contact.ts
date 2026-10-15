import { z } from 'zod'

/** Form options. Values match service slugs so `/contact?service=<slug>` can preselect. */
export const contactServiceOptions = [
  { value: 'business-websites', label: 'Business website' },
  { value: 'custom-systems', label: 'Custom business system' },
  { value: 'api-integration', label: 'API & integration' },
  { value: 'ongoing-support', label: 'Ongoing support / maintenance plan' },
  { value: 'other', label: 'Something else' },
] as const

export type ContactService = (typeof contactServiceOptions)[number]['value']

const serviceValues = contactServiceOptions.map(o => o.value) as [ContactService, ...ContactService[]]

/**
 * Single source of truth for the contact form.
 * Used for client-side validation (useContactForm) and server-side
 * validation (server/api/contact.post.ts).
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(120),
  email: z.email('Please enter a valid email address'),
  company: z.string().trim().max(120).optional().or(z.literal('')),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  service: z.enum(serviceValues),
  message: z.string().trim().min(20, 'Tell us a little more (at least 20 characters)').max(4000),
  popiaConsent: z.literal(true, 'You need to consent before we can process your enquiry'),
  // Honeypot – must stay empty
  website: z.string().max(0).optional(),
})

export type ContactInput = z.infer<typeof contactSchema>

export interface ContactResponse {
  ok: true
  reference: string
}
