import { apiGet } from '@/lib/api/request'

export function fetchFaqs(language) {
  return apiGet('/faqs', language)
}
