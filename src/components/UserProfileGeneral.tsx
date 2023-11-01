import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { FollowersScreenNavigationProp, FollowersStackParamList, FollowingScreenNavigationProp, FollowingStackParamList } from '../utilities/types';
import UserContext from '../utilities/UserContext';

type UserProfileGeneralProps = {
  navigation: FollowingScreenNavigationProp | FollowersScreenNavigationProp;
  route: RouteProp<FollowingStackParamList, 'UserProfileGeneral'> | RouteProp<FollowersStackParamList, 'UserProfileGeneral'>;
};

const UserProfileGeneral: React.FC<UserProfileGeneralProps> = ({ route }) => {
  const { dimensions } = useContext(UserContext);
  const styles = getStyles(dimensions);
  const { user } = route.params;

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>User not found!</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={user.image} style={styles.userImage} />
      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.bio}>{user.description}</Text>
    </View>
  );
};

const getStyles = (dimensions: {width: number; height: number}) => {
  return StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      userName: {
        fontSize: dimensions.width * 0.048,
        fontWeight: 'bold',
        padding: dimensions.width * 0.05,
      },
      bio: {
        fontSize: dimensions.width * 0.045,
      },
      userImage: {
        width: dimensions.width * 0.2666,
        height: dimensions.width * 0.2666,
        borderRadius: dimensions.width * 0.1333,
        marginBottom: dimensions.width * 0.01333,
      },
  });
};


export default UserProfileGeneral;
