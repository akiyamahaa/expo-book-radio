import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { images } from '@/constants'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { router } from 'expo-router'
import CustomButton from '@/components/CustomButton'

export default function EditProfile() {
  return(
    <SafeAreaView className="px-4 bg-white pb-6 flex-1">
      <View className="flex-row flex items-center pb-2 relative mb-8 border-b border-b-[#D1D5DB]">
        <TouchableOpacity onPress={() => router.back()} className="absolute ml-4 bottom-2">
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-xl m-auto">Thông tin</Text>
      </View>
      <View className="mx-4 mt-[28px]">
        <View className="flex flex-col m-auto items-center">
          <Image
            source={images.profile}
            className="w-[108px] h-[108px] rounded-full"
            resizeMode="cover"
          />
          <TouchableOpacity className="absolute bottom-0 right-0">
            <Image
              source={images.iconCamera}
              className="w-[36px] h-[36px]"
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <TextInput
          className="border mt-4 h-[50px] p-3 border-gray-300 rounded-2xl"
          placeholder="Tên của bạn"
        />
        <TextInput
          className="border mt-4 h-[50px] p-3 border-gray-300 rounded-2xl"
          placeholder="Email"
        />
        <TextInput
          className="border mt-4 h-[50px] p-3 border-gray-300 rounded-2xl"
          placeholder="Số điện thoại"
        />
        <CustomButton
          title="Lưu"
          onPress={() => router.back()}
          containerStyle="w-full mt-7 bg-primary-600 min-h-[48px]"
          textStyle="text-white"
        />
      </View>
    </SafeAreaView>
  )

}
