// CounterDisplay.js – Component to show the counter number
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

/**
 * CounterDisplay Component
 * Shows the current counter value in a styled box
 * @param {number} count - The current counter value
 */
export default function CounterDisplay({ count }) {
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>{count}</Text>
    </View>
  );
}
