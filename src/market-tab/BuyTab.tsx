import { FlatList, View } from 'react-native'
import ItemBookMarket from '@/components/ItemBookMarket'
import { images } from '@/constants'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { IBook, IPurchaseBook } from '@/types/book'
import { IQueryOptions, queryDocuments } from '@/firebase/api'
import { EQueryOperator } from '@/firebase/type'
import { useAppSelector } from '@/redux'
import { LoadingAnimation } from '@/components/LoadingAnimation'

const fakeData = [
  {
    id: 1,
    name: 'Tôi thấy hoa vàng trên cỏ xanh',
    author: 'Nguyễn Nhật Ánh',
    rating: 4.5,
    price: 20000,
    image: images.logoApp,
    numberChapter: 15,
    numberPage: 316,
  },
]

export default function BuyTab() {
  const user = useAppSelector((state) => state.user.user)

  const [bookPurchased, setBookPurchased] = useState<IBook[] | null>(null)

  useEffect(() => {
    const fetchBooks = async () => {
      const queryOptions: IQueryOptions = {
        property: 'userId',
        queryOperator: EQueryOperator.EQUAL,
        value: user.uid,
      }
      const listPurchased = await queryDocuments<IPurchaseBook[]>('purchases', queryOptions)
      const listBookId = listPurchased?.map((item) => item.bookId)

      const listBooks = await queryDocuments<IBook[]>('book-radio', {
        property: 'id',
        queryOperator: EQueryOperator.IN,
        value: listBookId,
      })
      setBookPurchased(listBooks)
    }
    fetchBooks()
  }, [user.uid])
  return (
    <View className="flex-1">
      {bookPurchased ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          data={bookPurchased}
          renderItem={(item) => <ItemBookMarket data={item.item} onPress={() => {}} />}
        />
      ) : (
        <LoadingAnimation />
      )}
    </View>
  )
}
