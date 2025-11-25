// ResetButton.js – Button to reset counter to zero
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles';

/**
 * ResetButton Component
 * Red button to reset the counter
 * @param {Function} onPress - Function to call when pressed
 */
export default function ResetButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.resetButton} onPress={onPress}>
      <Text style={styles.resetButtonText}>Reset</Text>
    </TouchableOpacity>
  );
}
