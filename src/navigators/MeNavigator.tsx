import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Me from '../screens/Me';
import UserCart from '../screens/MeScreens/UserCart';
import Browse from '../screens/MeScreens/Browse';
import History from '../screens/MeScreens/History';
import LikesAndCol from '../screens/MeScreens/LikesAndCol';
import EditProfile from '../screens/MeScreens/EditProfile';
import Setting from '../screens/MeScreens/Setting';
import FollwoingNavigator from './FollowingNavigator';
import FollowersNavigator from './FollowersNavigator';
import UserPostGeneral from '../components/UserPostGeneral';
import { MeStackParamList } from '../utilities/types';

const MeStack = createStackNavigator<MeStackParamList>();

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
      <MeStack.Screen name="FollowingNavigator" component={FollwoingNavigator} options={{headerShown: false}}/>
      <MeStack.Screen name="FollowersNavigator" component={FollowersNavigator} options={{headerShown: false}}/>
      <MeStack.Screen name="LikesAndCol" component={LikesAndCol} />
      <MeStack.Screen name="EditProfile" component={EditProfile} />
      <MeStack.Screen name="Settings" component={Setting} />
      <MeStack.Screen name="UserPostGeneral" component={UserPostGeneral} />
    </MeStack.Navigator>
  );
};

export default MeNavigator;
