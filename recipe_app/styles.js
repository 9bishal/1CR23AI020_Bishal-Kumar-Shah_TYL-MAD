// styles.js – All styles for the recipe app
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  
  // Header
  header: {
    backgroundColor: '#ff6b6b',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  
  // Search bar
  searchContainer: {
    padding: 15,
    backgroundColor: '#fff',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  
  // Recipe list
  recipeList: {
    padding: 10,
  },
  
  // Recipe card
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  recipeHeader: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  recipeEmoji: {
    fontSize: 50,
    marginRight: 15,
  },
  recipeInfo: {
    flex: 1,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  recipeCategory: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  recipeTime: {
    fontSize: 14,
    color: '#999',
  },
  favoriteButton: {
    padding: 10,
  },
  favoriteIcon: {
    fontSize: 24,
  },
  
  // Recipe detail
  detailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ff6b6b',
  },
  detailEmoji: {
    fontSize: 80,
    marginBottom: 10,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  detailMeta: {
    fontSize: 16,
    color: '#ffe0e0',
  },
  detailContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  ingredientItem: {
    fontSize: 16,
    color: '#666',
    paddingVertical: 5,
    paddingLeft: 10,
  },
  instructionItem: {
    fontSize: 16,
    color: '#666',
    paddingVertical: 8,
    paddingLeft: 10,
    lineHeight: 24,
  },
  backButton: {
    backgroundColor: '#ff6b6b',
    padding: 15,
    margin: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // Empty state
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
  },
  
  // Tab bar
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  tabActive: {
    borderTopWidth: 3,
    borderTopColor: '#ff6b6b',
  },
  tabText: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
  tabTextActive: {
    color: '#ff6b6b',
    fontWeight: 'bold',
  },
});
