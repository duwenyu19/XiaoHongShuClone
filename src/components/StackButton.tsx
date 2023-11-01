import React, { useContext } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import UserContext from '../utilities/UserContext';

interface StackButtonProps {
    number: string;
    label: string;
    onPress: () => void;
  };

const StackButton: React.FC<StackButtonProps> = ({ number, label, onPress }) => {
  const { dimensions } = useContext(UserContext);
  const styles = getStyles(dimensions);

  return (
    <TouchableOpacity style={styles.statButton} onPress={onPress}>
      <Text style={styles.statText}>{number}</Text>
      <Text style={styles.statText}>{label}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (dimensions: { width: number; height: number }) => {
  return StyleSheet.create({
    statButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: dimensions.height * 0.0045,
        marginHorizontal: dimensions.width * -0.0133,
    },
        statText: {
          fontSize: dimensions.width * 0.0293,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
  });
};

export default StackButton;
