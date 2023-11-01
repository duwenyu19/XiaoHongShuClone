import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList, UserPost } from '../utilities/types';
import { usersDataPostExplore } from '../utilities/usersDataPostExplore';
import { usersDataPostFollowing } from '../utilities/usersDataPostFollowing';
import { usersDataPostMe } from '../utilities/usersDataPostMe';
import UserContext from '../utilities/UserContext';

type UserPostGeneralProps = {
    route: RouteProp<HomeStackParamList, 'UserPostGeneral'>;
  };
  
const UserPostGeneral: React.FC<UserPostGeneralProps> = ({ route }) => {
  const { dimensions } = useContext(UserContext);
  const styles = getStyles(dimensions);
  const post: UserPost = route.params.post
  
  let dataSource;
  switch (route.params.source) {
      case 'explore':
          dataSource = usersDataPostExplore;
          break;
      case 'following':
          dataSource = usersDataPostFollowing;
          break;
      case 'me':
          dataSource = usersDataPostMe;
          break;
  }

  const userData = dataSource[post.id];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={userData.userAvatar} style={styles.avatar} />
        <Text style={styles.userName}>{userData.name}</Text>
      </View>
      <Image source={post.image} style={styles.postImage} />
      <Text style={styles.caption}>{post.caption}</Text>
    </View>
  );
};

const getStyles = (dimensions: { width: number; height: number }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: dimensions.width * 0.02666,
    },
    avatar: {
      width: dimensions.width * 0.1333,
      height: dimensions.width * 0.1333,
      borderRadius: dimensions.width * 0.07,
      marginRight: dimensions.width * 0.02666,
    },
    userName: {
      fontSize: dimensions.width * 0.048,
      fontWeight: 'bold',
    },
    postImage: {
      width: '100%',
      height: dimensions.width * 0.8,
      resizeMode: 'cover',
      marginVertical: dimensions.width * 0.02666,
    },
    caption: {
      fontSize: dimensions.width * 0.04266,
      margin: dimensions.width * 0.02666,
    },
  });
};

export default UserPostGeneral;
