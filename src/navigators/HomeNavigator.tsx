import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserPostGeneral from '../screens/UserInfo/UserPostGeneral';
import { HomeStackParamList } from '../utilities/types';
import HomeTobTabNavigator from './HomeTopTabNavigator';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomePage" component={HomeTobTabNavigator} options={{headerShown: false,}} />
      <HomeStack.Screen name="UserPostGeneral" component={UserPostGeneral} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
