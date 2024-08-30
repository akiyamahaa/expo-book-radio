import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '@/components/HeaderComponent'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import StarRating from '@/components/StarRating'
import CustomButton from '@/components/CustomButton'

export default function EvaluateScreen() {
  const handleRating = (rating) => {
    console.log('Selected Rating:', rating)
  }

  return (
    <SafeAreaView className="bg-white h-full relative flex-1">
      <View className="mx-4 flex-1">
        <HeaderComponent
          title={'Đánh giá & Nhận xét'}
          iconLeft={
            <TouchableOpacity onPress={() => router.back()}>
              <AntDesign name="left" size={24} color="#1F2937" />
            </TouchableOpacity>
          }
        />
        <View className="items-center mt-12">
          <Text className="font-semibold text-base mb-4">Đánh giá</Text>
          <StarRating onRatingPress={handleRating} />
          <Text className="font-semibold text-base mb-2 mt-12">Nhận xét</Text>
        </View>
        <TextInput
          placeholder="Nhập nhận xét"
          multiline
          numberOfLines={4}
          className="border my-2 h-[100px] p-3 border-gray-300 rounded-2xl"
        />
        <CustomButton title="Gửi" containerStyle="absolute w-full bottom-2" />
      </View>
    </SafeAreaView>
  )
}
