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
    <View style={styles.container}>
      <UserPostThumbnail data={usersDataPostMe} source={'me'} navigation={navigation}/>
    </View>
  );
};

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
});

export default Post;
