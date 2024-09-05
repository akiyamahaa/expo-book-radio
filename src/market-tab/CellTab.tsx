import { FlatList, View } from 'react-native'
import ItemBookMarket from '@/components/ItemBookMarket'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants'
import { router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import { IBook, ISellBook } from '@/types/book'
import { useAppSelector } from '@/redux'
import { IQueryOptions, queryDocuments } from '@/firebase/api'
import { EQueryOperator } from '@/firebase/type'
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

export default function CellTab() {
  const user = useAppSelector((state) => state.user.user)

  const [bookSell, setBookSell] = useState<ISellBook[] | null>(null)

  useEffect(() => {
    const fetchBooks = async () => {
      const queryOptions: IQueryOptions = {
        property: 'userId',
        queryOperator: EQueryOperator.EQUAL,
        value: user!.uid,
      }
      const listPurchased = await queryDocuments<ISellBook[]>('sells', queryOptions)
      console.log('🚀 ~ fetchBooks ~ listPurchased:', listPurchased)
      setBookSell(listPurchased)
    }
    fetchBooks()
  }, [user])
  return (
    <View className="flex-1">
      {bookSell ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          data={bookSell}
          renderItem={(item) => <ItemBookMarket data={item.item.bookInfo} onPress={() => {}} />}
        />
      ) : (
        <LoadingAnimation />
      )}
    </View>
  )
}
