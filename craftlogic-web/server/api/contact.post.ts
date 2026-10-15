import { z } from 'zod'
import { contactSchema, contactServiceOptions, type ContactResponse } from '#shared/schemas/contact'

export default defineEventHandler(async (event): Promise<ContactResponse> => {
  assertRateLimit(event)

  const result = await readValidatedBody(event, body => contactSchema.safeParse(body))

  if (!result.success) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Validation failed',
      data: z.flattenError(result.error).fieldErrors,
    })
  }

  // Honeypot filled → silently accept, do nothing
  if (result.data.website) return { ok: true, reference: 'ignored' }

  const enquiry = result.data
  const reference = `CL-${Date.now().toString(36).toUpperCase()}`

  // Avoid logging personal information (POPIA) — log the reference only.
  if (!isMailConfigured()) {
    console.warn(`[contact] mail not configured; enquiry ${reference} was not delivered`)
    return { ok: true, reference }
  }

  const serviceLabel = contactServiceOptions.find(o => o.value === enquiry.service)?.label ?? enquiry.service

  try {
    await sendMail({
      to: useRuntimeConfig(event).contactInbox,
      subject: `Website enquiry ${reference}: ${serviceLabel}`,
      replyTo: { address: enquiry.email, name: enquiry.name },
      text: [
        `Reference: ${reference}`,
        `Service: ${serviceLabel}`,
        '',
        `Name: ${enquiry.name}`,
        `Email: ${enquiry.email}`,
        `Company: ${enquiry.company || '-'}`,
        `Phone: ${enquiry.phone || '-'}`,
        '',
        enquiry.message,
        '',
        'POPIA consent: given via website form',
      ].join('\n'),
    })
  }
  catch {
    console.error(`[contact] failed to send enquiry ${reference}`)
    throw createError({ statusCode: 502, statusMessage: 'Could not send enquiry' })
  }

  console.info(`[contact] enquiry sent ${reference}`)
  return { ok: true, reference }
})
