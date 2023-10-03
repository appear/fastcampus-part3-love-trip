import { css } from '@emotion/react'

import { Hotel as IHotel } from '@models/hotel'
import ListRow from '@shared/ListRow'
import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Spacing from '@shared/Spacing'
import addDelimiter from '@utils/addDelimiter'

function Hotel({ hotel }: { hotel: IHotel }) {
  return (
    <div>
      <ListRow
        contents={
          <Flex direction="column">
            <ListRow.Texts
              title={hotel.name}
              subTitle={hotel.comment}
            ></ListRow.Texts>
            <Spacing size={4} />
            <Text typography="t7" color="gray600">
              {hotel.starRating}성급
            </Text>
          </Flex>
        }
        right={
          <Flex direction="column" align="flex-end">
            <img src={hotel.mainImageUrl} alt="" css={imageStyles} />
            <Spacing size={8} />
            <Text bold={true}>{addDelimiter(hotel.price)}원</Text>
          </Flex>
        }
        style={containerStyles}
      />
    </div>
  )
}

const containerStyles = css`
  align-items: flex-start;
`

const imageStyles = css`
  width: 90px;
  height: 110px;
  border-radius: 8px;
  object-fit: cover;
  margin-left: 16px;
`

export default Hotel
