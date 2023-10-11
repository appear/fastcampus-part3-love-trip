import { useCallback, useState, useEffect } from 'react'
import { useQueryClient } from 'react-query'

import { Like } from '@models/like'
import useLike from '@hooks/like/useLike'
import { updateOrder } from '@remote/like'
import { useAlertContext } from '@contexts/AlertContext'

function useEditLike() {
  const { data } = useLike()
  const [updatedLikes, setUpdatedLikes] = useState<Like[]>([])
  const [isEdit, setIsEdit] = useState(false)
  const { open } = useAlertContext()
  const client = useQueryClient()

  useEffect(() => {
    if (data != null) {
      setUpdatedLikes(data)
    }
  }, [data])

  const reorder = useCallback((from: number, to: number) => {
    setIsEdit(true)
    setUpdatedLikes((prevUpdatedLikes) => {
      const newItems = [...prevUpdatedLikes]

      const [fromItem] = newItems.splice(from, 1)

      if (fromItem != null) {
        newItems.splice(to, 0, fromItem)
      }

      newItems.forEach((like, index) => {
        like.order = index + 1
      })

      return newItems
    })
  }, [])

  const save = async () => {
    try {
      await updateOrder(updatedLikes)
      client.setQueriesData(['likes'], updatedLikes)
      setIsEdit(false)
    } catch (e) {
      open({
        title: '알 수 없는 에러가 발생했습니다. 잠시 후 다시 시도해주세요',
        onButtonClick: () => {
          setIsEdit(false)
        },
      })
    }
  }

  return { data: isEdit ? updatedLikes : data, isEdit, reorder, save }
}

export default useEditLike
