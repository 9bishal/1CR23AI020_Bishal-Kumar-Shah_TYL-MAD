// TaskInput.js – Component for adding new tasks
// Contains the text input and add button
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from '../styles';

/**
 * TaskInput Component
 * @param {string} value - Current input text
 * @param {Function} onChangeText - Function to update input text
 * @param {Function} onSubmit - Function to add the task
 */
export default function TaskInput({ value, onChangeText, onSubmit }) {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.inputContainer}
    >
      <TextInput
        style={styles.input}
        placeholder="Enter a new task..."
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="done"
      />
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={onSubmit}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
