import { createAction, props } from '@ngrx/store';
import { Country } from '../models/countries.models';

// Action to load all countries from the API
export const CountryLoadAll = createAction('[Country] Load All');

// Action dispatched when all countries are successfully loaded
export const CountryLoadAllSuccess = createAction(
  '[Country] Load All Success',
  props<{ countries: Country[] }>()
);

// Action dispatched when there is an error loading all countries
export const CountryLoadAllFailure = createAction(
  '[Country] Load All Failure',
  props<{ error: string }>()
);

// Action to load a country by its code
export const CountryLoadByCode = createAction(
  '[Country] Load By Code',
  props<{ code: string }>()
);

// Action dispatched when a country is successfully loaded by its code
export const CountryLoadByCodeSuccess = createAction(
  '[Country] Load By Code Success',
  props<{ country: Country }>()
);

// Action dispatched when there is an error loading a country by its code
export const CountryLoadByCodeFailure = createAction(
  '[Country] Load By Code Failure',
  props<{ error: string }>()
);

// Action to select a country
export const CountrySelect = createAction(
  '[Country] Select',
  props<{ code: string }>()
);

// Action to set the search query for countries
export const CountrySetSearchQuery = createAction(
  '[Country] Set Search Query',
  props<{ query: string }>()
);

// Action to set the filter region for countries
export const CountrySetFilterRegion = createAction(
  '[Country] Set Filter Region',
  props<{ region: string }>()
);

// Action to set the theme
export const CountrySetTheme = createAction(
  '[Country] Set Theme',
  props<{ theme: 'light' | 'dark' }>()
);