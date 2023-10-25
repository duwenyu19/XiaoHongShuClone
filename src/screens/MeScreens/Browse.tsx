import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MeScreenNavigationProp } from '../../utilities/types';

type BrowseProps = {
  navigation: MeScreenNavigationProp;
}

const Browse: React.FC<BrowseProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Browse Page</Text>
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

export default Browse;
