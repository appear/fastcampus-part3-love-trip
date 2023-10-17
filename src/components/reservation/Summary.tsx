import { css } from '@emotion/react'

import { Room } from '@models/room'
import Text from '@shared/Text'
import Spacing from '@shared/Spacing'
import Flex from '@shared/Flex'

interface SummaryProps {
  hotelName: string
  room: Room
  startDate: string
  endDate: string
  nights: string
}

function Summary({
  hotelName,
  room,
  startDate,
  endDate,
  nights,
}: SummaryProps) {
  return (
    <div style={{ padding: 24 }}>
      <Text typography="t4" bold={true}>
        {hotelName}
      </Text>

      <Spacing size={8} />

      <img
        src={room.imageUrl}
        alt={`${room.roomName} 의 이미지`}
        css={imageStyles}
      />

      <Spacing size={16} />

      <div>
        <Text bold={true}>{room.roomName}</Text>

        <Spacing size={4} />

        <ul css={listStyles}>
          <Flex as="li" justify="space-between">
            <Text color="gray600" typography="t6">
              일정
            </Text>
            <Text typography="t6">{`${startDate} - ${endDate} (${nights}박)`}</Text>
          </Flex>

          {Object.keys(room.basicInfo).map((key) => {
            if (key in INFO_LBAEL_MAP) {
              return (
                <Flex as="li" justify="space-between" key={key}>
                  <Text color="gray600" typography="t6">
                    {INFO_LBAEL_MAP[key as keyof typeof INFO_LBAEL_MAP]}
                  </Text>
                  <Text typography="t6">{room.basicInfo[key]}</Text>
                </Flex>
              )
            }

            return null
          })}
        </ul>
      </div>
    </div>
  )
}

const INFO_LBAEL_MAP = {
  bed: '침대',
  maxOccupancy: '최대인원',
  squareMeters: '면적',
  smoke: '흡연여부',
}

const imageStyles = css`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`

const listStyles = css`
  li:not(last-child) {
    margin-bottom: 8px;
  }
`

export default Summary
