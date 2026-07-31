import { services, serviceGroups } from '@/data/services'
import {
  getLocalizedFilters,
  getLocalizedPackages,
  filterServicesByCategory,
} from '@/data/packages'
import { getServiceDetailsExtras } from '@/data/serviceDetails'

export function getAllServices() {
  return services
}

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) ?? null
}

export function getLocalizedService(service, lang = 'ar') {
  if (!service) return null
  const locale = lang.startsWith('en') ? 'en' : 'ar'
  return {
    slug: service.slug,
    icon: service.icon,
    group: service.group,
    ...service[locale],
  }
}

export function getLocalizedServices(lang = 'ar') {
  return services.map((service) => getLocalizedService(service, lang))
}

export function getLocalizedServiceGroups(lang = 'ar') {
  const locale = lang.startsWith('en') ? 'en' : 'ar'

  return serviceGroups.map((group) => ({
    id: group.id,
    icon: group.icon,
    title: group[locale].title,
    description: group[locale].description,
    services: services
      .filter((service) => service.group === group.id)
      .map((service) => getLocalizedService(service, lang)),
  }))
}

export function getRelatedServices(slug, lang = 'ar', limit = 4) {
  const extras = getServiceDetailsExtras(slug, lang)
  if (extras?.relatedSlugs?.length) {
    return extras.relatedSlugs
      .map((relatedSlug) => getServiceBySlug(relatedSlug))
      .filter(Boolean)
      .slice(0, limit)
      .map((service) => getLocalizedService(service, lang))
  }

  const current = getServiceBySlug(slug)
  if (!current) return getLocalizedServices(lang).slice(0, limit)

  return services
    .filter((service) => service.slug !== slug)
    .filter((service) => service.group === current.group)
    .slice(0, limit)
    .map((service) => getLocalizedService(service, lang))
}

export function getFullServiceDetails(slug, lang = 'ar') {
  const service = getServiceBySlug(slug)
  if (!service) return null

  const localized = getLocalizedService(service, lang)
  const extras = getServiceDetailsExtras(slug, lang)
  const related = getRelatedServices(slug, lang, 4)

  return {
    ...localized,
    outcome: extras?.outcome ?? localized.shortDescription,
    audience: extras?.audience ?? [],
    process: extras?.process ?? [],
    deliverables: extras?.deliverables ?? [],
    faq: extras?.faq ?? [],
    related,
  }
}

export { getLocalizedFilters, getLocalizedPackages, filterServicesByCategory }
