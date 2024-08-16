import { StyleSheet, Switch, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { ERouteTable } from '@/constants/route-table'

const Profile = () => {
  const [activeNotify, setActiveNotify] = useState<boolean>(false);


  return (
    <SafeAreaView className="px-4 bg-white pb-6 flex-1">
      <View className="flex-row flex justify-center items-center pb-2 border-b border-b-[#D1D5DB]">
        <Text className="font-medium text-xl">Hồ sơ</Text>
      </View>
      <View className="mx-4 mt-[28px]">
        <View className="flex flex-col m-auto items-center">
          <Image
            source={images.profile}
            className="w-[108px] h-[108px] rounded-full"
            resizeMode="cover"
          />
          <Text className="font-bold text-2xl mt-3 mb-[32px]">Letitia Parker</Text>
        </View>
        <TouchableOpacity
          className="flex-row justify-between items-center pb-2 border-b border-b-[#D1D5DB] mt-2"
          onPress={() => router.navigate('/edit-profile')}
        >
          <View className="flex flex-row gap-2 items-center">
            <Image
              source={images.iconProfile}
              className="w-[48px] h-[48px]"
              resizeMode="cover"
            />
            <Text className="font-bold text-base">Thông tin</Text>
          </View>
          <AntDesign name="right" size={20} color="#6B7280" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate('/change-pasword')} className="flex-row justify-between items-center pb-2 border-b border-b-[#D1D5DB] mt-2">
          <View className="flex flex-row gap-2 items-center">
            <Image
              source={images.iconChangePass}
              className="w-[48px] h-[48px]"
              resizeMode="cover"
            />
            <Text className="font-bold text-base">Đổi mật khẩu</Text>
          </View>
          <AntDesign name="right" size={20} color="#6B7280" />
        </TouchableOpacity>
        <View className="flex-row justify-between items-center pb-2 border-b border-b-[#D1D5DB] mt-2">
          <View className="flex flex-row gap-2 items-center">
            <Image
              source={images.iconNotification}
              className="w-[48px] h-[48px]"
              resizeMode="cover"
            />
            <Text className="font-bold text-base">Thông báo</Text>
          </View>
          <Switch value={activeNotify} onChange={() => setActiveNotify(!activeNotify)} />
        </View>
        <TouchableOpacity onPress={() => router.push(ERouteTable.SIGIN_IN)} className="flex-row justify-between items-center pb-2 border-b border-b-[#D1D5DB] mt-2">
          <View className="flex flex-row gap-2 items-center">
            <Image
              source={images.iconLogout}
              className="w-[48px] h-[48px]"
              resizeMode="cover"
            />
            <Text className="font-bold text-base">Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})
