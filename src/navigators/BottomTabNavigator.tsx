import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeNavigator'
import MeStack from './MeNavigator'
import Ionicons from 'react-native-vector-icons/Ionicons';


const BottomTab = createBottomTabNavigator()

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
        }
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen 
        name="Me"
        component={MeStack}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
