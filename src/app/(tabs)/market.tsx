import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Market = () => {
  const [activeTab, setActiveTab] = useState("lesson")

  return (
    <SafeAreaView className="bg-white pb-6 flex-1">
      <Text className="text-xl font-semibold text-center mb-2">Mua & bán</Text>
      <View className="bg-[#F3F4F6] h-[48px] w-full py-2 px-4">
        <View className="bg-[#e4e7eb] w-full h-[32px] rounded-[10px] flex-row p-1">
          <TouchableOpacity onPress={() => setActiveTab("lesson")} className={`w-[50%] flex justify-center items-center ${activeTab === "lesson" ? "bg-white rounded-[10px]" : ""}`}>
            <Text>Mua</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("test")} className={`w-[50%] flex justify-center items-center ${activeTab === "test" ? "bg-white rounded-[10px]" : ""}`}>
            <Text>Bán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Market
