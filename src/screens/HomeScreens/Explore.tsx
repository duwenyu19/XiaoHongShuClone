import React from 'react'
import { View, Text, Button } from 'react-native'
import { HomeScreenNavigationProp } from '../../utilities/types'

type ExploreProps = {
  navigation: HomeScreenNavigationProp;
}

const Explore: React.FC<ExploreProps> = ({navigation}) => {
  return (
    <View>
      <Text>Explore Page</Text>
      <Button 
        title="Back to Home" 
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Explore