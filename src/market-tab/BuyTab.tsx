import { FlatList, View } from 'react-native'
import ItemBookMarket from '@/components/ItemBookMarket'
import { images } from '@/constants'
import React from 'react'
import { router } from 'expo-router'

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
  return (
    <View className="flex-1">
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        data={fakeData}
        renderItem={(item) => (
          <ItemBookMarket data={item.item} onPress={() => router.push('/detail-buybook')} />
        )}
      />
    </View>
  )
}
