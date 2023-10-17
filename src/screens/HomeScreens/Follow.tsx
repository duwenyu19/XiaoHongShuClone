import React from 'react'
import { View, Text, Button } from 'react-native'
import { HomeScreenNavigationProp } from '../../utilities/types'

type FollowProps = {
  navigation: HomeScreenNavigationProp;
}

const Follow: React.FC<FollowProps> = ({navigation}) => {
  return (
    <View>
      <Text>Follow Page</Text>
    </View>
  )
}

export default Follow