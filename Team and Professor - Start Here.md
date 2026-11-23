# CS624-Team-Project-Recipe-Finder-REACT
Repo for the REACT Recipe Finder Expo Application

TP02 submission - 11.21.2026

Current status: framework development code with placeholders.  Recipe Finder uses concepts that are being learned in parallel of development so additional time is needed for implementation

Routing and minimum functionality have been defined, allowing all team members to acheive goals with targeted and unambiguous milestones for the next 3 week sprint.

Optional Notes:
Brandon - files that are presented have notes when Ai was used. A majority of my code was repurposed from city finder app in chapter 6.  Some of the props, stack push functions were replaced (with provider for example) given how fast REACT dev is going.  While writing code was recommeneded by Windsurf (an analogue of GitHub co-pilot) due to new advances in the code syntax. I kept these new items in as placeholders so I can take the time to learn them and poperly implement them or change them later.  I noted all instances.

Jacqueline: I am working on the Search and SearchBar files and part of the hsoppinList, i have so far worked on the searchBar and will continue building, next will be the search file and others as i continue to build and enter the TP03. 

Vishal - I own Favorites, persistence for favorites, and testing.
- `RecipeFinder/App.js`: I wrote `toggleFavorite`, `isFavorite` and `saveFavorites`, and the part of `componentDidMount` that loads the saved favorites. Favorites are stored with AsyncStorage under the key `RecipeFinder:favorites`. They load when the app starts and save on every toggle. The add/remove logic follows the PE03 toggleComplete / deleteTodo pattern (spread + filter). I did not change anything else in App.js.
- `RecipeFinder/src/Favorites/Favorites.js`: the Favorites screen. It reads `recipes` and `favorites` from RecipeContext, shows the favorited recipes with Brandon's RecipeCard, and shows CenterMessage when the list is empty. Tapping a recipe opens RecipeDetails the same way Home.js does.
- `RecipeFinder/src/index.js`: I filled in `FavoritesNav` with the same pattern as `HomeNav` so the Favorites tab has a screen. This is Brandon's file, so Brandon please check it.
- `RecipeFinder/package.json`: added `@react-native-async-storage/async-storage` and the React Navigation packages from `file architecture.md` with `npx expo install`, because App.js and src/index.js import them. Now `npm install` is enough to set up the project, and the app bundles with `npx expo export`.
- `README.md` and `MEETINGS.md`: added both at the top of the repo. MEETINGS.md has a section for each of us to explain our own tasks, mine is filled in.
- `RecipeFinder/TESTING.md`: manual test checklist for every screen. Nothing has been run in Expo yet because Search, Recipe Details and the recipe data are still placeholders, so every test is marked "Not run". I will run it and record results for TP03.
- TP02 report: I am doing the references section and the APA check.
- Next for TP03: run the checklist on a real device, and work with Enzo on the favorite button in RecipeDetails (it should call `toggleFavorite` / `isFavorite` from the context).
Enzo:
