import React from 'react'
import { View, Text, Button } from 'react-native'
import { HomeScreenNavigationProp } from '../utilities/types';

type HomeProps = {
  navigation: HomeScreenNavigationProp;
}


const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button 
        title="Go to Follow" 
        onPress={() => navigation.navigate('Follow')}
      />
    </View>
  )
}

export default Home
