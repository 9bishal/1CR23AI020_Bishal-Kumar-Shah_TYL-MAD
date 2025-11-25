// QuestionCard.js – Displays a single question
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

/**
 * QuestionCard Component
 * Shows the question text
 * @param {string} question - The question text
 */
export default function QuestionCard({ question }) {
  return (
    <View style={styles.questionCard}>
      <Text style={styles.questionText}>{question}</Text>
    </View>
  );
}
