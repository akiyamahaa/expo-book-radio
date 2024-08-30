import { FlatList, View } from 'react-native'
import ItemBookMarket from '@/components/ItemBookMarket'
import React from 'react'
import { images } from '@/constants'
import { router } from 'expo-router'
import CustomButton from '@/components/CustomButton'

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
  return (
    <View className="flex-1">
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        data={fakeData}
        renderItem={(item) => <ItemBookMarket data={item.item} />}
      />
      <CustomButton
        title="Thêm sách"
        onPress={() => router.push('/detail-buy')}
        containerStyle="w-full mt-7 mb-2 bg-[#EE4F1C] min-h-[48px]"
        textStyle="text-white"
      />
    </View>
  )
}
