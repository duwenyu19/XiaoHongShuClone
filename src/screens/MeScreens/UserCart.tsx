import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MeScreenNavigationProp } from '../../utilities/types';

type UserCartProps = {
  navigation: MeScreenNavigationProp;
}

const UserCart: React.FC<UserCartProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>UserCart Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default UserCart;
