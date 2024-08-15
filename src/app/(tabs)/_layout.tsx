import React from 'react'
import { Tabs } from 'expo-router'
import { Image, Text, View } from 'react-native'

import { icons } from '@/constants'

type TabIconProps = {
  name: string
  icon: any
  focused: boolean
  color: string
  size: number
}

const TabIcon = ({ name, color, focused, icon }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" />
      <Text style={{ color }} className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: (props) => <TabIcon name="Home" icon={icons.home} {...props} />,
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            tabBarIcon: (props) => <TabIcon name="Bookmark" icon={icons.bookmark} {...props} />,
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            tabBarIcon: (props) => <TabIcon name="Create" icon={icons.plus} {...props} />,
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: (props) => <TabIcon name="Profile" icon={icons.profile} {...props} />,
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
