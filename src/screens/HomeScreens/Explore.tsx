import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import UserPostThumbnail from '../../components/UserPostThumbnail';
import { usersDataPostExplore } from '../../utilities/usersDataPostExplore';
import { HomeScreenNavigationProp } from '../../utilities/types';

type ExploreProps = {
  navigation: HomeScreenNavigationProp;
}

const Explore: React.FC<ExploreProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <UserPostThumbnail data={usersDataPostExplore} source={'explore'} navigation={navigation} />
    </View>
  );
};

export default Explore;
