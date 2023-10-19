import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigators/BottomTabNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import UserContext from './src/utilities/UserContext'

const App: React.FC = () => {
  const [userCount, setUserCount] = useState(0);
  
  return (
    <UserContext.Provider value={{ userCount, setUserCount }}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </UserContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
