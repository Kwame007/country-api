import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from '../../models/countries.models';
import { CountryLoadByCode, CountrySelect } from '../../store/country.actions';
import {
  selectActiveCountry,
  selectCountryErrorMessage,
  selectCountryIsLoading,
} from '../../store/country.selectors';
import { PopulationPipe } from '../../pipes/population.pipe';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { ObjectListPipe } from '../../pipes/object-list.pipe';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [CommonModule, PopulationPipe, ObjectListPipe],
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  country$: Observable<Country | null>;
  isLoading$: Observable<boolean>;
  errorMessage$: Observable<string | null>;
  borderCountries: { code: string; name: string }[] = [];
  countryService = inject(CountryService);

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.country$ = this.store.select(selectActiveCountry);
    this.isLoading$ = this.store.select(selectCountryIsLoading);
    this.errorMessage$ = this.store.select(selectCountryErrorMessage);
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map((params) => params.get('code')),
        distinctUntilChanged()
      )
      .subscribe((code) => {
        if (code) {
          this.store.dispatch(CountryLoadByCode({ code }));
        }
      });
    this.country$.subscribe((country) => {
      if (country?.borders?.length) {
        this.countryService
          .getCountriesByCodes(country.borders)
          .subscribe((borderCountries) => {
            this.borderCountries = borderCountries.map((c) => ({
              code: c.cca3,
              name: c.name.common,
            }));
          });
      } else {
        this.borderCountries = [];
      }
    });
  }

  goBack() {
    this.router.navigate(['/countries']);
  }

  selectBorderCountry(code: string) {
    this.router.navigate(['/countries', code]);
  }
}
