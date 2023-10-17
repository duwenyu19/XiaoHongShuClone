import React from 'react'
import { View, Text, Button } from 'react-native'
import { MeScreenNavigationProp } from '../utilities/types'

type EditProfileProps = {
  navigation: MeScreenNavigationProp;
}

const EditProfile: React.FC<EditProfileProps> = ({navigation}) => {
  return (
    <View>
      <Text>EditProile Page</Text>
      <Button 
        title="Back to Me" 
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default EditProfile
