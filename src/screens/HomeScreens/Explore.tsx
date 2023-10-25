import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserPostThumbnail from '../../components/UserPostThumbnail';
import { usersDataPostExplore } from '../../utilities/usersDataPostExplore';
import { HomeScreenNavigationProp } from '../../utilities/types';

type ExploreProps = {
  navigation: HomeScreenNavigationProp;
}

const Explore: React.FC<ExploreProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <UserPostThumbnail data={usersDataPostExplore} source={'explore'} navigation={navigation} />
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
    },
});

export default Explore;
