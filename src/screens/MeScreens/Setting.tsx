import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MeScreenNavigationProp } from '../../utilities/types';

type SettingProps = {
  navigation: MeScreenNavigationProp;
}

const Setting: React.FC<SettingProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Setting Page</Text>
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

export default Setting;
