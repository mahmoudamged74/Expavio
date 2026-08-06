import { useQuery } from '@tanstack/react-query'
import { fetchHero } from '@/api/hero'
import { useApiLang } from '@/hooks/useApiLang'

export function useHero() {
  const lang = useApiLang()

  return useQuery({
    queryKey: ['hero', lang],
    queryFn: () => fetchHero(lang),
    staleTime: 5 * 60 * 1000,
  })
}
