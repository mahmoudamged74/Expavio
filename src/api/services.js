import { apiGet } from '@/lib/api/request'

export function fetchServiceCategories(language) {
  return apiGet('/service-categories', language)
}

export function fetchServices(language) {
  return apiGet('/services', language)
}

export function fetchServiceBySlug(slug, language) {
  return apiGet(`/services/${slug}`, language)
}
