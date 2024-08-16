import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderHome from '@/components/HeaderHome'
import ItemBook, { IDataItemBook } from '@/components/ItemBook'
import { images } from '@/constants'
import TitleHome from '@/components/TitleHome'

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

const Home = () => {
  return (
    <SafeAreaView className="bg-white pb-6 flex-1">
      <View className="mx-4 flex-1">
        {/*<View className="flex-row">*/}
        {/*  <View className="flex-row gap-2 -rotate-90">*/}
        {/*    <TouchableOpacity>*/}
        {/*      <Text>Sách nói</Text>*/}
        {/*    </TouchableOpacity>*/}
        {/*    <TouchableOpacity>*/}
        {/*      <Text>Sách đọc</Text>*/}
        {/*    </TouchableOpacity>*/}
        {/*  </View>*/}
        {/*</View>*/}
        <HeaderHome title="LOGO" />
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1 mb-2">
          <TitleHome title="Gợi ý" isShow={true} />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={fakeData}
            renderItem={(item) => (
              <ItemBook type="play" data={item.item} />
            )}
          />
          <TitleHome title="Tâm lý, tình cảm" />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={fakeData}
            renderItem={(item) => (
              <ItemBook type="play" data={item.item} />
            )}
          />
          <TitleHome title="Văn hóa" />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={fakeData}
            renderItem={(item) => (
              <ItemBook type="play" data={item.item} />
            )}
          />
        </ScrollView>



      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
