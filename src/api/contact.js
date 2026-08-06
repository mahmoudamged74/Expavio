import { apiPost } from '@/lib/api/request'

export function submitContact(payload, language) {
  return apiPost('/contact', payload, language)
}
