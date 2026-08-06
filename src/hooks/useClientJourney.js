import { useQuery } from '@tanstack/react-query'
import { fetchClientJourney } from '@/api/clientJourney'
import { useApiLang } from '@/hooks/useApiLang'

export function useClientJourney() {
  const lang = useApiLang()

  return useQuery({
    queryKey: ['client-journey', lang],
    queryFn: () => fetchClientJourney(lang),
    staleTime: 5 * 60 * 1000,
  })
}
