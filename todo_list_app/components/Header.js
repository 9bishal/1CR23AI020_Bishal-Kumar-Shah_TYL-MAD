// Header.js – Component for the app header
// Shows the app title and task count
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

/**
 * Header Component
 * @param {number} taskCount - Number of tasks
 */
export default function Header({ taskCount }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>📝 My To-Do List</Text>
      <Text style={styles.subtitle}>
        {taskCount} task{taskCount !== 1 ? 's' : ''}
      </Text>
    </View>
  );
}
