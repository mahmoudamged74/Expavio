import { useMemo } from 'react'
import { useQueries, useQuery } from '@tanstack/react-query'
import {
  fetchServiceBySlug,
  fetchServiceCategories,
  fetchServices,
} from '@/api/services'
import { useApiLang } from '@/hooks/useApiLang'
import {
  getFullServiceDetails,
  getLocalizedFilters,
  getLocalizedServiceGroups,
  getLocalizedServices,
} from '@/features/services'
import {
  mapApiFilters,
  mapApiService,
  mapApiServiceGroups,
} from '@/features/services/mapApi'

const STALE = 5 * 60 * 1000

export function useServiceCatalog() {
  const lang = useApiLang()

  const [categoriesQuery, servicesQuery] = useQueries({
    queries: [
      {
        queryKey: ['service-categories', lang],
        queryFn: () => fetchServiceCategories(lang),
        staleTime: STALE,
      },
      {
        queryKey: ['services', lang],
        queryFn: () => fetchServices(lang),
        staleTime: STALE,
      },
    ],
  })

  const fallbackGroups = useMemo(
    () => getLocalizedServiceGroups(lang),
    [lang],
  )
  const fallbackServices = useMemo(() => getLocalizedServices(lang), [lang])
  const fallbackFilters = useMemo(() => getLocalizedFilters(lang), [lang])

  const apiGroups = useMemo(() => {
    if (!categoriesQuery.data?.length || !servicesQuery.data?.length) return null
    return mapApiServiceGroups(categoriesQuery.data, servicesQuery.data)
  }, [categoriesQuery.data, servicesQuery.data])

  const apiServices = useMemo(() => {
    if (!servicesQuery.data?.length) return null
    return servicesQuery.data.map(mapApiService).filter(Boolean)
  }, [servicesQuery.data])

  const apiFilters = useMemo(() => {
    if (!categoriesQuery.data?.length) return null
    return mapApiFilters(categoriesQuery.data).map((filter) => ({
      ...filter,
      label:
        filter.id === 'all'
          ? fallbackFilters.find((item) => item.id === 'all')?.label ??
            (lang === 'ar' ? 'الكل' : 'All')
          : filter.label,
    }))
  }, [categoriesQuery.data, fallbackFilters, lang])

  return {
    groups: apiGroups?.length ? apiGroups : fallbackGroups,
    services: apiServices?.length ? apiServices : fallbackServices,
    filters: apiFilters?.length ? apiFilters : fallbackFilters,
    isLoading: categoriesQuery.isLoading || servicesQuery.isLoading,
  }
}

export function useServiceDetails(slug) {
  const lang = useApiLang()
  const fallback = useMemo(
    () => getFullServiceDetails(slug, lang),
    [slug, lang],
  )

  const query = useQuery({
    queryKey: ['service', slug, lang],
    queryFn: () => fetchServiceBySlug(slug, lang),
    enabled: Boolean(slug),
    staleTime: STALE,
  })

  const service = useMemo(() => {
    if (!query.data) return fallback

    const mapped = mapApiService(query.data)
    if (!mapped) return fallback

    return {
      ...fallback,
      ...mapped,
      description:
        mapped.description || fallback?.description || mapped.shortDescription,
      items: mapped.items?.length ? mapped.items : (fallback?.items ?? []),
      audience: mapped.audience?.length
        ? mapped.audience
        : (fallback?.audience ?? []),
      process: fallback?.process ?? [],
      deliverables: fallback?.deliverables ?? [],
      sections: fallback?.sections ?? [],
      faq: mapped.faq?.length ? mapped.faq : (fallback?.faq ?? []),
      related: mapped.related?.length
        ? mapped.related
        : (fallback?.related ?? []),
      outcome: mapped.outcome || fallback?.outcome || null,
    }
  }, [query.data, fallback])

  return {
    service,
    isLoading: query.isLoading && !fallback,
    isError: query.isError && !fallback,
  }
}
