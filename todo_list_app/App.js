// App.js – Main entry point for To-Do List mobile app
// This is the main file that brings everything together
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { styles } from './styles';

export default function App() {
  // State: List of all tasks
  const [tasks, setTasks] = useState([]);
  
  // State: Current text in the input field
  const [inputText, setInputText] = useState('');

  /**
   * Function to add a new task
   */
  const addTask = () => {
    // Don't add empty tasks
    if (inputText.trim().length === 0) return;
    
    // Create new task object
    const newTask = {
      id: Date.now().toString(),  // Unique ID using timestamp
      text: inputText.trim(),      // Task text
      completed: false             // Not completed by default
    };
    
    // Add to task list
    setTasks(prevTasks => [...prevTasks, newTask]);
    
    // Clear input field
    setInputText('');
  };

  /**
   * Function to toggle task completion (mark as done/undone)
   * @param {string} taskId - ID of the task to toggle
   */
  const toggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }  // Toggle completed status
          : task
      )
    );
  };

  /**
   * Function to delete a task
   * @param {string} taskId - ID of the task to delete
   */
  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        
        {/* Header with title and task count */}
        <Header taskCount={tasks.length} />

        {/* Input section to add new tasks */}
        <TaskInput 
          value={inputText}
          onChangeText={setInputText}
          onSubmit={addTask}
        />

        {/* List of all tasks */}
        <TaskList 
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
