import React from 'react'
import { View, Text, Button } from 'react-native'
import { MeScreenNavigationProp } from '../../utilities/types'

type SettingProps = {
  navigation: MeScreenNavigationProp;
}

const Setting: React.FC<SettingProps> = ({navigation}) => {
  return (
    <View>
      <Text>Setting Page</Text>
      <Button 
        title="Back to Me" 
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Setting