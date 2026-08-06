import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { fetchHero } from '@/api/hero'

export function useHero() {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('ar') ? 'ar' : 'en'

  return useQuery({
    queryKey: ['hero', lang],
    queryFn: () => fetchHero(lang),
    staleTime: 5 * 60 * 1000,
  })
}
