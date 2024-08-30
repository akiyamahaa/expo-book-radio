import { View, Text } from 'react-native'

interface IHeaderComponentProps {
  iconLeft?: any
  title: string
  iconRight?: any
  styleHeader?: string
}

export default function HeaderComponent({
  iconLeft,
  title,
  iconRight,
  styleHeader,
}: IHeaderComponentProps) {
  return (
    <View className={`flex flex-row justify-between mb-2 ${styleHeader}`}>
      <View>{iconLeft && iconLeft}</View>
      <View>
        <Text className="text-xl font-bold text-primary-600">{title}</Text>
      </View>
      <View>{iconRight && iconRight}</View>
    </View>
  )
}
