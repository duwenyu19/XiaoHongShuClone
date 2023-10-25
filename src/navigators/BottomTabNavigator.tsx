import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeNavigator';
import MeStack from './MeNavigator';
import meIcon from '../assets/photos/user-icon.png';
import homeIcon from '../assets/photos/home-icon.png';


const BottomTab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveBackgroundColor: 'transparent',
        tabBarStyle:{
          backgroundColor: '#4A4A4A',
          paddingTop: 3,
          paddingBottom: 3,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
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
