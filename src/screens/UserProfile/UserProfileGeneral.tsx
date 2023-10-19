import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { usersData } from '../../utilities/userData';

type UserProfileGeneralProps = {
  route: {
    params: {
      userId: string;
    };
  };
};

  

const UserProfileGeneral: React.FC<UserProfileGeneralProps> = ({ route }) => {
  const { userId } = route.params;

  const user = usersData[userId];

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