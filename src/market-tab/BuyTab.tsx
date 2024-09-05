import { FlatList, View } from 'react-native'
import ItemBookMarket from '@/components/ItemBookMarket'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { IBook, IPurchaseBook } from '@/types/book'
import { IQueryOptions, queryDocuments } from '@/firebase/api'
import { EQueryOperator } from '@/firebase/type'
import { useAppSelector } from '@/redux'
import { LoadingAnimation } from '@/components/LoadingAnimation'

export default function BuyTab() {
  const user = useAppSelector((state) => state.user.user)

  const [bookPurchased, setBookPurchased] = useState<IBook[] | null>(null)

  useEffect(() => {
    const fetchBooks = async () => {
      const queryOptions: IQueryOptions = {
        property: 'userId',
        queryOperator: EQueryOperator.EQUAL,
        value: user?.uid,
      }
      const listPurchased = await queryDocuments<IPurchaseBook[]>('purchases', queryOptions)
      console.log("🚀 ~ fetchBooks ~ listPurchased:", listPurchased)
      const listBookId = listPurchased?.map((item) => item.bookId)

      const listBooks = await queryDocuments<IBook[]>('book-radio', {
        property: 'id',
        queryOperator: EQueryOperator.IN,
        value: listBookId,
      })
      setBookPurchased(listBooks)
    }
    fetchBooks()
  }, [user?.uid])
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
