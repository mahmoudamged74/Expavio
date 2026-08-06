import { useQuery } from '@tanstack/react-query'
import { fetchWhyUs } from '@/api/whyUs'
import { useApiLang } from '@/hooks/useApiLang'

export function useWhyUs() {
  const lang = useApiLang()

  return useQuery({
    queryKey: ['why-us', lang],
    queryFn: () => fetchWhyUs(lang),
    staleTime: 5 * 60 * 1000,
  })
}
