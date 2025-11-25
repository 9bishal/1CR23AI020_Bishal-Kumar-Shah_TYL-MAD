# Counter App - Beginner's Guide

## 📁 Project Structure

Simple counter app organized into small, easy-to-understand files:

```
counter_app/
├── App.js                    # Main file - brings everything together
├── styles.js                 # All styling in one place
└── components/               # Folder for reusable components
    ├── CounterDisplay.js     # Shows the counter number
    ├── CounterButton.js      # Reusable button (+ and -)
    └── ResetButton.js        # Reset button
```

## 🎯 Features

- ✅ **Increment**: Press the + button to increase counter
- ✅ **Decrement**: Press the - button to decrease counter
- ✅ **Reset**: Press Reset button to set counter back to 0
- ✅ **Clean Design**: Modern, colorful UI with shadows

## 📝 How Each File Works

### App.js (Main File)

- Manages the state (current counter value)
- Contains 3 main functions:
  - `increment()` - Adds 1 to counter
  - `decrement()` - Subtracts 1 from counter
  - `reset()` - Sets counter to 0

### styles.js

- Contains all the styling for colors, sizes, and layouts
- Blue buttons for +/-
- Red button for reset
- White counter display with shadow

### components/CounterDisplay.js

- Shows the current counter number
- Large, bold text in a styled box

### components/CounterButton.js

- Reusable button component
- Used for both + and - buttons
- Takes a label and onPress function

### components/ResetButton.js

- Special red button to reset counter
- Separate component for different styling

## 🚀 How to Run

```bash
cd counter_app
npm start
```

Then scan the QR code with Expo Go app on your phone!

## 🎨 Customization Ideas

- Change button colors in `styles.js`
- Add step size (increment by 5, 10, etc.)
- Add maximum/minimum limits
- Add sound effects
- Save counter value to phone storage
- Add multiple counters

## 💡 Learning Points

- **State Management**: Using `useState` to track the counter
- **Props**: Passing data and functions to components
- **Component Reusability**: Same button component for + and -
- **Event Handling**: Responding to button presses
