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
  id: string
  title: string
  description: string
  imageUrl: string
  categories: string
  type: EBookType
  author: string
  pages: number 
  chapters: number
  price: number
  rating?: number
  audioUrl?: string
}

export interface IComment {
  id: string
  bookId: string
  userId: string
  comment: string
  rating: number
  // createdAt?:Date;
  // updatedAt?:Date
}

export interface IPurchaseBook {
  id: string
  bookId: string
  userId: string
  userName: string
  phone: string
  address: string
  deliveryStatus: EDeliveryStatus
  // createdAt?:Date;
  // updatedAt?:Date
}

export interface ISellBook {
  id: string
  userId: string
  bookInfo: IBook
}
