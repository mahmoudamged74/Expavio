import { apiGet } from '@/lib/api/request'

export function fetchHero(language) {
  return apiGet('/hero', language)
}
