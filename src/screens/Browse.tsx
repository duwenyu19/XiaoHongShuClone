import React from 'react'
import { View, Text, Button } from 'react-native'
import { MeScreenNavigationProp } from '../utilities/types'

type BrowseProps = {
  navigation: MeScreenNavigationProp;
}

const Browse: React.FC<BrowseProps> = ({navigation}) => {
  return (
    <View>
      <Text>Browse Page</Text>
      <Button 
        title="Back to Me" 
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Browse