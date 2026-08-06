import { apiGet } from '@/lib/api/request'

export function fetchAboutUs(language) {
  return apiGet('/about-us', language)
}
