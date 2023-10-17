import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MeScreenNavigationProp } from '../../utilities/types'

type FollowersProps = {
  navigation: MeScreenNavigationProp;
}

const Followers: React.FC<FollowersProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Followers Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Followers
