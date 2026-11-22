# Meetings and Tasks

Team T01 — Recipe Finder. We coordinate in our Teams group chat ("CS624 Team Project") instead of scheduled calls, so this file is a log of what we discussed and decided there, followed by what each of us is working on. Everyone fills in their own section.

## Discussion log

### Oct 25, 2026 — TP01 setup

- Brandon drafted the learning team charter from a template and shared it for everyone to fill in.
- Confirmed the TP01 submission needs the charter, the peer review and the proposal.
- Agreed the charter is a working document that we update as we go.

### Nov 17, 2026 — Splitting the TP02 work

- Enzo takes the Literature Review for the report and asked everyone to pick a report section and a part of the app.
- Brandon takes the architecture and methodology: how many components, screens and style files we need and where they go, so the work can be delegated for TP03.
- Agreed to share the code in one GitHub repo.

### Nov 18, 2026 — Project overview

- Brandon will follow the structure of the Cities app in chapter 6.2 of the textbook because it is very close to our app.
- Jacqueline shared a project overview document with the responsibilities of each member:
  - Brandon — UI design and navigation: Home screen, app layout, navigation, reusable UI components
  - Jacqueline — recipe search: Search screen, search bar, filtering the local recipe data
  - Enzo — recipe details: images, ingredients, measurements, preparation instructions
  - Vishal — favorites and testing: Favorites screen, favorite selections in React state, coordinating testing

### Nov 19, 2026 — How we work

- Agreed on the project overview: each member owns a part of the code and builds on it until the project is done.
- Agreed the code goes in a common repo.
- Brandon's deliverable for the week: the folder tree and placeholder files with to-do comments and routing, so every task is tied to a file name.
- We stay in the chat instead of calls so everyone can follow.

### Nov 20, 2026 — Architecture shared, open tasks picked up

- Brandon shared the architecture and file structure, and asked for owners for persistence and the shopping list.
- Jacqueline started on the shopping list.
- Vishal confirmed Favorites and testing, and took persistence for favorites (AsyncStorage: load on launch, save on every toggle). For the report Vishal takes the references and the APA check.
- Vishal went through the Team Project Overview on Brightspace and listed requirements that were not in our plan yet: AsyncStorage persistence, CRUD operations on the data, code on GitHub with a README.md and a MEETINGS.md, public repos, and a screenshot of the app running.
- Timing: TP02 is the progress report with the architecture and the code we have so far. The complete working app is the target for TP03.
- We keep building the report from the TP01 document.

### Nov 21, 2026 — Report document and GitHub repo

- Enzo shared the TP02 report document with his Literature Review and asked everyone to add their parts.
- Brandon created this GitHub repo and pushed the latest files. The old SharePoint folder is no longer used.
- Brandon added the cover page "Team and Professor - Start Here.md".

### Nov 22, 2026 — TP02 wrap-up

- Vishal updated the references in the TP02 document: all six in APA format, the three papers checked against the originals, alphabetical order, and in-text citations added to the literature review.
- Vishal added the Favorites tab navigation, the AsyncStorage and navigation packages, the test checklist, README.md and this file to the repo. The app now starts and shows the Home and Favorites tabs.

## Open items

- Shopping list: Jacqueline has started on it. In the repo it is still a placeholder and not in the navigation.
- Recipe data: add the recipes by hand or bring in a larger set.
- Course requirements still to cover as a team: CRUD operations on the data, and a screenshot of the app running.
- Agree the final values that `RecipeContext` shares (shopping list and `addToShoppingList` are not in it yet).
- Add the professor and the TA to the repo.

## Tasks by member

### Brandon — UI design and navigation

Files: `App.js` (app state and context provider), `src/index.js` (navigation), `src/RecipeContext.js`, `src/theme.js`, `src/components/`, `src/Home/Home.js`

Report: architecture and methodology

(Brandon to fill in)

### Jacqueline — recipe search

Files: `src/data/recipes.js`, `src/Search/Search.js`, `src/Search/SearchBar.js`, `assets/images/`

(Jacqueline to fill in)

### Enzo — recipe details

Files: `src/RecipeDetails/RecipeDetails.js`

Report: literature review

(Enzo to fill in)

### Vishal — favorites, persistence and testing

Files: `src/Favorites/Favorites.js`, the favorites methods in `App.js`, `TESTING.md`

Report: references and APA check

What I did for TP02:

- Favorites logic in `App.js`. `toggleFavorite(recipeId)` adds the id to the favorites array if it is not there and removes it if it is. `isFavorite(recipeId)` returns true or false so a screen can show the right button state. Both are shared through `RecipeContext`, so any screen can use them.
- Persistence. Favorites are saved on the device with AsyncStorage under the key `RecipeFinder:favorites`. `componentDidMount` reads the saved array when the app starts, and `saveFavorites` writes it every time a favorite changes. Without this the favorites reset on every launch.
- Favorites screen. `Favorites.js` filters the recipe list down to the favorited ids and shows them with the shared `RecipeCard`. If there are none it shows "No favorites yet!". Tapping a recipe opens Recipe Details.
- Navigation. Filled in `FavoritesNav` in `src/index.js` so the Favorites tab has its own stack (Favorites, then Recipe Details), the same pattern as the Home tab.
- Dependencies. Added AsyncStorage and the React Navigation packages to `package.json` with `npx expo install`, so `npm install` is enough to set the project up.
- Testing. Wrote the manual test checklist in `TESTING.md`. It covers every screen, with the most detail on favorites and persistence.
- Docs. Added `README.md` and this file.
- Report. Rewrote the six references in APA, checked them against the sources, and added the in-text citations.

What is next for TP03:

- Run the test checklist on a real device and record the results.
- Work with Enzo on the favorite button in Recipe Details.
- Help with the shopping list where needed.
