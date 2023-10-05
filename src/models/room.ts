export interface Room {
  avaliableCount: number
  basicInfo: {
    [key: string]: string | number
  }
  imageUrl: string
  price: number
  refundable: boolean
  roomName: string
}
