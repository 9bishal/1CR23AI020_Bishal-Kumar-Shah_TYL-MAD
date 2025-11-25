// App.js – Main entry point for Counter App
// This is the main file that brings everything together
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import CounterDisplay from './components/CounterDisplay';
import CounterButton from './components/CounterButton';
import ResetButton from './components/ResetButton';
import { styles } from './styles';

export default function App() {
  // State: Current counter value
  const [count, setCount] = useState(0);

  /**
   * Function to increase counter by 1
   */
  const increment = () => {
    setCount(count + 1);
  };

  /**
   * Function to decrease counter by 1
   */
  const decrement = () => {
    setCount(count - 1);
  };

  /**
   * Function to reset counter to 0
   */
  const reset = () => {
    setCount(0);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        
        {/* App Title */}
        <Text style={styles.title}>🔢 Counter App</Text>

        {/* Display current count */}
        <CounterDisplay count={count} />

        {/* Increment and Decrement buttons */}
        <View style={styles.buttonContainer}>
          <CounterButton label="-" onPress={decrement} />
          <CounterButton label="+" onPress={increment} />
        </View>

        {/* Reset button */}
        <ResetButton onPress={reset} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
