import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderHome from '@/components/HeaderHome'
import ItemBook from '@/components/ItemBook'
import { images } from '@/constants'
import TitleHome from '@/components/TitleHome'
import { useAppSelector } from '@/redux'

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
  const [activeTab, setActiveTab] = React.useState(1)
  const {user} = useAppSelector(state => state.user);

  return (
    <SafeAreaView className="bg-white pb-6 flex-1">
      <View className="mx-4 flex-1">
        <HeaderHome title="LOGO" />

        <ScrollView showsVerticalScrollIndicator={false} className="flex-1 mb-2">
          <View className="flex-row flex justify-between">
            <View className="flex-row gap-2 -rotate-90 mt-[120px] -ml-14 h-8">
              <TouchableOpacity onPress={() => setActiveTab(1)} className={`${activeTab === 1 ? "border-b-2 border-b-[#EE4F1C]" : ""}`}>
                <Text className={`${activeTab === 1 ? "font-bold" : ""}`}>Sách nói</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveTab(0)} className={`${activeTab === 0 ? "border-b-2 border-b-[#EE4F1C]" : ""}`}>
                <Text className={`${activeTab === 0 ? "font-bold" : ""}`}>Sách đọc</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={fakeData}
              renderItem={(item) => (
                <ItemBook type="play" data={item.item} />
              )}
            />
          </View>
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
