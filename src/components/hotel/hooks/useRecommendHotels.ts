import { useQuery } from 'react-query'
import { getRecommendHotels } from '@remote/hotel'

function useRecommendHotels({ hotelIds }: { hotelIds: string[] }) {
  return useQuery(
    ['recommendHotels', JSON.stringify(hotelIds)],
    () => getRecommendHotels(hotelIds),
    {
      enabled: hotelIds.length > 0,
    },
  )
}

export default useRecommendHotels
