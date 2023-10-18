import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HomeScreenNavigationProp } from '../../utilities/types'

type ExploreProps = {
  navigation: HomeScreenNavigationProp;
}

const Explore: React.FC<ExploreProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Explore Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    }
})

export default Explore