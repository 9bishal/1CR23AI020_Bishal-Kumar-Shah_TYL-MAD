# To-Do List App - Beginner's Guide

## 📁 Project Structure

This app is organized into small, easy-to-understand files:

```
todo_list_app/
├── App.js                 # Main file - brings everything together
├── styles.js              # All styling in one place
└── components/            # Folder for reusable components
    ├── Header.js          # App title and task count
    ├── TaskInput.js       # Input field and add button
    ├── TaskList.js        # Displays all tasks
    └── TaskItem.js        # Single task with checkbox and delete
```

## 🎯 Features

- ✅ **Add Task**: Type a task and press the + button
- ✅ **Mark as Done**: Tap the checkbox to mark complete
- ✅ **Delete Task**: Tap the ✕ button to remove
- ✅ **Task Counter**: See how many tasks you have

## 📝 How Each File Works

### App.js (Main File)

- Manages the state (list of tasks and input text)
- Contains 3 main functions:
  - `addTask()` - Adds a new task
  - `toggleTask()` - Marks task as done/undone
  - `deleteTask()` - Removes a task

### styles.js

- Contains all the styling for colors, sizes, and layouts
- Easy to modify if you want to change the look

### components/Header.js

- Shows the app title "📝 My To-Do List"
- Displays the task count

### components/TaskInput.js

- Text input field for typing tasks
- Add button (+) to submit

### components/TaskList.js

- Displays all tasks using FlatList
- Shows "No tasks yet!" when empty

### components/TaskItem.js

- Individual task component
- Checkbox to mark complete
- Delete button (✕)
- Strikethrough text when completed

## 🚀 How to Run

```bash
cd todo_list_app
npm start
```

Then scan the QR code with Expo Go app on your phone!

## 🎨 Customization Ideas

- Change colors in `styles.js`
- Add task categories
- Add task priority levels
- Save tasks to phone storage
- Add due dates

## 💡 Learning Points

- **State Management**: Using `useState` to track tasks
- **Props**: Passing data between components
- **Array Methods**: `map()`, `filter()` for managing tasks
- **Components**: Breaking UI into reusable pieces
