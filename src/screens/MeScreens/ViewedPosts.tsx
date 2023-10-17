import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { MeScreenNavigationProp } from '../../utilities/types'

type ViewedPostsProps = {
  navigation: MeScreenNavigationProp;
}

const ViewedPosts: React.FC<ViewedPostsProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ViewedPosts Page</Text>
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

export default ViewedPosts