import { Image, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { Checkbox } from 'expo-checkbox'

const SignIn = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <>
      <SafeAreaView className="bg-white h-full relative flex-1">
        <View className="mx-4">
          <Image
            source={images.logoApp}
            className="h-[80px] w-[80px] mt-10 mx-auto rounded"
            resizeMode="contain"
          />
          <Text className="text-center text-2xl font-bold mt-10">Đăng nhập</Text>
          <Text className="mt-2 mb-4 text-center text-gray-500">Đăng nhập vào tài khoản của bạn</Text>

          <TextInput
            className="border p-3 border-gray-300 rounded-2xl"
            placeholder="Email"
          />
          <TextInput
            className="border mt-4 p-3 border-gray-300 rounded-2xl"
            placeholder="Mật khẩu"
          />
          <View className="flex mt-4 flex-row justify-between items-center">
            <View className="flex flex-row gap-2 items-center">
              <Checkbox value={isChecked} onValueChange={setChecked} />
              <Text className="text-gray-500">Ghi nhớ đăng nhập</Text>
            </View>
            <TouchableOpacity>
              <Text className="text-[#2D68F8]">Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            title="Đăng nhập"
            onPress={() => router.push(ERouteTable.HOME)}
            containerStyle="w-full mt-7 bg-[#EE4F1C] min-h-[48px]"
            textStyle="text-white"
          />

        </View>
      </SafeAreaView>
      <View className="w-full bg-white">
        <View className="flex-row gap-1 flex text-center pb-10 mx-auto">
          <Text>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity  onPress={() => router.push(ERouteTable.SIGIN_UP)}>
            <Text className="text-[#2D68F8] font-bold">Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>

    </>
  )
}

export default SignIn

const styles = StyleSheet.create({})
