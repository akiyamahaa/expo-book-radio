import { Image, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { Checkbox } from 'expo-checkbox'
import { setUser } from '@/redux/userSlice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import firebaseApp from '@/firebase'
import { useAppDispatch } from '@/redux'
import { Ionicons } from '@expo/vector-icons'
import { Toast } from 'expo-react-native-toastify'

const SignIn = () => {
  const [isChecked, setChecked] = useState(false)
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const auth = getAuth(firebaseApp)

  const handleAuthentication = async () => {
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password).then((res) => {
        const user = {
          uid: res?.user.uid,
          email: res?.user.email,
          displayName: res?.user.displayName,
          photoURL: res?.user.photoURL,
          emailVerified: res?.user.emailVerified,
        }
        setLoading(false)
        dispatch(setUser(user))
        Toast.success('Đăng nhập thành công!')
        // router.push(ERouteTable.HOME)
      })
    } catch (error) {
      Toast.error(error.message ? error.message : 'Đăng nhập thất bại, vui lòng thử lại!')
      setLoading(false)
    }
  }

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
          <Text className="mt-2 mb-4 text-center text-gray-500">
            Đăng nhập vào tài khoản của bạn
          </Text>

          <TextInput
            className="border p-3 border-gray-300 rounded-2xl"
            placeholder="Email"
            onChangeText={(e) => {
              setEmail(e)
            }}
          />
          <View className="relative">
            <TextInput
              className="border mt-4 p-3 border-gray-300 rounded-2xl"
              placeholder="Mật khẩu"
              secureTextEntry={!isPasswordVisible}
              onChangeText={(e) => {
                setPassword(e)
              }}
            />
            <TouchableOpacity
              className="absolute right-5 top-7"
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              <Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} color="gray" />
            </TouchableOpacity>
          </View>

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
            // onPress={handleLogin}
            onPress={handleAuthentication}
            containerStyle="w-full mt-7 bg-[#EE4F1C] min-h-[48px]"
            textStyle="text-white"
            isLoading={loading}
          />
        </View>
      </SafeAreaView>
      <View className="w-full bg-white">
        <View className="flex-row gap-1 flex text-center pb-10 mx-auto">
          <Text>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity onPress={() => router.push(ERouteTable.SIGIN_UP)}>
            <Text className="text-[#2D68F8] font-bold">Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default SignIn

const styles = StyleSheet.create({})
