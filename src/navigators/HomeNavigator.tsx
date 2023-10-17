import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Follow from '../screens/HomeScreens/Follow'
import Explore from '../screens/HomeScreens/Explore'
import Nearby from '../screens/HomeScreens/Nearby'

const HomeStack = createStackNavigator()

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomePage" component={Home} />
      <HomeStack.Screen name="Follow" component={Follow} />
      <HomeStack.Screen name="Explore" component={Explore} />
      <HomeStack.Screen name="Nearby" component={Nearby} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
