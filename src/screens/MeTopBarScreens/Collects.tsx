import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Collects = () => {
  return (
    <View style={styles.container}>
      <Text>Collects Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Collects;
