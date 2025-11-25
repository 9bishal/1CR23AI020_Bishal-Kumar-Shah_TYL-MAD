// Summary.js – Shows total expenses
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

/**
 * Summary Component
 * Displays total expenses amount
 * @param {number} total - Total amount of all expenses
 */
export default function Summary({ total }) {
  return (
    <View style={styles.summaryCard}>
      <Text style={styles.summaryTitle}>Total Expenses</Text>
      <Text style={styles.summaryAmount}>${total.toFixed(2)}</Text>
    </View>
  );
}
