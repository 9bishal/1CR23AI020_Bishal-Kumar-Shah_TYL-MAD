// App.js – Main entry point for Recipe App
// This is the main file with all the recipe app logic
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { recipes } from './data/recipeData';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';
import { styles } from './styles';

export default function App() {
  // State: Search query
  const [searchQuery, setSearchQuery] = useState('');
  // State: Current tab (all or favorites)
  const [activeTab, setActiveTab] = useState('all');
  // State: Favorite recipe IDs
  const [favorites, setFavorites] = useState([]);
  // State: Selected recipe for detail view
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  /**
   * Toggle favorite status of a recipe
   */
  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      setFavorites(favorites.filter(id => id !== recipeId));
    } else {
      setFavorites([...favorites, recipeId]);
    }
  };

  /**
   * Filter recipes based on search and tab
   */
  const getFilteredRecipes = () => {
    let filtered = recipes;

    // Filter by favorites tab
    if (activeTab === 'favorites') {
      filtered = filtered.filter(recipe => favorites.includes(recipe.id));
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  // Show recipe detail view
  if (selectedRecipe) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />
          <RecipeDetail 
            recipe={selectedRecipe} 
            onBack={() => setSelectedRecipe(null)}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  const filteredRecipes = getFilteredRecipes();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>🍳 Recipe App</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <SearchBar 
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Recipe List */}
        <FlatList
          data={filteredRecipes}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.recipeList}
          renderItem={({ item }) => (
            <RecipeCard
              recipe={item}
              onPress={() => setSelectedRecipe(item)}
              onFavorite={() => toggleFavorite(item.id)}
              isFavorite={favorites.includes(item.id)}
            />
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                {activeTab === 'favorites' 
                  ? '❤️ No favorite recipes yet!\nTap the heart to save recipes.'
                  : '🔍 No recipes found.\nTry a different search.'}
              </Text>
            </View>
          }
        />

        {/* Tab Bar */}
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'all' && styles.tabActive]}
            onPress={() => setActiveTab('all')}
          >
            <Text style={styles.favoriteIcon}>📚</Text>
            <Text style={[styles.tabText, activeTab === 'all' && styles.tabTextActive]}>
              All Recipes
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.tab, activeTab === 'favorites' && styles.tabActive]}
            onPress={() => setActiveTab('favorites')}
          >
            <Text style={styles.favoriteIcon}>❤️</Text>
            <Text style={[styles.tabText, activeTab === 'favorites' && styles.tabTextActive]}>
              Favorites ({favorites.length})
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
