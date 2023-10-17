import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MeScreenNavigationProp } from '../../utilities/types'

type EditProfileProps = {
  navigation: MeScreenNavigationProp;
}

const EditProfile: React.FC<EditProfileProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>EditProile Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default EditProfile
