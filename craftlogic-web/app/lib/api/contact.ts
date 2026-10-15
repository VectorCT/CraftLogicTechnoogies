import { apiClient } from './client'
import type { ContactInput, ContactResponse } from '#shared/schemas/contact'

export const contactApi = {
  submit: (payload: ContactInput) =>
    apiClient<ContactResponse>('/contact', { method: 'POST', body: payload }),
}
