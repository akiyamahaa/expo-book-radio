import { Button, SafeAreaView, TextInput, TouchableOpacity, View, Text } from 'react-native'
import HeaderComponent from '@/components/HeaderComponent'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'

import { useForm, Controller } from 'react-hook-form';
import CustomButton from '@/components/CustomButton'
import React from 'react'

export default function DetailBuy() {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({});

    const onSubmit = data => {
      console.log(data);
    };

  return(
    <SafeAreaView className="bg-white pb-6 flex-1">
      <View className="mx-4">
        <HeaderComponent title="Bán sách" iconLeft={
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
        } />
      </View>
      <View className="mx-4">
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-[#6B7280] font-semibold">Tên sách</Text>
              <TextInput
                className="border my-2 h-[50px] p-3 border-gray-300 rounded-2xl"
                placeholder="Nhập tên sách"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="author"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-[#6B7280] font-semibold">Tác giả</Text>
              <TextInput
                className="border my-2 h-[50px] p-3 border-gray-300 rounded-2xl"
                placeholder="Nhập tên tác giả"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-[#6B7280] font-semibold">Mô tả</Text>
              <TextInput
                className="border my-2 h-[100px] p-3 border-gray-300 rounded-2xl"
                placeholder="Nhập mô tả"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="price"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-[#6B7280] font-semibold">Giá</Text>
              <TextInput
                className="border my-2 h-[50px] p-3 border-gray-300 rounded-2xl"
                placeholder="Nhập giá"
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
            <View>
              <Text className="text-[#6B7280] font-semibold">Số lượng</Text>
              <TextInput
                className="border my-2 h-[50px] p-3 border-gray-300 rounded-2xl"
                placeholder="Nhập số lượng"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />
        <CustomButton
          title="Thêm sách"
          onPress={handleSubmit(onSubmit)}
          containerStyle="w-full mt-7 mb-2 bg-[#EE4F1C] min-h-[48px]"
          textStyle="text-white"
        />
      </View>

    </SafeAreaView>
  )
}
