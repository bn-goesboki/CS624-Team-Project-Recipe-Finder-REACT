# Recipe Finder

CS624 Full-Stack Development: Mobile App — Team T01 project
City University of Seattle, School of Technology & Computing

Team: Enzo Nguyen, Brandon Neale, Jacqueline Biira, Vishal Krishna Kumar

## What the app does

Recipe Finder is a React Native (Expo) app that helps people find recipes and cook them. The finished app will let a user search recipes by name, open a recipe to see its ingredients and instructions, save favorite recipes, and build a shopping list of the ingredients they need.

## Status (TP02)

The architecture, navigation and shared components are in place. The screens are at different stages, and the full working app is planned for TP03.

| Feature | Owner | Status |
|---------|-------|--------|
| App state + RecipeContext | Brandon | Done |
| Navigation (bottom tabs, one stack per tab) | Brandon | Home and Favorites tabs wired, Search tab pending |
| Shared components (RecipeCard, CenterMessage, Button) | Brandon | In progress |
| Home screen | Brandon | In progress |
| Recipe data | Jacqueline | Placeholder (shape agreed) |
| Search | Jacqueline | Placeholder |
| Recipe Details | Enzo | Placeholder |
| Favorites screen | Vishal | Done, waiting on Recipe Details for the favorite button |
| Favorites persistence (AsyncStorage) | Vishal | Done |
| Test checklist | Vishal | Written, not run yet |
| Shopping list | Jacqueline (started) | Placeholder in the repo |

## How to run

You need Node.js and the Expo Go app on your phone (or an Android / iOS emulator).

```
cd RecipeFinder
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `a` for Android / `i` for iOS.

## Built with

- Expo SDK 58, React Native 0.88, React 19
- React Navigation 7 (bottom tabs + native stack)
- AsyncStorage for saving favorites on the device
- React Context (`RecipeContext`) to share recipes and favorites between screens

## Data and persistence

- Recipes are a local array in `RecipeFinder/src/data/recipes.js`.
- Favorites are stored as an array of recipe ids. `App.js` loads them from AsyncStorage when the app starts and saves them every time a favorite is added or removed, so they are still there after the app is closed.

## Project layout

```
RecipeFinder/
├── App.js                  app state + RecipeContext.Provider
├── TESTING.md              manual test checklist
└── src/
    ├── index.js            navigation
    ├── RecipeContext.js
    ├── theme.js
    ├── components/         RecipeCard, CenterMessage, Button
    ├── data/recipes.js
    ├── Home/
    ├── Search/
    ├── RecipeDetails/
    ├── Favorites/
    └── ShoppingList/
```

The full file list with the owner of each file is in [RecipeFinder/file architecture.md](RecipeFinder/file%20architecture.md).

## More documents

- [Team and Professor - Start Here.md](Team%20and%20Professor%20-%20Start%20Here.md) — submission notes from each team member
- [MEETINGS.md](MEETINGS.md) — team decisions and each member's tasks
- [RecipeFinder/TESTING.md](RecipeFinder/TESTING.md) — test checklist
