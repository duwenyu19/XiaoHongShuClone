import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { usersDataFollowing } from '../../utilities/usersDataFollowing'
import { usersDataFollowers } from '../../utilities/usersDataFollowers'
import { RouteProp } from '@react-navigation/native'
import { MeStackParamList } from '../../utilities/types'
import { UserProfileGeneralNavigationProp } from '../../utilities/types'

type UserProfileGeneralProps = {
  navigation: UserProfileGeneralNavigationProp;
  route: RouteProp<MeStackParamList, 'UserProfileGeneral'>;
}


const UserProfileGeneral: React.FC<any> = ({ route }) => {
  const { userId, dataSource } = route.params

  let user;
  if (dataSource === 'followers') {
    user = usersDataFollowers[userId];
  } else {
    user = usersDataFollowing[userId];
  }

  //const user = usersDataFollowing[userId]

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>User not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={user.image} style={styles.userImage} />
      <Text>{user.name}</Text>
      <Text>{user.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      userImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
      },
})

export default UserProfileGeneral
