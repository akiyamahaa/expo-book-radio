import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemBook from '@/components/ItemBook'
import { getAllDocuments } from '@/firebase/api'
import { IBook } from '@/types/book'
import { useIsFocused } from '@react-navigation/core'
import { useAppSelector } from '@/redux'

const Favourite = () => {
  const [listDataHome, setListDataHome] = useState<IBook[] | null>([])
  const isFocus = useIsFocused()
  const user = useAppSelector((state) => state.user.user)
  const [listDataWishList, setListDataWishList] = useState<any[]>([])
  const [listDataFavourite, setListDataFavourite] = useState<any[]>([])

  const renderData = async () => {
    const a = await getAllDocuments<IBook[]>('book-radio')
    setListDataHome(a)
    const b: any[] | null = await getAllDocuments('wishlist')
    if (b) {
      setListDataWishList(b)
    }
  }

  useEffect(() => {
    renderData()
  }, [isFocus])

  useEffect(() => {
    if (listDataWishList && listDataWishList?.length > 0) {
      const listCheckHeart = listDataWishList.filter((item) => item.userId === user?.uid)
      if (listCheckHeart && listCheckHeart.length > 0 && listDataHome && listDataHome.length > 0) {
        const commonElements = listDataHome.filter((item1) =>
          listCheckHeart.find((item2) => item1.id === item2.bookId),
        )
        if (commonElements && commonElements.length > 0) {
          setListDataFavourite(commonElements)
        }
      }
    }
  }, [listDataHome, listDataWishList])

  return (
    <SafeAreaView className="bg-white pb-6 flex-1">
      <Text className="text-xl font-semibold text-center mb-2">Yêu thích</Text>
      {listDataFavourite && listDataFavourite?.length > 0 && (
        <ScrollView showsVerticalScrollIndicator={false} className="mb-2 mx-4">
          <View className="flex flex-wrap flex-row gap-2 justify-between">
            {listDataFavourite.map((item) => (
              <View key={item.id}>
                <ItemBook type="play" data={item} />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default Favourite
