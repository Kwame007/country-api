import { Country } from "../models/countries.models";


export interface CountryState {
  countriesList: Country[];
  activeCountry: Country | null;
  countrySearchQuery: string;
  selectedRegion: string;
  uiTheme: 'light' | 'dark';
  isLoading: boolean;
  errorMessage: string | null;
}

export const initialState: CountryState = {
  countriesList: [],
  activeCountry: null,
  countrySearchQuery: '',
  selectedRegion: '',
  uiTheme: 'light',
  isLoading: false,
  errorMessage: null,
};