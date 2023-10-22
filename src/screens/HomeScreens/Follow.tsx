import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import UserPostThumbnail from '../../components/UserPostThumbnail'
import { usersDataPostFollowing } from '../../utilities/usersDataPostFollowing'
import { HomeScreenNavigationProp } from '../../utilities/types'
import { usersDataFollowing } from '../../utilities/usersDataFollowing'

type FollowProps = {
  navigation: HomeScreenNavigationProp;
}

const Follow: React.FC<FollowProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <UserPostThumbnail data={usersDataPostFollowing} usersData={usersDataFollowing} />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 20,
      textAlign: 'center'
    }
})

export default Follow
