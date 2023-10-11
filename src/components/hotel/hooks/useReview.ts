import { useQuery } from 'react-query'

import { getReviews } from '@remote/review'

function useReview({ hotelId }: { hotelId: string }) {
  const { data, isLoading } = useQuery(['reviews', hotelId], () =>
    getReviews({ hotelId }),
  )

  return { data, isLoading }
}

export default useReview
