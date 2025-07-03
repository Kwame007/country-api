import { createReducer, on } from '@ngrx/store';
import { CountryState, initialState } from './country.state';
import * as CountryActions from './country.actions';

export const countryReducer = createReducer(
  initialState,

  on(CountryActions.CountryLoadAll, (state) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  })),

  on(CountryActions.CountryLoadAllSuccess, (state, { countriesList }) => ({
    ...state,
    countriesList,
    isLoading: false,
    errorMessage: null,
  })),

  on(CountryActions.CountryLoadAllFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    errorMessage: error,
  })),

  on(CountryActions.CountryLoadByCode, (state, { code }) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  })),

  on(CountryActions.CountryLoadByCodeSuccess, (state, { activeCountry }) => ({
    ...state,
    activeCountry,
    isLoading: false,
    errorMessage: null,
  })),

  on(CountryActions.CountryLoadByCodeFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    errorMessage: error,
  })),

  on(CountryActions.CountrySetSearchQuery, (state, { countrySearchQuery }) => ({
    ...state,
    countrySearchQuery,
  })),

  on(CountryActions.CountrySetFilterRegion, (state, { selectedRegion }) => ({
    ...state,
    selectedRegion,
  })),

  on(CountryActions.CountrySetTheme, (state, { uiTheme }) => ({
    ...state,
    uiTheme,
  })),

  on(CountryActions.CountrySelect, (state, { code }) => ({
    ...state,
    activeCountry:
      state.countriesList.find((country) => country.cca3 === code) || null,
  }))
);
