# Expense Tracker App - Beginner's Guide

## 📁 Project Structure

Simple expense tracker organized into small, easy-to-understand files:

```
expense_tracker/
├── App.js                    # Main file with tracking logic
├── styles.js                 # All styling
└── components/               # Folder for reusable components
    ├── Summary.js            # Shows total expenses
    ├── AddExpense.js         # Form to add expenses
    └── ExpenseItem.js        # Single expense display
```

## 🎯 Features

- ✅ **Add Expenses**: Enter description, amount, and category
- ✅ **View Total**: See total expenses at the top
- ✅ **Delete Expenses**: Remove expenses with trash icon
- ✅ **Auto-date**: Automatically adds today's date
- ✅ **Real-time Updates**: Total updates instantly

## 📝 How Each File Works

### App.js (Main File)

- Manages the state:

  - `expenses` - Array of all expenses
  - `formData` - Current form values (description, amount, category)

- Main functions:
  - `handleFormChange()` - Update form fields
  - `addExpense()` - Add new expense to list
  - `deleteExpense()` - Remove expense by ID
  - `calculateTotal()` - Sum all expenses

### styles.js

- Green theme for money/finance
- Card-based design
- Form inputs and buttons

### components/Summary.js

- Shows total expenses
- Large green number display

### components/AddExpense.js

- Form with 3 inputs:
  - Description (text)
  - Amount (number)
  - Category (text)
- Add button to submit

### components/ExpenseItem.js

- Shows single expense
- Displays category, description, date
- Shows amount in red (negative)
- Trash icon to delete

## 🚀 How to Run

```bash
cd expense_tracker
npm start
```

Then scan the QR code with Expo Go app on your phone!

## 🎨 How It Works

1. **Enter Details** → Fill in description, amount, category
2. **Add Expense** → Tap "Add Expense" button
3. **View List** → See all expenses below
4. **Check Total** → Total updates automatically
5. **Delete** → Tap trash icon to remove

## 💡 Customization Ideas

- Add expense categories dropdown
- Add date picker for custom dates
- Add charts/graphs
- Add budget limits
- Add monthly/weekly views
- Add export to CSV
- Add recurring expenses
- Add expense filtering

## 📚 Learning Points

- **State Management**: Managing list and form data
- **Form Handling**: Controlled inputs
- **Array Methods**: filter(), reduce()
- **Validation**: Checking inputs before adding
- **Number Formatting**: toFixed() for decimals
- **Date Handling**: Getting current date
