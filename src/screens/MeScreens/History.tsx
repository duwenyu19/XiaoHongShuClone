import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { MeScreenNavigationProp } from '../../utilities/types';

type HistoryProps = {
  navigation: MeScreenNavigationProp;
}

const History: React.FC<HistoryProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>History Page</Text>
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

export default History;
