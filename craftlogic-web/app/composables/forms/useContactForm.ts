import { z } from 'zod'
import { useMutation } from '@tanstack/vue-query'
import { contactSchema, contactServiceOptions, type ContactInput, type ContactService } from '#shared/schemas/contact'
import { contactApi } from '~/lib/api/contact'

type ContactFormState = Omit<ContactInput, 'popiaConsent'> & { popiaConsent: boolean }
type FieldErrors = Partial<Record<keyof ContactInput, string>>

const planNames: Record<string, string> = { essential: 'Essential', growth: 'Growth', partner: 'Partner' }

const initialState = (): ContactFormState => ({
  name: '',
  email: '',
  company: '',
  phone: '',
  service: 'custom-systems',
  message: '',
  popiaConsent: false,
  website: '',
})

function isContactService(value: unknown): value is ContactService {
  return contactServiceOptions.some(o => o.value === value)
}

/**
 * All contact-form logic: state, validation (shared zod schema),
 * submission (TanStack mutation) and reset. The component only binds.
 *
 * Supports `?service=<slug>` and `?plan=<id>` deep links from service and plan CTAs.
 */
export function useContactForm() {
  const route = useRoute()
  const form = reactive<ContactFormState>(initialState())
  const errors = ref<FieldErrors>({})

  // Applied after mount so prerendered HTML and hydration stay identical.
  onMounted(() => {
    const { service, plan } = route.query
    if (isContactService(service)) form.service = service
    if (typeof plan === 'string' && planNames[plan]) {
      form.service = 'ongoing-support'
      form.message ||= `I’m interested in the ${planNames[plan]} maintenance plan. `
    }
  })

  const mutation = useMutation({
    mutationFn: contactApi.submit,
    onSuccess: () => Object.assign(form, initialState()),
  })

  function validate(): ContactInput | null {
    const result = contactSchema.safeParse(form)
    if (result.success) {
      errors.value = {}
      return result.data
    }
    const fieldErrors = z.flattenError(result.error).fieldErrors as Record<string, string[] | undefined>
    errors.value = Object.fromEntries(
      Object.entries(fieldErrors).map(([key, messages]) => [key, messages?.[0]]),
    ) as FieldErrors
    return null
  }

  async function submit() {
    const payload = validate()
    if (!payload) return
    await mutation.mutateAsync(payload).catch(() => {
      // surfaced via serverError
    })
  }

  const serverError = computed(() => {
    if (!mutation.isError.value) return null
    const status = (mutation.error.value as { statusCode?: number } | null)?.statusCode
    return status === 429
      ? 'You’ve sent several enquiries in a short time. Please wait a few minutes and try again.'
      : 'Something went wrong sending your enquiry. Please try again or email us directly.'
  })

  return {
    form,
    errors,
    submit,
    serviceOptions: contactServiceOptions,
    isSubmitting: mutation.isPending,
    isSuccess: mutation.isSuccess,
    reference: computed(() => mutation.data.value?.reference),
    serverError,
  }
}
