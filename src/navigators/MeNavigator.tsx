import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Me from '../screens/Me'
import UserCart from '../screens/MeScreens/UserCart'
import Browse from '../screens/MeScreens/Browse'
import History from '../screens/MeScreens/History'
import Following from '../screens/MeScreens/Following'
import Followers from '../screens/MeScreens/Followers'
import Likes from '../screens/MeScreens/Likes'
import EditProfile from '../screens/MeScreens/EditProfile'
import Setting from '../screens/MeScreens/Setting'

const MeStack = createStackNavigator()

const MeNavigator: React.FC = () => {
  return (
    <MeStack.Navigator
      screenOptions={{
        gestureEnabled: true
      }}
    >
      <MeStack.Screen name="MePage" component={Me} />
      <MeStack.Screen name="UserCart" component={UserCart} />
      <MeStack.Screen name="Browse" component={Browse} />
      <MeStack.Screen name="History" component={History} />
      <MeStack.Screen name="Following" component={Following} />
      <MeStack.Screen name="Followers" component={Followers} />
      <MeStack.Screen name="Likes" component={Likes} />
      <MeStack.Screen name="EditProfile" component={EditProfile} />
      <MeStack.Screen name="Setting" component={Setting} />
    </MeStack.Navigator>
  )
}

export default MeNavigator
