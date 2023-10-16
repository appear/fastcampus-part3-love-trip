import { parse } from 'qs'
import { useEffect } from 'react'

import useReservation from '@components/reservation/hooks/useReservation'
import Summary from '@components/reservation/Summary'
import Spacing from '@shared/Spacing'

function ReservationPage() {
  const { startDate, endDate, nights, roomId, hotelId } = parse(
    window.location.search,
    { ignoreQueryPrefix: true },
  ) as {
    startDate: string
    endDate: string
    nights: string
    roomId: string
    hotelId: string
  }

  useEffect(() => {
    if (
      [startDate, endDate, nights, roomId, hotelId].some((param) => {
        return param == null
      })
    ) {
      window.history.back()
    }
  }, [startDate, endDate, nights, roomId, hotelId])

  const { data, isLoading } = useReservation({ hotelId, roomId })

  if (data == null || isLoading === true) {
    return null
  }

  const { hotel, room } = data

  return (
    <div>
      <Summary
        hotelName={hotel.name}
        room={room}
        startDate={startDate}
        endDate={endDate}
        nights={nights}
      />
      <Spacing size={8} backgroundColor="gray100" />
    </div>
  )
}

export default ReservationPage
