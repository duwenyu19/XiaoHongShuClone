import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HomeScreenNavigationProp } from '../../utilities/types'

type NearbyProps = {
  navigation: HomeScreenNavigationProp;
}

const Nearby: React.FC<NearbyProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Nearby Page</Text>
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

export default Nearby