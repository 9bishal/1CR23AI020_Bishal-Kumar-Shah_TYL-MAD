// App.js – Main entry point for Quiz App
// This is the main file with all the quiz logic
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { quizQuestions } from './data/quizData';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import AnswerButton from './components/AnswerButton';
import ResultsScreen from './components/ResultsScreen';
import { styles } from './styles';

export default function App() {
  // State: Current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // State: Selected answer index
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // State: Whether answer has been submitted
  const [showResult, setShowResult] = useState(false);
  // State: Total score
  const [score, setScore] = useState(0);
  // State: Whether quiz is finished
  const [quizFinished, setQuizFinished] = useState(false);

  /**
   * Handle answer selection
   */
  const handleAnswerSelect = (index) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  /**
   * Submit the answer and check if correct
   */
  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);

    // Check if answer is correct
    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to next question after a delay
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizFinished(true);
      }
    }, 1500);
  };

  /**
   * Restart the quiz
   */
  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Show results screen if quiz is finished
  if (quizFinished) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="dark" />
          <ResultsScreen 
            score={score} 
            total={quizQuestions.length} 
            onRestart={handleRestart}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  // Get current question data
  const question = quizQuestions[currentQuestion];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>🧠 Quiz App</Text>
        </View>

        {/* Progress Bar */}
        <ProgressBar 
          current={currentQuestion + 1} 
          total={quizQuestions.length} 
        />

        <ScrollView>
          {/* Question */}
          <QuestionCard question={question.question} />

          {/* Answer Options */}
          <View style={{ paddingHorizontal: 20 }}>
            {question.options.map((option, index) => (
              <AnswerButton
                key={index}
                text={option}
                onPress={() => handleAnswerSelect(index)}
                isSelected={selectedAnswer === index}
                showResult={showResult}
                isCorrect={index === question.correctAnswer}
              />
            ))}
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={[
              styles.submitButton,
              selectedAnswer === null && styles.submitButtonDisabled
            ]}
            onPress={handleSubmit}
            disabled={selectedAnswer === null || showResult}
          >
            <Text style={styles.submitButtonText}>
              {showResult ? 'Moving to next...' : 'Submit Answer'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
