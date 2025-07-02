import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from './country.state';

export const selectCountryFeatureState =
  createFeatureSelector<CountryState>('country');

// Selector for the filtered list of countries based on search and region
export const selectCountriesFilteredList = createSelector(
  selectCountryFeatureState,
  (state) => {
    let filtered = state.countriesList;
    if (state.countrySearchQuery) {
      const query = state.countrySearchQuery.toLowerCase();
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(query)
      );
    }
    if (state.selectedRegion) {
      filtered = filtered.filter(
        (country) => country.region === state.selectedRegion
      );
    }
    return filtered;
  }
);

// Selector for the currently selected/active country
export const selectActiveCountry = createSelector(
  selectCountryFeatureState,
  (state) => state.activeCountry
);

// Selector for the current search query
export const selectCountrySearchQuery = createSelector(
  selectCountryFeatureState,
  (state) => state.countrySearchQuery
);

// Selector for the currently selected region filter
export const selectCountrySelectedRegion = createSelector(
  selectCountryFeatureState,
  (state) => state.selectedRegion
);

// Selector for the current UI theme
export const selectCountryUiTheme = createSelector(
  selectCountryFeatureState,
  (state) => state.uiTheme
);

// Selector for the loading state
export const selectCountryIsLoading = createSelector(
  selectCountryFeatureState,
  (state) => state.isLoading
);

// Selector for the error message
export const selectCountryErrorMessage = createSelector(
  selectCountryFeatureState,
  (state) => state.errorMessage
);