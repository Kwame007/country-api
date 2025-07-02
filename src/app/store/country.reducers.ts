import { createReducer, on } from '@ngrx/store';
import { CountryState, initialState } from './country.state';
import * as CountryActions from './country.actions';

export const countryReducer = createReducer(
  initialState,

  on(CountryActions.CountryLoadAll, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(CountryActions.CountryLoadAllSuccess, (state, { countries }) => ({
    ...state,
    countries,
    loading: false,
    error: null,
  })),

  on(CountryActions.CountryLoadAllFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(CountryActions.CountryLoadByCode, (state, { code }) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(CountryActions.CountryLoadByCodeSuccess, (state, { country }) => ({
    ...state,
    selectedCountry: country,
    loading: false,
    error: null,
  })),

  on(CountryActions.CountryLoadByCodeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(CountryActions.CountrySetSearchQuery, (state, { query }) => ({
    ...state,
    searchQuery: query,
  })),

  on(CountryActions.CountrySetFilterRegion, (state, { region }) => ({
    ...state,
    filterRegion: region,
  })),

  on(CountryActions.CountrySetTheme, (state, { theme }) => ({
    ...state,
    theme,
  })),

  on(CountryActions.CountrySelect, (state, { code }) => ({
    ...state,
    selectedCountry:
      state.countriesList.find((country) => country.cca3 === code) || null,
  }))
);