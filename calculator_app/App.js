// App.js – Main entry point for Calculator App
// This is the main file with all the calculator logic
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Display from './components/Display';
import CalcButton from './components/CalcButton';
import { styles } from './styles';

export default function App() {
  // State: Current display value (shows full expression)
  const [display, setDisplay] = useState('0');
  // State: Current input number
  const [currentInput, setCurrentInput] = useState('0');
  // State: Previous value (for operations)
  const [previousValue, setPreviousValue] = useState(null);
  // State: Current operation (+, -, ×, ÷)
  const [operation, setOperation] = useState(null);
  // State: Whether we just pressed an operator
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  /**
   * Handle number button press
   */
  const handleNumber = (num) => {
    if (waitingForOperand) {
      setCurrentInput(String(num));
      setDisplay(previousValue + ' ' + operation + ' ' + num);
      setWaitingForOperand(false);
    } else {
      const newInput = currentInput === '0' ? String(num) : currentInput + num;
      setCurrentInput(newInput);
      
      if (operation && previousValue !== null) {
        setDisplay(previousValue + ' ' + operation + ' ' + newInput);
      } else {
        setDisplay(newInput);
      }
    }
  };

  /**
   * Handle operator button press (+, -, ×, ÷)
   */
  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(currentInput);

    if (previousValue === null) {
      setPreviousValue(inputValue);
      setDisplay(inputValue + ' ' + nextOperator);
    } else if (operation && !waitingForOperand) {
      const result = performCalculation();
      setDisplay(result + ' ' + nextOperator);
      setPreviousValue(result);
      setCurrentInput(String(result));
    } else {
      setDisplay(previousValue + ' ' + nextOperator);
    }

    setWaitingForOperand(true);
    setOperation(nextOperator);
  };

  /**
   * Perform the calculation based on current operation
   */
  const performCalculation = () => {
    const prev = previousValue;
    const current = parseFloat(currentInput);

    switch (operation) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '×':
        return prev * current;
      case '÷':
        return prev / current;
      default:
        return current;
    }
  };

  /**
   * Handle equals button press
   */
  const handleEquals = () => {
    if (operation && previousValue !== null && !waitingForOperand) {
      const result = performCalculation();
      setDisplay(previousValue + ' ' + operation + ' ' + currentInput + ' = ' + result);
      setCurrentInput(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  /**
   * Handle clear button press
   */
  const handleClear = () => {
    setDisplay('0');
    setCurrentInput('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  /**
   * Handle decimal point
   */
  const handleDecimal = () => {
    if (waitingForOperand) {
      setCurrentInput('0.');
      setDisplay(previousValue + ' ' + operation + ' 0.');
      setWaitingForOperand(false);
    } else if (currentInput.indexOf('.') === -1) {
      const newInput = currentInput + '.';
      setCurrentInput(newInput);
      
      if (operation && previousValue !== null) {
        setDisplay(previousValue + ' ' + operation + ' ' + newInput);
      } else {
        setDisplay(newInput);
      }
    }
  };

  /**
   * Handle button press - routes to appropriate handler
   */
  const handlePress = (value) => {
    if (value >= '0' && value <= '9') {
      handleNumber(value);
    } else if (value === '.') {
      handleDecimal();
    } else if (['+', '-', '×', '÷'].includes(value)) {
      handleOperator(value);
    } else if (value === '=') {
      handleEquals();
    } else if (value === 'C') {
      handleClear();
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        
        {/* Display */}
        <Display value={display} />

        {/* Button Grid */}
        <View style={styles.buttonContainer}>
          {/* Row 1 */}
          <View style={styles.buttonRow}>
            <CalcButton label="C" onPress={handlePress} type="special" />
            <CalcButton label="±" onPress={handlePress} type="special" />
            <CalcButton label="%" onPress={handlePress} type="special" />
            <CalcButton label="÷" onPress={handlePress} type="operator" />
          </View>

          {/* Row 2 */}
          <View style={styles.buttonRow}>
            <CalcButton label="7" onPress={handlePress} />
            <CalcButton label="8" onPress={handlePress} />
            <CalcButton label="9" onPress={handlePress} />
            <CalcButton label="×" onPress={handlePress} type="operator" />
          </View>

          {/* Row 3 */}
          <View style={styles.buttonRow}>
            <CalcButton label="4" onPress={handlePress} />
            <CalcButton label="5" onPress={handlePress} />
            <CalcButton label="6" onPress={handlePress} />
            <CalcButton label="-" onPress={handlePress} type="operator" />
          </View>

          {/* Row 4 */}
          <View style={styles.buttonRow}>
            <CalcButton label="1" onPress={handlePress} />
            <CalcButton label="2" onPress={handlePress} />
            <CalcButton label="3" onPress={handlePress} />
            <CalcButton label="+" onPress={handlePress} type="operator" />
          </View>

          {/* Row 5 */}
          <View style={styles.buttonRow}>
            <CalcButton label="0" onPress={handlePress} isZero />
            <CalcButton label="." onPress={handlePress} />
            <CalcButton label="=" onPress={handlePress} type="operator" />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
