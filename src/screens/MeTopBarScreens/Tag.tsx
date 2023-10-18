import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tag = () => {
  return (
    <View style={styles.container}>
      <Text>Tag Page</Text>
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

export default Tag;
