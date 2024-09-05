import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderHome from '@/components/HeaderHome'
import ItemBook from '@/components/ItemBook'
import TitleHome from '@/components/TitleHome'
import { getAllDocuments } from '@/firebase/api'
import { LoadingAnimation } from '@/components/LoadingAnimation'
import { IBook } from '@/types/book'

const Home = () => {
  const [activeTab, setActiveTab] = React.useState(1)
  const [listDataHome, setListDataHome] = useState<IBook[] | null>([])
  const [dataRead, setDataRead] = useState<any>([])
  const [dataRadio, setDataRadio] = useState<any>([])

  const renderData = async () => {
    const a = await getAllDocuments<IBook[]>('book-radio')
    setListDataHome(a)
  }

  useEffect(() => {
    renderData()
  }, [])

  useEffect(() => {
    if (listDataHome) {
      setDataRead(listDataHome.filter((item) => item.typeBook === 'READ'))
      setDataRadio(listDataHome.filter((item) => item.typeBook === 'RADIO'))
    }
  }, [listDataHome])

  return (
    <SafeAreaView className="bg-white pb-6 flex-1">
      <View className="mx-4 flex-1">
        <HeaderHome title="LOGO" />
        {listDataHome &&
        !(listDataHome.length > 0) &&
        !(dataRead.length > 0 || dataRadio.length > 0) ? (
          <LoadingAnimation />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false} className="flex-1 mb-2">
            <View className="flex-row flex justify-between">
              <View className="flex-row gap-2 -rotate-90 mt-[120px] -ml-14 h-8">
                <TouchableOpacity
                  onPress={() => setActiveTab(1)}
                  className={`${activeTab === 1 ? 'border-b-2 border-b-[#EE4F1C]' : ''}`}
                >
                  <Text className={`${activeTab === 1 ? 'font-bold' : ''}`}>Sách nói</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveTab(0)}
                  className={`${activeTab === 0 ? 'border-b-2 border-b-[#EE4F1C]' : ''}`}
                >
                  <Text className={`${activeTab === 0 ? 'font-bold' : ''}`}>Sách đọc</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={activeTab !== 1 ? dataRead : dataRadio}
                renderItem={(item) => (
                  <ItemBook type={activeTab === 1 ? 'play' : ''} data={item.item} />
                )}
              />
            </View>
            <TitleHome title="Gợi ý" isShow={true} />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={activeTab !== 1 ? dataRead : dataRadio}
              renderItem={(item) => <ItemBook type="play" data={item.item} />}
            />
            <TitleHome title="Tâm lý, tình cảm" />
            {listDataHome && (
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={listDataHome.filter((item) => item.category === '1')}
                renderItem={(item) => <ItemBook type="play" data={item.item} />}
              />
            )}

            <TitleHome title="Văn hóa" />
            {listDataHome && (
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={listDataHome.filter((item) => item.category === '0')}
                renderItem={(item) => <ItemBook type="play" data={item.item} />}
              />
            )}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Home
