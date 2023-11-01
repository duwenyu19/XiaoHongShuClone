import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserPostThumbnail from '../../components/UserPostThumbnail';
import { MeScreenNavigationProp } from '../../utilities/types';
import { usersDataPostMe } from '../../utilities/usersDataPostMe';

type PostProps = {
  navigation: MeScreenNavigationProp;
}

const Post: React.FC<PostProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <UserPostThumbnail data={usersDataPostMe} source={'me'} navigation={navigation}/>
    </View>
  );
};

export default Post;
