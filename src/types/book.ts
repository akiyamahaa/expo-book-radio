export enum EBookType {
  READ,
  AUDIO,
}

export enum EDeliveryStatus {
  PROCESSING,
  DELIVERING,
  DELIVERED,
  REJECTED,
}

export interface IBook {
  id?: string
  name: string
  description: string
  thumbnail: string
  category: string
  typeBook?: string
  author: string
  numberPage: number
  numberChapter: number
  price: number
  rating?: number
  audioUrl?: string
  quantity?: number
  url?: string
}

export interface IComment {
  id?: string
  bookId: string
  userId: string
  comment: string
  rating: number
  username: string
  // createdAt?:Date;
  // updatedAt?:Date
}

export interface IPurchaseBook {
  id?: string
  bookId: string
  userId: string
  userName: string
  phone: string
  address: string
  quantity: number
  deliveryStatus?: string
  // createdAt?:Date;
  // updatedAt?:Date
}

export interface ISellBook {
  id?: string
  userId: string
  bookInfo: IBook
}

export interface IWishList {
  id?: string
  userId: string
  bookId: string
}

export const categoryArray = [
  { label: 'Tiểu thuyết', value: '1' },
  { label: 'Tâm lý', value: '2' },
  { label: 'Hài kịch', value: '3' },
  { label: 'Chính kịch', value: '4' },
  { label: 'Anime', value: '5' },
  { label: 'Trinh thám', value: '6' },
]
