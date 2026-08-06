import { normalizeServiceIcon } from '@/features/services/icons'

function sortByOrder(a, b) {
  return (a?.sort_order ?? 0) - (b?.sort_order ?? 0)
}

export function mapApiService(service) {
  if (!service) return null

  const subServices = Array.isArray(service.sub_services)
    ? [...service.sub_services].sort(sortByOrder)
    : []

  const whyItems = Array.isArray(service.why_items)
    ? [...service.why_items].sort(sortByOrder)
    : []

  const related = Array.isArray(service.related_services)
    ? service.related_services.map(mapApiService).filter(Boolean)
    : []

  const faqs = Array.isArray(service.faqs)
    ? [...service.faqs]
        .sort(sortByOrder)
        .map((item) => ({ q: item.question, a: item.answer }))
    : []

  return {
    id: service.id,
    slug: service.slug,
    icon: normalizeServiceIcon(service.icon),
    group: service.category?.slug ?? service.service_category_id,
    title: service.title ?? service.name,
    shortDescription: service.description ?? service.short_description ?? '',
    description: service.why_description ?? service.description ?? '',
    items: subServices.map((item) => item.title).filter(Boolean),
    audience: whyItems.map((item) => item.title).filter(Boolean),
    outcome: service.result_description ?? null,
    process: [],
    deliverables: [],
    faq: faqs,
    related,
    imageUrl: service.image_url ?? null,
    category: service.category
      ? {
          id: service.category.slug,
          title: service.category.name,
          description: service.category.description,
          icon: normalizeServiceIcon(service.category.icon),
        }
      : null,
    _fromApi: true,
  }
}

export function mapApiServiceGroups(categories = [], services = []) {
  const mappedServices = [...services].sort(sortByOrder).map(mapApiService).filter(Boolean)

  return [...categories]
    .sort(sortByOrder)
    .map((category) => ({
      id: category.slug,
      icon: normalizeServiceIcon(category.icon),
      title: category.name,
      description: category.description ?? '',
      services: mappedServices.filter(
        (service) =>
          service.group === category.slug ||
          service.category?.id === category.slug,
      ),
    }))
}

export function mapApiFilters(categories = []) {
  return [
    { id: 'all', label: null, slugs: null },
    ...[...categories].sort(sortByOrder).map((category) => ({
      id: category.slug,
      label: category.name,
      slugs: null,
      categorySlug: category.slug,
    })),
  ]
}
