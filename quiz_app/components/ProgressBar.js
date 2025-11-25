// ProgressBar.js – Shows quiz progress
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

/**
 * ProgressBar Component
 * Shows current question number and progress bar
 * @param {number} current - Current question number
 * @param {number} total - Total number of questions
 */
export default function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;
  
  return (
    <View style={styles.progressContainer}>
      <Text style={styles.progressText}>
        Question {current} of {total}
      </Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>
    </View>
  );
}
