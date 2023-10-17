import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Follow from '../screens/HomeScreens/Follow'

const HomeStack = createStackNavigator()

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomePage" component={Home} />
      <HomeStack.Screen name="Follow" component={Follow} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
