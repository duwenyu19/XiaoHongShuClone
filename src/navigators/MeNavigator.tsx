import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Me from '../screens/Me'
import UserCart from '../screens/UserCart'
import Browse from '../screens/Browse'

const MeStack = createStackNavigator()

const MeNavigator: React.FC = () => {
  return (
    <MeStack.Navigator screenOptions={{ headerShown: false }}>
      <MeStack.Screen name="Me" component={Me} />
      <MeStack.Screen name="UserCart" component={UserCart} />
      <MeStack.Screen name="Browse" component={Browse} />
    </MeStack.Navigator>
  )
}

export default MeNavigator
