import { createAction, props } from '@ngrx/store';
import { Country } from '../models/countries.models';


export const CountryLoadAll = createAction('[Country] Load All');

export const CountryLoadAllSuccess = createAction(
  '[Country] Load All Success',
  props<{ countriesList: Country[] }>()
);


export const CountryLoadAllFailure = createAction(
  '[Country] Load All Failure',
  props<{ error: string }>()
);


export const CountryLoadByCode = createAction(
  '[Country] Load By Code',
  props<{ code: string }>()
);


export const CountryLoadByCodeSuccess = createAction(
  '[Country] Load By Code Success',
  props<{ activeCountry: Country }>()
);

export const CountryLoadByCodeFailure = createAction(
  '[Country] Load By Code Failure',
  props<{ error: string }>()
);


export const CountrySelect = createAction(
  '[Country] Select',
  props<{ code: string }>()
);

export const CountrySetSearchQuery = createAction(
  '[Country] Set Search Query',
  props<{ countrySearchQuery: string }>()

);

export const CountrySetFilterRegion = createAction(
  '[Country] Set Filter Region',
  props<{ selectedRegion: string }>()

);

export const CountrySetTheme = createAction(
  '[Country] Set Theme',
  props<{ uiTheme: 'light' | 'dark' }>()
);

