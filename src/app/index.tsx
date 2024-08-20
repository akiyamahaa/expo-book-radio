import { Redirect } from 'expo-router'
import { View } from 'react-native'

export default function App() {
  // NOTE: Change logic
  const user = true
  return (
    <>
      <View className="flex-1">
        {user ? <Redirect href="/(tabs)/home" /> : <Redirect href="/sign-in" />}
      </View>
    </>
  )
}
