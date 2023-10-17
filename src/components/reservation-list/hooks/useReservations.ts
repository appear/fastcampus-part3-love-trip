import { useQuery } from 'react-query'
import { getReservations } from '@remote/reservation'

import useUser from '@hooks/auth/useUser'

export default function useReservations() {
  const user = useUser()

  const { data, isLoading } = useQuery(
    ['reservations', user?.uid],
    () => getReservations({ userId: user?.uid as string }),
    {
      enabled: user != null,
    },
  )

  return { data, isLoading }
}
