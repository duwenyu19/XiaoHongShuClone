import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { HomeScreenNavigationProp } from '../../utilities/types'

type FollowProps = {
  navigation: HomeScreenNavigationProp;
}

const Follow: React.FC<FollowProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Follow Page</Text>
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

export default Follow