// SearchBar.js – Search input component
import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../styles';

/**
 * SearchBar Component
 * Input field for searching recipes
 * @param {string} value - Current search text
 * @param {Function} onChangeText - Function to update search text
 */
export default function SearchBar({ value, onChangeText }) {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder="Search recipes..."
      value={value}
      onChangeText={onChangeText}
    />
  );
}
