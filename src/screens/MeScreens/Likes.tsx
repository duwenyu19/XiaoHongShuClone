import React from 'react'
import { View, Text, Button } from 'react-native'
import { MeScreenNavigationProp } from '../../utilities/types'

type LikesProps = {
  navigation: MeScreenNavigationProp;
}

const Likes: React.FC<LikesProps> = ({navigation}) => {
  return (
    <View>
      <Text>Likes Page</Text>
      <Button 
        title="Back to Me" 
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Likes
