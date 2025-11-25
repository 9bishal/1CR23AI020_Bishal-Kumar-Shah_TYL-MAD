// ExpenseItem.js – Single expense display
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

/**
 * ExpenseItem Component
 * Shows a single expense with delete option
 * @param {Object} expense - Expense object
 * @param {Function} onDelete - Delete function
 */
export default function ExpenseItem({ expense, onDelete }) {
  return (
    <View style={styles.expenseItem}>
      <View style={styles.expenseLeft}>
        <Text style={styles.expenseCategory}>{expense.category}</Text>
        <Text style={styles.expenseDescription}>{expense.description}</Text>
        <Text style={styles.expenseDate}>{expense.date}</Text>
      </View>
      
      <View style={styles.expenseRight}>
        <Text style={styles.expenseAmount}>-${expense.amount}</Text>
        <TouchableOpacity 
          style={styles.deleteButton} 
          onPress={() => onDelete(expense.id)}
        >
          <Text style={styles.deleteText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
