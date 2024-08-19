import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderComponent from '@/components/HeaderComponent'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function DetailBook() {
  const [activeHeart, setActiveHeart] = React.useState(false)

  return (
    <SafeAreaView>
      <View className="mx-4">
        <HeaderComponent title="Thông tin sách" iconLeft={
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="left" size={24} color="#1F2937" />
          </TouchableOpacity>}
        iconRight={
          <TouchableOpacity onPress={() => setActiveHeart(!activeHeart)}>
            <MaterialCommunityIcons name="cards-heart-outline" size={24} color={activeHeart ? "red" :"#1F2937"} />
          </TouchableOpacity>
        }
        />
      </View>
    </SafeAreaView>
  )
}
