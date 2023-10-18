import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MeScreenNavigationProp } from '../../utilities/types'

type LikesAndColProps = {
  navigation: MeScreenNavigationProp;
}

const LikesAndCol: React.FC<LikesAndColProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Likes & Col Page</Text>
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

export default LikesAndCol
