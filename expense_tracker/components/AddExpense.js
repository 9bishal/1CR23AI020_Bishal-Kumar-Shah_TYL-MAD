// AddExpense.js – Form to add new expense
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

/**
 * AddExpense Component
 * Form for adding a new expense
 * @param {Object} formData - Current form values
 * @param {Function} onChangeText - Update form field
 * @param {Function} onAdd - Add expense function
 */
export default function AddExpense({ formData, onChangeText, onAdd }) {
  return (
    <View style={styles.addExpenseCard}>
      <Text style={styles.formTitle}>➕ Add New Expense</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Description (e.g., Lunch)"
        value={formData.description}
        onChangeText={(text) => onChangeText('description', text)}
      />
      
      <View style={styles.inputRow}>
        <View style={styles.inputHalf}>
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={formData.amount}
            onChangeText={(text) => onChangeText('amount', text)}
            keyboardType="numeric"
          />
        </View>
        
        <View style={styles.inputHalf}>
          <TextInput
            style={styles.input}
            placeholder="Category"
            value={formData.category}
            onChangeText={(text) => onChangeText('category', text)}
          />
        </View>
      </View>
      
      <TouchableOpacity style={styles.addButton} onPress={onAdd}>
        <Text style={styles.addButtonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
}
