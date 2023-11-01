import React, { useContext } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import UserContext from '../utilities/UserContext';

interface RoundSqaureButtonProps {
    label: string
    onPress: () => void
  };

const RoundSqaureButton: React.FC<RoundSqaureButtonProps> = ({label, onPress }) => {
  const { dimensions } = useContext(UserContext);
  const styles = getStyles(dimensions);

  return (
    <TouchableOpacity style={styles.rectButton} onPress={onPress}>
        <Text style={styles.text} >{label}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (dimensions: { width: number; height: number }) => {
  return StyleSheet.create({
    rectButton: {
        padding: dimensions.width * 0.0133,
        borderWidth: dimensions.width * 0.00267,
        borderColor: '#ccc',
        borderRadius: dimensions.width * 0.0213,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: dimensions.width * 0.0133,
        marginVertical: dimensions.height * 0.0075,
    },
    text: {
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
  });
};

export default RoundSqaureButton;
