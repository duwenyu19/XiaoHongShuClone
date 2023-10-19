import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HomeScreenNavigationProp } from '../utilities/types'
import HomeTopTabNavigator from '../navigators/HomeTopTabNavigator'

type HomeProps = {
  navigation: HomeScreenNavigationProp
}


const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <HomeTopTabNavigator />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  tabContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white'
  }
})

export default Home
