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
      <Button 
        title="Go to ViewedPosts" 
        onPress={() => navigation.navigate('ViewedPosts')}
      />
      <Button 
        title="Go to Following" 
        onPress={() => navigation.navigate('Following')}
      />
      <Button 
        title="Go to Followers" 
        onPress={() => navigation.navigate('Followers')}
      />
      <Button 
        title="Go to Likes" 
        onPress={() => navigation.navigate('Likes')}
      />
      <Button 
        title="Go to EditProfile" 
        onPress={() => navigation.navigate('EditProfile')}
      />
      <Button 
        title="Go to Setting" 
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  )
}

export default Me
