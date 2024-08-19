import { Button, SafeAreaView, TextInput, TouchableOpacity, View, Text, ScrollView, Image } from 'react-native'
import HeaderComponent from '@/components/HeaderComponent'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import * as ImagePicker from 'expo-image-picker';

import { useForm, Controller } from 'react-hook-form';
import CustomButton from '@/components/CustomButton'
import React, { useState } from 'react'

export default function DetailBuy() {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({});
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


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
      <ScrollView className="mx-4" showsVerticalScrollIndicator={false}>
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
        <Controller
          control={control}
          name="numberChapter"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-[#6B7280] font-semibold">Số chương</Text>
              <TextInput
                className="border my-2 h-[50px] p-3 border-gray-300 rounded-2xl"
                placeholder="Nhập số chương"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="numberPage"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-[#6B7280] font-semibold">Số trang</Text>
              <TextInput
                className="border my-2 h-[50px] p-3 border-gray-300 rounded-2xl"
                placeholder="Nhập số trang"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />
        <TouchableOpacity onPress={pickImage} className="border-dashed border h-[172px] rounded-[20px] mt-8 flex items-center justify-center">
          {image ? <Image source={{ uri: image }} className="h-[140px] w-[90px] rounded-[8px]" /> : (
            <View className="flex items-center justify-center flex-col">
              <MaterialCommunityIcons name="image-plus" size={48} color="#EE4F1C" />
              <Text className="mt-2 font-semibold text-[#6B7280]">Tải lên hình ảnh sách</Text>
            </View>
          )}

        </TouchableOpacity>
        <CustomButton
          title="Thêm sách"
          onPress={handleSubmit(onSubmit)}
          containerStyle="w-full mt-7 mb-2 bg-[#EE4F1C] min-h-[48px]"
          textStyle="text-white"
        />
      </ScrollView>

    </SafeAreaView>
  )
}
