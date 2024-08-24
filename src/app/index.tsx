import { Redirect } from 'expo-router'
import { View } from 'react-native'
import { useAppSelector } from '@/redux'

export default function App() {
  // NOTE: Change logic
  const {user} = useAppSelector(state => state.user);

  return (
    <>
      <View className="flex-1">
        {user ? <Redirect href="/(tabs)/home" /> : <Redirect href="/sign-in" />}
      </View>
    </>
  )
}
