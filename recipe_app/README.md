# Recipe App - Beginner's Guide

## 📁 Project Structure

Simple recipe app organized into small, easy-to-understand files:

```
recipe_app/
├── App.js                    # Main file with app logic
├── styles.js                 # All styling
├── data/
│   └── recipeData.js        # Recipe database
└── components/               # Folder for reusable components
    ├── SearchBar.js          # Search input
    ├── RecipeCard.js         # Recipe preview card
    └── RecipeDetail.js       # Full recipe view
```

## 🎯 Features

- ✅ **Browse Recipes**: View all 5 sample recipes
- ✅ **Search**: Find recipes by name or category
- ✅ **Save Favorites**: Tap ❤️ to save recipes
- ✅ **View Details**: See full ingredients and instructions
- ✅ **Tab Navigation**: Switch between all recipes and favorites

## 📝 How Each File Works

### App.js (Main File)

- Manages the state:

  - `searchQuery` - Current search text
  - `activeTab` - 'all' or 'favorites'
  - `favorites` - Array of favorited recipe IDs
  - `selectedRecipe` - Recipe to show in detail view

- Main functions:
  - `toggleFavorite()` - Add/remove from favorites
  - `getFilteredRecipes()` - Filter by search and tab

### data/recipeData.js

- Array of 5 sample recipes
- Each recipe has:
  - `id` - Unique number
  - `title` - Recipe name
  - `category` - Type (Italian, Indian, etc.)
  - `time` - Cooking time
  - `difficulty` - Easy/Medium/Hard
  - `image` - Emoji icon
  - `ingredients` - Array of ingredients
  - `instructions` - Step-by-step directions

### styles.js

- Red/pink theme
- Card-based design
- Tab bar at bottom

### components/SearchBar.js

- Text input for searching
- Updates search query as you type

### components/RecipeCard.js

- Shows recipe preview
- Displays emoji, title, category, time
- Heart button to favorite
- Tap card to view details

### components/RecipeDetail.js

- Full recipe view
- Shows all ingredients
- Shows all instructions
- Back button to return

## 🚀 How to Run

```bash
cd recipe_app
npm start
```

Then scan the QR code with Expo Go app on your phone!

## 🎨 How It Works

1. **Browse** → See all recipes in a list
2. **Search** → Type to filter recipes
3. **Favorite** → Tap ❤️ to save
4. **View Favorites** → Tap bottom tab
5. **View Details** → Tap recipe card
6. **Go Back** → Tap back button

## 💡 Customization Ideas

- Add more recipes in `recipeData.js`
- Add recipe images (real photos)
- Add cooking videos
- Add ratings and reviews
- Add shopping list feature
- Add meal planning
- Add recipe sharing
- Add user-submitted recipes

## 📚 Learning Points

- **State Management**: Multiple states for search, tabs, favorites
- **Array Filtering**: Search and filter functionality
- **Conditional Rendering**: Switching between list and detail views
- **FlatList**: Efficiently rendering lists
- **Tab Navigation**: Simple tab bar implementation
- **Data Structure**: Organizing recipe data
