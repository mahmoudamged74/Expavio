import { apiGet } from '@/lib/api/request'

export function fetchSettings(language) {
  return apiGet('/settings', language)
}
