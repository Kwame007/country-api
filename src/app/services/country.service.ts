import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Country } from '../models/countries.models';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http
      .get<
        Country[]
      >(`https://restcountries.com/v3.1/all?fields=name,flags,cca3,capital,region,population,borders,subregion,tld,language`)
      .pipe(
        map((apiCountries) =>
          apiCountries.map((apiCountry) => ({
            name: {
              common: apiCountry.name.common,
              official: apiCountry.name.official,
              nativeName: apiCountry.name.nativeName,
            },
            cca3: apiCountry.cca3,
            capital: apiCountry.capital || [],
            region: apiCountry.region,
            population: apiCountry.population,
            flags: apiCountry.flags,
            borders: apiCountry.borders || [],
            subregion: apiCountry.subregion,
            tld: apiCountry.tld,
            currencies: apiCountry.currencies,
            languages: apiCountry.languages,
          }))
        ),
        catchError(this.errorHandler)
      );
  }

  getCountryDetailsByCode(code: string) {
    return this.http
      .get<Country[]>(`https://restcountries.com/v3.1/alpha/${code}`)
      .pipe(
        map((apiCountries) => {
          const apiCountry = apiCountries[0];

          return {
            name: {
              common: apiCountry.name.common,
              official: apiCountry.name.official,
              nativeName: apiCountry.name.nativeName,
            },
            cca3: apiCountry.cca3,
            capital: apiCountry.capital || [],
            region: apiCountry.region,
            population: apiCountry.population,
            flags: apiCountry.flags,
            borders: apiCountry.borders || [],
            subregion: apiCountry.subregion,
            tld: apiCountry.tld,
            currencies: apiCountry.currencies,
            languages: apiCountry.languages,
          };
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  getCountriesByCodes(list: string[]): Observable<Country[]> {
    return this.http
      .get<
        Country[]
      >(`https://restcountries.com/v3.1/alpha?codes=${list.join(',')}&fields=name,flags,cca3,capital,region,population,borders,subregion,tld,currencies,languages`)
      .pipe(
        map((apiCountry) => {
          const validData = apiCountry.filter(
            (item: Country) => item?.name?.common && item?.cca3
          );
          const invalidData = apiCountry.filter(
            (item: Country) => !item?.name?.common || !item?.cca3
          );
          if (invalidData.length) {
            console.warn('Invalid country entries found:', invalidData);
          }

          return validData.map((item: Country) => ({
            name: {
              common: item.name.common,
              official: item.name.official,
              nativeName: item.name.nativeName,
            },
            cca3: item.cca3,
            capital: item.capital || [],
            region: item.region,
            population: item.population,
            flags: item.flags,
            borders: item.borders || [],
            subregion: item.subregion,
            tld: item.tld,
            currencies: item.currencies,
            languages: item.languages,
          }));
        }),
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  private errorHandler(error: HttpErrorResponse) {
    console.error('API Error:', error.message);
    return throwError(
      () => new Error('Failed to fetch country data. Please try again later.')
    );
  }
}
