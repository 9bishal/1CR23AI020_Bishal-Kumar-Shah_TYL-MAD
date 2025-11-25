// CalcButton.js – Reusable calculator button component
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles';

/**
 * CalcButton Component
 * A button for the calculator
 * @param {string} label - Text to show on button
 * @param {Function} onPress - Function to call when pressed
 * @param {string} type - Button type: 'number', 'operator', 'special'
 * @param {boolean} isZero - Whether this is the zero button (wider)
 */
export default function CalcButton({ label, onPress, type = 'number', isZero = false }) {
  // Determine button style based on type
  const buttonStyle = [
    styles.button,
    type === 'operator' && styles.operatorButton,
    type === 'special' && styles.specialButton,
    isZero && styles.zeroButton,
  ];
  
  const textStyle = [
    styles.buttonText,
    type === 'special' && styles.specialButtonText,
  ];
  
  return (
    <TouchableOpacity style={buttonStyle} onPress={() => onPress(label)}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}
