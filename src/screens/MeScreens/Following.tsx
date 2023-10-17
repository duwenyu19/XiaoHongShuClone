import React from 'react'
import { View, Text, Button } from 'react-native'
import { MeScreenNavigationProp } from '../../utilities/types'

type FollowingProps = {
  navigation: MeScreenNavigationProp;
}

const Following: React.FC<FollowingProps> = ({navigation}) => {
  return (
    <View>
      <Text>Following Page</Text>
      <Button 
        title="Back to Me" 
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Following
