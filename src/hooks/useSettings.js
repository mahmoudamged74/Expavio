import { useQuery } from '@tanstack/react-query'
import { fetchSettings } from '@/api/settings'
import { useApiLang } from '@/hooks/useApiLang'

export function useSettings() {
  const lang = useApiLang()

  return useQuery({
    queryKey: ['settings', lang],
    queryFn: () => fetchSettings(lang),
    staleTime: 5 * 60 * 1000,
  })
}
