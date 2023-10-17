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
      <Button 
        title="Go to Explore" 
        onPress={() => navigation.navigate('Explore')}
      />
      <Button 
        title="Go to Nearby" 
        onPress={() => navigation.navigate('Nearby')}
      />
    </View>
  )
}

export default Home
