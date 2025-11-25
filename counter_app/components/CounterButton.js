// CounterButton.js – Reusable button component
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles';

/**
 * CounterButton Component
 * A button that can be used for increment/decrement
 * @param {string} label - Text to show on the button
 * @param {Function} onPress - Function to call when pressed
 */
export default function CounterButton({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
