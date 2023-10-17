import React from 'react'
import { View, Text, Button } from 'react-native'
import { MeScreenNavigationProp } from '../../utilities/types'

type ViewedPostsProps = {
  navigation: MeScreenNavigationProp;
}

const ViewedPosts: React.FC<ViewedPostsProps> = ({navigation}) => {
  return (
    <View>
      <Text>ViewedPosts Page</Text>
      <Button 
        title="Back to Me" 
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default ViewedPosts