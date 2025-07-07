import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from './country.state';

export const selectCountryFeatureState =
  createFeatureSelector<CountryState>('country');

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

export const selectActiveCountry = createSelector(
  selectCountryFeatureState,
  (state) => state.activeCountry
);

export const selectCountrySearchQuery = createSelector(
  selectCountryFeatureState,
  (state) => state.countrySearchQuery
);

export const selectCountrySelectedRegion = createSelector(
  selectCountryFeatureState,
  (state) => state.selectedRegion
);

export const selectCountryUiTheme = createSelector(
  selectCountryFeatureState,
  (state) => state.uiTheme
);

export const selectCountryIsLoading = createSelector(
  selectCountryFeatureState,
  (state) => state.isLoading
);

export const selectCountryErrorMessage = createSelector(
  selectCountryFeatureState,
  (state) => state.errorMessage
);
