import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface StackButtonProps {
    number: string;
    label: string;
    onPress: () => void;
  };

const StackButton: React.FC<StackButtonProps> = ({ number, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.statButton} onPress={onPress}>
      <Text style={styles.statText}>{number}</Text>
      <Text style={styles.statText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    statButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 3,
        marginHorizontal: -5,
    },
        statText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default StackButton;
