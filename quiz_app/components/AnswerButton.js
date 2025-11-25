// AnswerButton.js – Button for each answer option
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles';

/**
 * AnswerButton Component
 * A button for selecting an answer
 * @param {string} text - Answer text
 * @param {Function} onPress - Function to call when pressed
 * @param {boolean} isSelected - Whether this answer is selected
 * @param {boolean} showResult - Whether to show correct/wrong styling
 * @param {boolean} isCorrect - Whether this is the correct answer
 */
export default function AnswerButton({ text, onPress, isSelected, showResult, isCorrect }) {
  // Determine button style
  const buttonStyle = [
    styles.answerButton,
    isSelected && !showResult && styles.answerButtonSelected,
    showResult && isCorrect && styles.answerButtonCorrect,
    showResult && isSelected && !isCorrect && styles.answerButtonWrong,
  ];
  
  return (
    <TouchableOpacity 
      style={buttonStyle} 
      onPress={onPress}
      disabled={showResult}
    >
      <Text style={styles.answerText}>{text}</Text>
    </TouchableOpacity>
  );
}
