import { useInfiniteQuery } from 'react-query'

import { getHotels } from '@remote/hotel'
import { useCallback } from 'react'

function useHotels() {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(['hotels'], ({ pageParam }) => getHotels(pageParam), {
    getNextPageParam: (snapshot) => {
      return snapshot.lastVisible
    },
    suspense: true,
  })

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return
    }

    fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetching])

  const hotels = data?.pages.map(({ items }) => items).flat()

  return { data: hotels, loadMore, isFetching, hasNextPage }
}

export default useHotels
