import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FollowersDetail from '../screens/MeScreens/Followers'
import UserProfileGeneral from '../screens/UserInfo/UserProfileGeneral'
import { FollowersStackParamList } from '../utilities/types'

const FollowersStack = createStackNavigator<FollowersStackParamList>()

const FollowersNavigator: React.FC = () => {
  return (
    <FollowersStack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}
    >
      <FollowersStack.Screen name="FollowersDetail" component={FollowersDetail} />
      <FollowersStack.Screen name="UserProfileGeneral" component={UserProfileGeneral} />
    </FollowersStack.Navigator>
  )
}

export default FollowersNavigator
