// RecipeCard.js – Recipe list item component
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

/**
 * RecipeCard Component
 * Shows recipe preview in list
 * @param {Object} recipe - Recipe object
 * @param {Function} onPress - Function to view recipe details
 * @param {Function} onFavorite - Function to toggle favorite
 * @param {boolean} isFavorite - Whether recipe is favorited
 */
export default function RecipeCard({ recipe, onPress, onFavorite, isFavorite }) {
  return (
    <TouchableOpacity style={styles.recipeCard} onPress={onPress}>
      <View style={styles.recipeHeader}>
        <Text style={styles.recipeEmoji}>{recipe.image}</Text>
        <View style={styles.recipeInfo}>
          <Text style={styles.recipeTitle}>{recipe.title}</Text>
          <Text style={styles.recipeCategory}>{recipe.category}</Text>
          <Text style={styles.recipeTime}>⏱️ {recipe.time} • {recipe.difficulty}</Text>
        </View>
        <TouchableOpacity 
          style={styles.favoriteButton} 
          onPress={(e) => {
            e.stopPropagation();
            onFavorite();
          }}
        >
          <Text style={styles.favoriteIcon}>
            {isFavorite ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
