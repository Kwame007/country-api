import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as CountryActions from './country.actions';
import { CountryService } from '../services/country.service';

@Injectable()
export class CountryEffects {
  private actions$ = inject(Actions);
  private countryApi = inject(CountryService);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.CountryLoadAll),
      mergeMap(() =>
        this.countryApi.getAllCountries().pipe(
          map((countriesList) =>
            CountryActions.CountryLoadAllSuccess({ countriesList })
          ),
          catchError((error) =>
            of(CountryActions.CountryLoadAllFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadCountryByCode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.CountryLoadByCode),
      mergeMap(({ code }) =>
        this.countryApi.getCountryDetailsByCode(code).pipe(
          map((activeCountry) =>
            CountryActions.CountryLoadByCodeSuccess({ activeCountry })
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
