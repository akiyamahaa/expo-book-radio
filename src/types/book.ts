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
  categories: string
  typeBook?: string
  author: string
  numberPage: number
  numberChapter: number
  price: number
  rating?: number
  audioUrl?: string
  quantity?: number
}

export interface IComment {
  id?: string
  bookId: string
  userId: string
  comment: string
  rating: number
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
