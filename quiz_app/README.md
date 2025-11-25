# Quiz App - Beginner's Guide

## 📁 Project Structure

Simple quiz app organized into small, easy-to-understand files:

```
quiz_app/
├── App.js                    # Main file with quiz logic
├── styles.js                 # All styling
├── data/
│   └── quizData.js          # Quiz questions and answers
└── components/               # Folder for reusable components
    ├── ProgressBar.js        # Shows question progress
    ├── QuestionCard.js       # Displays the question
    ├── AnswerButton.js       # Button for each answer
    └── ResultsScreen.js      # Shows final score
```

## 🎯 Features

- ✅ **Multiple Choice Questions**: 5 sample questions
- ✅ **Progress Tracking**: See which question you're on
- ✅ **Answer Feedback**: Green for correct, red for wrong
- ✅ **Score Tracking**: Counts correct answers
- ✅ **Results Screen**: Shows final score and percentage
- ✅ **Restart Option**: Take the quiz again

## 📝 How Each File Works

### App.js (Main File)

- Manages the state:

  - `currentQuestion` - Which question we're on
  - `selectedAnswer` - Which answer is selected
  - `showResult` - Whether to show correct/wrong
  - `score` - Number of correct answers
  - `quizFinished` - Whether quiz is complete

- Main functions:
  - `handleAnswerSelect()` - Select an answer
  - `handleSubmit()` - Check answer and move to next
  - `handleRestart()` - Reset quiz to beginning

### data/quizData.js

- Array of question objects
- Each question has:
  - `id` - Unique identifier
  - `question` - Question text
  - `options` - Array of 4 possible answers
  - `correctAnswer` - Index of correct option (0-3)

### styles.js

- Purple theme with clean design
- Different button states:
  - **Normal**: Light gray background
  - **Selected**: Purple border
  - **Correct**: Green background
  - **Wrong**: Red background

### components/ProgressBar.js

- Shows "Question X of Y"
- Visual progress bar

### components/QuestionCard.js

- Displays the question text
- White card with shadow

### components/AnswerButton.js

- Reusable button for each answer
- Changes color based on state
- Disabled after submission

### components/ResultsScreen.js

- Shows final score (e.g., "4/5")
- Calculates percentage
- Shows encouraging message
- Restart button

## 🚀 How to Run

```bash
cd quiz_app
npm start
```

Then scan the QR code with Expo Go app on your phone!

## 🎨 How It Works

1. **Start Quiz** → See first question
2. **Select Answer** → Tap one of the options
3. **Submit** → Button turns green (correct) or red (wrong)
4. **Auto-advance** → Moves to next question after 1.5 seconds
5. **Finish** → See your final score
6. **Restart** → Take the quiz again

## 💡 Customization Ideas

- Add more questions in `quizData.js`
- Add categories (Math, Science, History)
- Add timer for each question
- Add difficulty levels
- Save high scores
- Add images to questions
- Add sound effects

## 📚 Learning Points

- **State Management**: Multiple states working together
- **Array Mapping**: Rendering list of options
- **Conditional Rendering**: Showing different screens
- **Timeouts**: Auto-advancing questions
- **Props**: Passing data to components
- **Component Composition**: Building complex UI from small parts
