import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Me from '../screens/Me'
import UserCart from '../screens/UserCart'
import Browse from '../screens/Browse'
import ViewedPosts from '../screens/ViewedPosts'
import Following from '../screens/Following'
import Followers from '../screens/Followers'
import Likes from '../screens/Likes'
import EditProfile from '../screens/EditProfile'
import Setting from '../screens/Setting'

const MeStack = createStackNavigator()

const MeNavigator: React.FC = () => {
  return (
    <MeStack.Navigator screenOptions={{ headerShown: false }}>
      <MeStack.Screen name="MePage" component={Me} />
      <MeStack.Screen name="UserCart" component={UserCart} />
      <MeStack.Screen name="Browse" component={Browse} />
      <MeStack.Screen name="ViewedPosts" component={ViewedPosts} />
      <MeStack.Screen name="Following" component={Following} />
      <MeStack.Screen name="Followers" component={Followers} />
      <MeStack.Screen name="Likes" component={Likes} />
      <MeStack.Screen name="EditProfile" component={EditProfile} />
      <MeStack.Screen name="Setting" component={Setting} />
    </MeStack.Navigator>
  )
}

export default MeNavigator
