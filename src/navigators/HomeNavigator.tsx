import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'

const HomeStack = createStackNavigator()

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomePage" component={Home} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator