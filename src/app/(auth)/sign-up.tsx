import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'

const SignUp = () => {
  return (
    <>
      <SafeAreaView className="bg-white h-full relative flex-1">
        <View className="mx-4">
          <Image
            source={images.logoApp}
            className="h-[80px] w-[80px] mt-10 mx-auto rounded"
            resizeMode="contain"
          />
          <Text className="text-center text-2xl font-bold mt-10">Đăng ký</Text>
          <Text className="mt-2 mb-4 text-center text-gray-500">Đăng ký tài khoản của bạn</Text>

          <TextInput
            className="border p-3 border-gray-300 rounded-2xl"
            placeholder="Tên"
          />
          <TextInput
            className="border mt-4 p-3 border-gray-300 rounded-2xl"
            placeholder="Email"
          />
          <TextInput
            className="border mt-4 p-3 border-gray-300 rounded-2xl"
            placeholder="Mật khẩu"
            inputMode="password"
          />
          <TextInput
            className="border mt-4 p-3 border-gray-300 rounded-2xl"
            placeholder="Nhập lại mật khẩu"
            inputMode="password"
          />

          <CustomButton
            title="Đăng ký"
            onPress={() => router.push(ERouteTable.VERIFY_ACCOUNT)}
            containerStyle="w-full mt-7 bg-[#EE4F1C] min-h-[48px]"
            textStyle="text-white"
          />

        </View>
      </SafeAreaView>
      <View className="w-full bg-white">
        <View className="flex-row gap-1 flex text-center pb-10 mx-auto">
          <Text>Bạn đã có tài khoản?</Text>
          <TouchableOpacity onPress={() => router.push(ERouteTable.SIGIN_IN)}>
            <Text className="text-[#2D68F8] font-bold">Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default SignUp

const styles = StyleSheet.create({})
