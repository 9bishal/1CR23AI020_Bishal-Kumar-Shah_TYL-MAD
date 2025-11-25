# Calculator App - Beginner's Guide

## 📁 Project Structure

Simple calculator app organized into small, easy-to-understand files:

```
calculator_app/
├── App.js                 # Main file with calculator logic
├── styles.js              # All styling (dark theme)
└── components/            # Folder for reusable components
    ├── Display.js         # Shows the result/input
    └── CalcButton.js      # Reusable button component
```

## 🎯 Features

- ✅ **Addition** (+): Add two numbers
- ✅ **Subtraction** (-): Subtract two numbers
- ✅ **Multiplication** (×): Multiply two numbers
- ✅ **Division** (÷): Divide two numbers
- ✅ **Decimal** (.): Work with decimal numbers
- ✅ **Clear** (C): Reset calculator
- ✅ **Dark Theme**: Modern iOS-style calculator design

## 📝 How Each File Works

### App.js (Main File)

- Manages the state:

  - `display` - Current number shown
  - `previousValue` - First number in operation
  - `operation` - Current operator (+, -, ×, ÷)
  - `waitingForOperand` - Whether we just pressed an operator

- Main functions:
  - `handleNumber()` - Process number button press
  - `handleOperator()` - Process operator button press
  - `handleEquals()` - Calculate and show result
  - `handleClear()` - Reset everything
  - `performCalculation()` - Do the math

### styles.js

- Dark theme with three button types:
  - **Gray buttons**: Numbers (0-9, .)
  - **Light gray buttons**: Special (C, ±, %)
  - **Orange buttons**: Operators (+, -, ×, ÷, =)

### components/Display.js

- Shows the current value
- Large white text on dark background

### components/CalcButton.js

- Reusable button component
- Takes props:
  - `label` - What to show on button
  - `onPress` - Function to call
  - `type` - Button style (number/operator/special)
  - `isZero` - Make button wider (for 0)

## 🚀 How to Run

```bash
cd calculator_app
npm start
```

Then scan the QR code with Expo Go app on your phone!

## 🎨 How It Works

1. **Press a number** → Shows in display
2. **Press an operator** (+, -, ×, ÷) → Saves number and operator
3. **Press another number** → Shows new number
4. **Press =** → Calculates result and shows it
5. **Press C** → Clears everything

## 💡 Learning Points

- **State Management**: Multiple state variables working together
- **Conditional Logic**: Different behavior based on state
- **Switch Statements**: Handling different operations
- **Component Reusability**: Same button for all keys
- **Props**: Passing different styles to same component
