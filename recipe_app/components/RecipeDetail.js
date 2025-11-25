// RecipeDetail.js – Full recipe view component
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

/**
 * RecipeDetail Component
 * Shows full recipe with ingredients and instructions
 * @param {Object} recipe - Recipe object
 * @param {Function} onBack - Function to go back to list
 */
export default function RecipeDetail({ recipe, onBack }) {
  return (
    <View style={styles.detailContainer}>
      <ScrollView>
        {/* Header */}
        <View style={styles.detailHeader}>
          <Text style={styles.detailEmoji}>{recipe.image}</Text>
          <Text style={styles.detailTitle}>{recipe.title}</Text>
          <Text style={styles.detailMeta}>
            {recipe.category} • {recipe.time} • {recipe.difficulty}
          </Text>
        </View>

        {/* Content */}
        <View style={styles.detailContent}>
          {/* Ingredients */}
          <Text style={styles.sectionTitle}>📝 Ingredients</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredientItem}>
              • {ingredient}
            </Text>
          ))}

          {/* Instructions */}
          <Text style={styles.sectionTitle}>👨‍🍳 Instructions</Text>
          {recipe.instructions.map((instruction, index) => (
            <Text key={index} style={styles.instructionItem}>
              {index + 1}. {instruction}
            </Text>
          ))}
        </View>

        {/* Back button */}
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Back to Recipes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
