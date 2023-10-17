import React from 'react'
import { View, Text, Button } from 'react-native'
import { HomeScreenNavigationProp } from '../../utilities/types'

type NearbyProps = {
  navigation: HomeScreenNavigationProp;
}

const Nearby: React.FC<NearbyProps> = ({navigation}) => {
  return (
    <View>
      <Text>Nearby Page</Text>
      {/* <Button 
        title="Back to Home" 
        onPress={() => navigation.goBack()}
      /> */}
    </View>
  )
}

export default Nearby