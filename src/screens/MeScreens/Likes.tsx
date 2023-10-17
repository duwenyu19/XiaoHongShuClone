import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MeScreenNavigationProp } from '../../utilities/types'

type LikesProps = {
  navigation: MeScreenNavigationProp;
}

const Likes: React.FC<LikesProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Likes Page</Text>
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

export default Likes
