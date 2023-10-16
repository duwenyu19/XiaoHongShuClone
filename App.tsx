import React from 'react'
//import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MeNavigator from './src/navigators/MeNavigator'
import { enableScreens } from 'react-native-screens'
enableScreens()

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MeNavigator />
    </NavigationContainer>
  )
}

//const styles = StyleSheet.create({})

export default App
