import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { HomeScreenNavigationProp } from '../utilities/types';
import TopTabNavigator from '../navigators/TopTabNavigator'

type HomeProps = {
  navigation: HomeScreenNavigationProp;
}


const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TopTabNavigator />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    height: 300,
  }
});

export default Home
