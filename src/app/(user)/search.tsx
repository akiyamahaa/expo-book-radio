import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import ItemBook from '@/components/ItemBook'
import { images } from '@/constants'

const fakeData = [
  {
    id: 'asjsajdaskjdkals',
    image: images.logoApp,
    name: 'Tôi thấy hoa vàng trên cỏ xanh',
    author: 'Nguyen van a',
    rating: 4,
  },
  {
    id: 'asjsajdaskjddsadakals',
    image: images.thumbnail,
    name: 'Tôi thấy hoa vàng trên cỏ xanh',
    author: 'Nguyen van a',
    rating: 4,
  },
  {
    id: 'asjsajdaskjddsadadassddakals',
    image: images.thumbnail,
    name: 'Tôi thấy hoa vàng trên cỏ xanh',
    author: 'Nguyen van a',
    rating: 4,
  },
]

const Search = () => {
  return (
    <SafeAreaView className="bg-white h-full relative flex-1">
      <View className="flex-row w-full items-center gap-2 mx-4 flex">
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          className="border w-[80%] p-3 border-gray-300 rounded-2xl"
          placeholder="Tìm kiếm"
          icon="search"
        />
      </View>
      <View className="mx-4 mt-4">
        <ScrollView showsVerticalScrollIndicator={false} className="mb-2">
          <View className="flex flex-wrap flex-row gap-2 justify-between">
            {fakeData.map((item) => (
              <View key={item.id}>
                <ItemBook type="play" data={item} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Search
