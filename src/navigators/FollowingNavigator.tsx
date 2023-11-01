import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FollowingDetail from '../screens/MeScreens/Following';
import UserProfileGeneral from '../components/UserProfileGeneral';
import { FollowingStackParamList } from '../utilities/types';

const FollowingStack = createStackNavigator<FollowingStackParamList>();

const FollowingNavigator: React.FC = () => {
  return (
    <FollowingStack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}
    >
      <FollowingStack.Screen name="FollowingDetail" component={FollowingDetail} />
      <FollowingStack.Screen name="UserProfileGeneral" component={UserProfileGeneral} />
    </FollowingStack.Navigator>
  );
};

export default FollowingNavigator;
