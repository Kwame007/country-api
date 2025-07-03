# RestCountries

RestCountries is an Angular application that allows users to browse, search, and view detailed information about countries using the REST Countries API. The app features a modern UI, dark/light theme switching, and leverages NgRx for state management.

---

## Project Description

This project provides an interactive interface to explore countries worldwide. Users can search for countries, filter by region, view detailed information, and switch between dark and light themes. The application is built with Angular and uses NgRx for robust state management.

---

## Setup & Run Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**

   ```bash
   ng serve
   ```

   Open your browser at [http://localhost:4200](http://localhost:4200).

3. **Build for production:**

   ```bash
   ng build
   ```

4. **Run unit tests:**
   ```bash
   ng test
   ```

---

## Application Features

- **Search & Filter:** Search for countries by name and filter by region.
- **Country Details:** View detailed information about each country, including population, region, capital, currencies, and bordering countries.
- **Theme Switch:** Toggle between dark and light modes.
- **Responsive Design:** Works well on both desktop and mobile devices.

---

## Component Structure

- **CountriesListComponent:** Displays a list of countries with search and filter options.
- **CountryCardComponent:** Shows a summary card for each country.
- **CountryDetailsComponent:** Presents detailed information for a selected country.
- **ThemeToggleComponent:** Allows users to switch between dark and light themes.

---

## Routing Overview

- `/` - Home page with the list of countries.
- `/country/:code` - Details page for a specific country.

Routes are configured in `src/app/app.routes.ts`.

---

## API Consumption

The application uses the [REST Countries API](https://restcountries.com/) to fetch country data. All API interactions are handled via Angular services and NgRx effects.

---

## NgRx Store Implementation

- **State:** The country state is managed in `src/app/store/country.state.ts`.
- **Actions:** Defined in `src/app/store/country.actions.ts`.
- **Reducers:** Handle state changes in `src/app/store/country.reducers.ts`.
- **Effects:** Manage side effects (API calls) in `src/app/store/country.effects.ts`.
- **Selectors:** Used to select and derive data from the store in `src/app/store/country.selectors.ts`.

---

## Theme Switching Implementation

The theme toggle is implemented using the `ThemeToggleComponent` and managed in the global state with NgRx. The selected theme is applied across the application using SCSS variables and Angular bindings.

---

## Git Workflow

- Use feature branches for new features or bug fixes.
- Open pull requests for code review before merging to `main`.
- Keep commit messages clear and descriptive.

---

## Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [REST Countries API](https://restcountries.com/)
