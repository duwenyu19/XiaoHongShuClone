import React from 'react'
import { View, Text, Button } from 'react-native'
import { MeScreenNavigationProp } from '../utilities/types';

type MeProps = {
  navigation: MeScreenNavigationProp;
}

const Me: React.FC<MeProps> = ({navigation}) => {
  return (
    <View>
      <Text>Me Page</Text>
      <Button 
        title="Go to UserCart" 
        onPress={() => navigation.navigate('UserCart')}
      />
      <Button 
        title="Go to Browse" 
        onPress={() => navigation.navigate('Browse')}
      />
    </View>
  )
}

export default Me
