// TaskList.js – Component to display the list of tasks
// Shows all tasks or an empty state message
import React from 'react';
import { FlatList, View, Text } from 'react-native';
import TaskItem from './TaskItem';
import { styles } from '../styles';

/**
 * TaskList Component
 * @param {Array} tasks - Array of task objects
 * @param {Function} onToggle - Function to toggle task completion
 * @param {Function} onDelete - Function to delete a task
 */
export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TaskItem 
          task={item} 
          onToggle={onToggle}
          onDelete={onDelete} 
        />
      )}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No tasks yet!</Text>
          <Text style={styles.emptySubtext}>Add a task to get started</Text>
        </View>
      }
      contentContainerStyle={tasks.length === 0 ? styles.emptyList : null}
    />
  );
}
