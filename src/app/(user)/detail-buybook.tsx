import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import HeaderComponent from '@/components/HeaderComponent'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import CustomButton from '@/components/CustomButton'
import { formatCurrencyVND } from '@/utils/formatCurrency'
import { Controller, useForm } from 'react-hook-form'

export default function DetailBuyBook() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});


  const onSubmit = data => {
    console.log(data);
    router.back();
  };

  return(
    <SafeAreaView className="bg-white h-full relative flex-1">
      <View className="mx-4 flex-1">
        <HeaderComponent title={"Thông tin mua sách"} iconLeft={<TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>} />
        <View className="flex-1 mt-3">
          <View className="pb-2 border-b border-b-[#D1D5DB]">
            <Text>Trương Học Vĩ</Text>
            <Text className="text-base font-semibold mt-0.5">Ổn định hay tự do</Text>
          </View>
          <View className="flex flex-row justify-between mt-2">
            <Text className="text-sm font-semibold text-[#6B7280]">Tổng</Text>
            <Text className="text-[#EE4F1C] text-lg font-semibold">{formatCurrencyVND(10000)}</Text>
          </View>
          <Controller
            control={control}
            name="fullName"
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="mt-8">
                <Text className="text-[#6B7280] font-semibold">Họ tên</Text>
                <TextInput
                  className="border my-2 h-[50px] p-3 border-gray-300 rounded-2xl"
                  placeholder="Nhập họ tên"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
          />
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="mt-2">
                <Text className="text-[#6B7280] font-semibold">Số điện thoại</Text>
                <TextInput
                  className="border my-2 h-[50px] p-3 border-gray-300 rounded-2xl"
                  placeholder="Số điện thoại"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="mt-2">
                <Text className="text-[#6B7280] font-semibold">Địa chỉ nhận hàng</Text>
                <TextInput
                  className="border my-2 h-[50px] p-3 border-gray-300 rounded-2xl"
                  placeholder="Nhập địa chỉ nhận hàng"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
          />
          <Controller
            control={control}
            name="quantity"
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="mt-2">
                <Text className="text-[#6B7280] font-semibold">Số lượng</Text>
                <TextInput
                  className="border my-2 h-[50px] p-3 border-gray-300 rounded-2xl"
                  placeholder="Số lượng"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
            )}
          />


        </View>
        <CustomButton title="Hủy" onPress={onSubmit} />
      </View>

    </SafeAreaView>
  )
}
