// TabNavigator.tsx
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeNavigator'
import MeStack from './MeNavigator'

const Tab = createBottomTabNavigator()

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen name="Me" component={MeStack} />
    </Tab.Navigator>
  )
}

export default TabNavigator
