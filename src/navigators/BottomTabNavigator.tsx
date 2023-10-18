// TabNavigator.tsx
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeNavigator'
import MeStack from './MeNavigator'

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
      />
      <BottomTab.Screen name="Me" component={MeStack} />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
