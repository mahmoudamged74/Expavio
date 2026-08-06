import { apiGet } from '@/lib/api/request'

export function fetchWhyUs(language) {
  return apiGet('/why-us', language)
}
