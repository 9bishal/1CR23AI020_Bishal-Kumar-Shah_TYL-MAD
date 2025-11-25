// Display.js – Component to show calculator display
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

/**
 * Display Component
 * Shows the current value or result
 * @param {string} value - The value to display
 */
export default function Display({ value }) {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayText}>{value}</Text>
    </View>
  );
}
