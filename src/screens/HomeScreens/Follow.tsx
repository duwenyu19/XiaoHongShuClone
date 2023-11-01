import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserPostThumbnail from '../../components/UserPostThumbnail';
import { usersDataPostFollowing } from '../../utilities/usersDataPostFollowing';
import { HomeScreenNavigationProp } from '../../utilities/types';

type FollowProps = {
  navigation: HomeScreenNavigationProp;
}

const Follow: React.FC<FollowProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <UserPostThumbnail data={usersDataPostFollowing} source={'following'} navigation={navigation}/>
    </View>
  );
};

export default Follow;
