import { useState } from 'react'

import { css } from '@emotion/react'
import Text from '@shared/Text'
import Spacing from '@shared/Spacing'
import ListRow from '@shared/ListRow'
import addDelimiter from '@utils/addDelimiter'

import useRecommendHotels from './hooks/useRecommendHotels'
import Button from '@shared/Button'

function RecommendHotels({ recommendHotels }: { recommendHotels: string[] }) {
  const { data, isLoading } = useRecommendHotels({ hotelIds: recommendHotels })
  const [showMore, setShowMore] = useState(false)

  if (data == null || isLoading) {
    return null
  }

  const 호텔리스트 = data.length < 3 || showMore ? data : data.slice(0, 3)

  return (
    <div style={{ margin: '24px 0' }}>
      <Text bold={true} typography="t4" style={{ padding: '0 24px' }}>
        추천 호텔
      </Text>
      <Spacing size={16} />
      <ul>
        {호텔리스트.map((hotel) => (
          <ListRow
            key={hotel.id}
            left={<img src={hotel.mainImageUrl} alt="" css={imageStyles} />}
            contents={
              <ListRow.Texts
                title={hotel.name}
                subTitle={`${addDelimiter(hotel.price)}원`}
              />
            }
          />
        ))}
      </ul>
      {data.length > 3 && showMore === false ? (
        <div style={{ padding: '0 24px', marginTop: 16 }}>
          <Button
            full={true}
            weak={true}
            onClick={() => {
              setShowMore(true)
            }}
          >
            더보기
          </Button>
        </div>
      ) : null}
    </div>
  )
}

const imageStyles = css`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`

export default RecommendHotels
