import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import ItemBook from '@/components/ItemBook'

const fakeData = [
  {
    id: "asjsajdaskjdkals",
    image: images.logoApp,
    name: 'Tôi thấy hoa vàng trên cỏ xanh',
    author: "Nguyen van a",
    rating: 4
  },
  {
    id: "asjsajdaskjddsadakals",
    image: images.thumbnail,
    name: 'Tôi thấy hoa vàng trên cỏ xanh',
    author: "Nguyen van a",
    rating: 4
  },
  {
    id: "asjsajdaskjddsadadassddakals",
    image: images.thumbnail,
    name: 'Tôi thấy hoa vàng trên cỏ xanh',
    author: "Nguyen van a",
    rating: 4
  },
]

const Favourite = () => {
  return (
    <SafeAreaView className="bg-white pb-6 flex-1">
      <Text className="text-xl font-semibold text-center mb-2">Yêu thích</Text>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-2 mx-4">
        <View className="flex flex-wrap flex-row gap-2 justify-between">
          {fakeData.map((item) => (
            <View key={item.id}>
              <ItemBook type="play" data={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Favourite

const styles = StyleSheet.create({})
