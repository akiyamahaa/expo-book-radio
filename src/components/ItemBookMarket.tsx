import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { formatCurrencyVND } from '@/untils/formatCurrency'
import { MaterialIcons } from '@expo/vector-icons'

interface IItemBookMarket {
  data: any;
  onPress?: () => void;
}

interface IDataItemBook {
  id: number;
  name: string;
  author: string;
  rating: number;
  price: number;
  image: number;
}

export default function ItemBookMarket({data, onPress}: IItemBookMarket) {

  return (
    <TouchableOpacity className="bg-[#F3F4F6] p-3 rounded-[16px] flex-row flex gap-2" onPress={onPress}>
      <Image
        source={data.image}
        className="h-[100px] w-[65px] rounded-[8px]"
      />
      <View>
        <Text className="text-[#6B7280] mb-1">{data.author}</Text>
        <Text className="text-base font-semibold mb-1">{data.name}</Text>
        <View className="flex flex-row items-center mb-2">
          <MaterialIcons name="star-rate" size={14} color="#EE4F1C" />
          <Text className="text-xs font-semibold text-[#EE4F1C] mr-8">{data.rating}</Text>
          <Text className="mr-4 text-[#6B7280]">{data.numberChapter} Chương</Text>
          <Text className="text-[#6B7280]">{data.numberPage} Trang</Text>
        </View>
        <Text className="text-[#EE4F1C] text-sm">{formatCurrencyVND(data.price)}</Text>
      </View>
    </TouchableOpacity>
  )
}
