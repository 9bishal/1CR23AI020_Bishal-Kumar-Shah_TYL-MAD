// App.js – Main entry point for Expense Tracker App
// This is the main file with all the expense tracking logic
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, ScrollView } from 'react-native';
import Summary from './components/Summary';
import AddExpense from './components/AddExpense';
import ExpenseItem from './components/ExpenseItem';
import { styles } from './styles';

export default function App() {
  // State: List of expenses
  const [expenses, setExpenses] = useState([]);
  // State: Form data for new expense
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
  });

  /**
   * Update form field
   */
  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  /**
   * Add new expense
   */
  const addExpense = () => {
    // Validate inputs
    if (!formData.description || !formData.amount || !formData.category) {
      return;
    }

    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      return;
    }

    // Create new expense
    const newExpense = {
      id: Date.now().toString(),
      description: formData.description,
      amount: amount.toFixed(2),
      category: formData.category,
      date: new Date().toLocaleDateString(),
    };

    // Add to list
    setExpenses([newExpense, ...expenses]);

    // Clear form
    setFormData({
      description: '',
      amount: '',
      category: '',
    });
  };

  /**
   * Delete expense
   */
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  /**
   * Calculate total expenses
   */
  const calculateTotal = () => {
    return expenses.reduce((total, expense) => {
      return total + parseFloat(expense.amount);
    }, 0);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>💰 Expense Tracker</Text>
        </View>

        <ScrollView>
          {/* Summary */}
          <Summary total={calculateTotal()} />

          {/* Add Expense Form */}
          <AddExpense 
            formData={formData}
            onChangeText={handleFormChange}
            onAdd={addExpense}
          />

          {/* Expense List */}
          {expenses.length > 0 && (
            <Text style={styles.expenseListTitle}>Recent Expenses</Text>
          )}
          
          {expenses.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                No expenses yet!{'\n'}Add your first expense above.
              </Text>
            </View>
          ) : (
            <FlatList
              data={expenses}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <ExpenseItem 
                  expense={item} 
                  onDelete={deleteExpense}
                />
              )}
              scrollEnabled={false}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
