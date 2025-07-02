import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as CountryActions from './country.actions';
import { CountryService } from '../services/country.service';

@Injectable()
export class CountryEffects {
  private actions$ = inject(Actions);
  private countryApi = inject(CountryService);

  //  Load all countries
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.CountryLoadAll),
      mergeMap(() =>
        this.countryApi.getAllCountries().pipe(
          map((countries) =>
            CountryActions.CountryLoadAllSuccess({ countries })
          ),
          catchError((error) =>
            of(CountryActions.CountryLoadAllFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Load country by code
  loadCountryByCode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.CountryLoadByCode),
      mergeMap(({ code }) =>
        this.countryApi.getCountryDetailsByCode(code).pipe(
          map((country) =>
            CountryActions.CountryLoadByCodeSuccess({ country })
          ),
          catchError((error) =>
            of(
              CountryActions.CountryLoadByCodeFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
}