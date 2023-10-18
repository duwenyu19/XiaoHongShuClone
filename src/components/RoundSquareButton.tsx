import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface RoundSqaureButtonProps {
    label: string;
    onPress: () => void;
  }

const RoundSqaureButton: React.FC<RoundSqaureButtonProps> = ({label, onPress }) => {
  return (
    <TouchableOpacity style={styles.rectButton} onPress={onPress}>
        <Text style={styles.text} >{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    rectButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 0,
    },
    text: {
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})

export default RoundSqaureButton
