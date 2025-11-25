// ResultsScreen.js – Shows final score
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

/**
 * ResultsScreen Component
 * Shows the final score and restart button
 * @param {number} score - Number of correct answers
 * @param {number} total - Total number of questions
 * @param {Function} onRestart - Function to restart the quiz
 */
export default function ResultsScreen({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  
  // Determine message based on score
  let message = '';
  if (percentage >= 80) {
    message = '🎉 Excellent! You did great!';
  } else if (percentage >= 60) {
    message = '👍 Good job! Keep practicing!';
  } else {
    message = '💪 Keep trying! You can do better!';
  }
  
  return (
    <View style={styles.resultsContainer}>
      <View style={styles.resultsCard}>
        <Text style={styles.resultsTitle}>Quiz Complete!</Text>
        <Text style={styles.scoreText}>
          {score}/{total}
        </Text>
        <Text style={styles.resultMessage}>{message}</Text>
        <Text style={styles.resultMessage}>
          You scored {percentage}%
        </Text>
        <TouchableOpacity style={styles.restartButton} onPress={onRestart}>
          <Text style={styles.restartButtonText}>Restart Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
