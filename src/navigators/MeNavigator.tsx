import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Me from '../screens/Me'
import UserCart from '../screens/MeScreens/UserCart'
import Browse from '../screens/MeScreens/Browse'
import History from '../screens/MeScreens/History'
import Following from '../screens/MeScreens/Following'
import Followers from '../screens/MeScreens/Followers'
import LikesAndCol from '../screens/MeScreens/LikesAndCol'
import EditProfile from '../screens/MeScreens/EditProfile'
import Setting from '../screens/MeScreens/Setting'
import UserProfileGeneral from '../screens/UserProfile/UserProfileGeneral'

const MeStack = createStackNavigator()

const MeNavigator: React.FC = () => {
  return (
    <MeStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        
      }}
    >
      <MeStack.Screen name="MePage" component={Me} options={{headerShown: false,}}/>
      <MeStack.Screen name="购物车" component={UserCart} />
      <MeStack.Screen name="创作灵感" component={Browse} />
      <MeStack.Screen name="浏览记录" component={History} />
      <MeStack.Screen name="Following" component={Following} />
      <MeStack.Screen name="Followers" component={Followers} />
      <MeStack.Screen name="LikesAndCol" component={LikesAndCol} />
      <MeStack.Screen name="EditProfile" component={EditProfile} />
      <MeStack.Screen name="Settings" component={Setting} />
      <MeStack.Screen name="UserProfileGeneral" component={UserProfileGeneral} />
    </MeStack.Navigator>
  )
}

export default MeNavigator
