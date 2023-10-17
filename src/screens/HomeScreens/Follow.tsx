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
      <Button 
        title="Back to Home" 
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Follow