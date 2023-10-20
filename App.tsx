import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigators/BottomTabNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import UserContext from './src/utilities/UserContext'
import { usersDataFollowers } from './src/utilities/usersDataFollowers'
import { usersDataFollowing } from './src/utilities/usersDataFollowing'

const App: React.FC = () => {
  const [userCount, setUserCount] = useState(0)
  const [followersCount, setFollowersCount] = useState(0)

  useEffect(() => {
    setUserCount(Object.keys(usersDataFollowing).length)
    setFollowersCount(Object.keys(usersDataFollowers).length)
  }, [])

  return (
    <UserContext.Provider value={{ userCount, setUserCount, followersCount, setFollowersCount }}>
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
