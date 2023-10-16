import React from 'react'
import { View, Text, Button } from 'react-native'
import { MeScreenNavigationProp } from '../utilities/types'

type UserCartProps = {
  navigation: MeScreenNavigationProp;
}

const UserCart: React.FC<UserCartProps> = ({navigation}) => {
  return (
    <View>
      <Text>UserCart Page</Text>
      <Button 
        title="Back to Me" 
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default UserCart