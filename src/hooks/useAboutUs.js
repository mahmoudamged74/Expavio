import { useQuery } from '@tanstack/react-query'
import { fetchAboutUs } from '@/api/aboutUs'
import { useApiLang } from '@/hooks/useApiLang'

export function useAboutUs() {
  const lang = useApiLang()

  return useQuery({
    queryKey: ['about-us', lang],
    queryFn: () => fetchAboutUs(lang),
    staleTime: 5 * 60 * 1000,
  })
}
