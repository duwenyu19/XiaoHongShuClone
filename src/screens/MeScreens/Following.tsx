import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { MeScreenNavigationProp } from '../../utilities/types'

type FollowingProps = {
  navigation: MeScreenNavigationProp;
}

const Following: React.FC<FollowingProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Following Page</Text>
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

export default Following
