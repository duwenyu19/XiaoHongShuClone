import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { HomeStackParamList } from '../../utilities/types'
import { UserPost, usersDataPostExplore } from '../../utilities/usersDataPostExplore'
import { usersDataPostFollowing } from '../../utilities/usersDataPostFollowing'

type UserPostGeneralProps = {
    route: RouteProp<HomeStackParamList, 'UserPostGeneral'>
  };
  
  const UserPostGeneral: React.FC<UserPostGeneralProps> = ({ route }) => {
    const post: UserPost = route.params.post
    const dataSource = route.params.source === 'explore' ? usersDataPostExplore : usersDataPostFollowing
    const userData = dataSource[post.id]
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={userData.userAvatar} style={styles.avatar} />
          <Text style={styles.userName}>{userData.name}</Text>
        </View>
        <Image source={post.image} style={styles.postImage} />
        <Text style={styles.caption}>{post.caption}</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    postImage: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
      marginVertical: 10,
    },
    caption: {
      fontSize: 16,
      margin: 10,
    },
  })
  
  export default UserPostGeneral
