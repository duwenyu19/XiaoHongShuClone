import React from 'react'
import { View, Text, Button } from 'react-native'
import { MeScreenNavigationProp } from '../utilities/types'

type FollowersProps = {
  navigation: MeScreenNavigationProp;
}

const Followers: React.FC<FollowersProps> = ({navigation}) => {
  return (
    <View>
      <Text>Followers Page</Text>
      <Button 
        title="Back to Me" 
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Followers