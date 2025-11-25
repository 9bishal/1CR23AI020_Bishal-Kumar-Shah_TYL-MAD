// styles.js – All styles for the calculator app
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  
  // Display area
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#2d2d2d',
  },
  displayText: {
    fontSize: 36,
    color: '#fff',
    textAlign: 'right',
    fontWeight: '300',
  },
  
  // Button grid
  buttonContainer: {
    flex: 3,
    padding: 10,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  
  // Buttons
  button: {
    flex: 1,
    backgroundColor: '#505050',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '400',
  },
  
  // Operator buttons (orange)
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  
  // Special buttons (light gray)
  specialButton: {
    backgroundColor: '#a5a5a5',
  },
  specialButtonText: {
    color: '#000',
  },
  
  // Zero button (wider)
  zeroButton: {
    flex: 2,
    alignItems: 'flex-start',
    paddingLeft: 35,
  },
});
