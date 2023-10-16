import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Me from '../screens/Me'

const MeStack = createStackNavigator()

const MeNavigator: React.FC = () => {
  return (
    <MeStack.Navigator>
      <MeStack.Screen name="MePage" component={Me} />
    </MeStack.Navigator>
  )
}

export default MeNavigator
