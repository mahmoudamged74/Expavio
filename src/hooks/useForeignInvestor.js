import { useQuery } from '@tanstack/react-query'
import { fetchForeignInvestor } from '@/api/foreignInvestor'
import { useApiLang } from '@/hooks/useApiLang'

export function useForeignInvestor() {
  const lang = useApiLang()

  return useQuery({
    queryKey: ['foreign-investor', lang],
    queryFn: () => fetchForeignInvestor(lang),
    staleTime: 5 * 60 * 1000,
  })
}
