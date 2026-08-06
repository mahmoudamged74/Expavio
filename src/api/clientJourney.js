import { apiGet } from '@/lib/api/request'

export function fetchClientJourney(language) {
  return apiGet('/client-journey', language)
}
