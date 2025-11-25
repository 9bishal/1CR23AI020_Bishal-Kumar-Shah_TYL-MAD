// TaskItem.js – Component to display a single task
// Shows task text, checkbox to mark complete, and delete button
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

/**
 * TaskItem Component
 * @param {Object} task - Task object with id, text, and completed properties
 * @param {Function} onToggle - Function to mark task as done/undone
 * @param {Function} onDelete - Function to delete the task
 */
export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={[
      styles.taskContainer,
      task.completed && styles.taskContainerCompleted
    ]}>
      {/* Checkbox to mark task as done */}
      <TouchableOpacity 
        onPress={() => onToggle(task.id)}
        style={[
          styles.checkbox,
          task.completed && styles.checkboxCompleted
        ]}
      >
        {task.completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>

      {/* Task text */}
      <Text style={[
        styles.taskText,
        task.completed && styles.taskTextCompleted
      ]}>
        {task.text}
      </Text>

      {/* Delete button */}
      <TouchableOpacity 
        onPress={() => onDelete(task.id)} 
        style={styles.deleteButton}
      >
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}
