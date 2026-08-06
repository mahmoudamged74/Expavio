import { useQuery } from '@tanstack/react-query'
import { fetchFaqs } from '@/api/faqs'
import { useApiLang } from '@/hooks/useApiLang'

export function useFaqs() {
  const lang = useApiLang()

  return useQuery({
    queryKey: ['faqs', lang],
    queryFn: () => fetchFaqs(lang),
    staleTime: 5 * 60 * 1000,
  })
}
