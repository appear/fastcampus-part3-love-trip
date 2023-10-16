import { useQuery } from 'react-query'
import { getHotelWithRoom } from '@remote/hotel'

import { useAlertContext } from '@contexts/AlertContext'

function useReservation({
  hotelId,
  roomId,
}: {
  hotelId: string
  roomId: string
}) {
  const { open } = useAlertContext()
  const { data, isLoading } = useQuery(
    ['hotelWithRoom', hotelId, roomId],
    () => getHotelWithRoom({ hotelId, roomId }),
    {
      onSuccess: ({ room }) => {
        if (room.avaliableCount === 0) {
          open({
            title: '객신이 매진되었습니다.',
            onButtonClick: () => {
              window.history.back()
            },
          })
        }
      },
    },
  )

  return { data, isLoading }
}

export default useReservation
