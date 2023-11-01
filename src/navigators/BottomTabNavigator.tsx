import React, { useContext } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeNavigator';
import MeStack from './MeNavigator';
import meIcon from '../assets/photos/user-icon.png';
import homeIcon from '../assets/photos/home-icon.png';
import UserContext from '../utilities/UserContext';


const BottomTab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const { dimensions } = useContext(UserContext);

  return (
    <BottomTab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveBackgroundColor: 'transparent',
        tabBarStyle:{
          backgroundColor: '#4A4A4A',
          paddingTop: dimensions.width * 0.02,
          paddingBottom: dimensions.width * 0.035,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: dimensions.width * 0.038,
        }
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image source={homeIcon} style={{ width: size, height: size, tintColor: color }} />
          ),
        }}
      />
      <BottomTab.Screen 
        name="Me"
        component={MeStack}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({ color, size }) => (
            <Image source={meIcon} style={{ width: size, height: size, tintColor: color }} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
