import { Component, Input } from '@angular/core';
import { Country } from '../../models/countries.models';
import { CountryCardComponent } from '../country-card/country-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { selectCountriesFilteredList } from '../../store/country.selectors';
import { selectCountryIsLoading } from '../../store/country.selectors';
import { selectCountryErrorMessage } from '../../store/country.selectors';
import {
  CountryLoadAll,
  CountrySetSearchQuery,
  CountrySetFilterRegion,
  CountrySelect,
} from '../../store/country.actions';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  imports: [CountryCardComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss',
})
export class CountriesListComponent {
  countries$: Observable<Country[]>;
  isLoading$: Observable<boolean>;
  errorMessage$: Observable<string | null>;
  countrySearchQuery: string = '';
  filterRegion: string = '';
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(
    private store: Store,
    private router: Router
  ) {
    this.countries$ = this.store.select(selectCountriesFilteredList);
    this.isLoading$ = this.store.select(selectCountryIsLoading);
    this.errorMessage$ = this.store.select(selectCountryErrorMessage);
  }

  ngOnInit(): void {
    this.store.dispatch(CountryLoadAll());
  }

  onSearch() {
    this.store.dispatch(
      CountrySetSearchQuery({ countrySearchQuery: this.countrySearchQuery })
    );
  }

  onFilterRegion(region: string) {
    this.filterRegion = region;
    this.store.dispatch(CountrySetFilterRegion({ selectedRegion: region }));
  }

  selectCountry(country: Country) {
    this.store.dispatch(CountrySelect({ code: country.cca3 }));
    this.router.navigate(['/countries', country.cca3]);
  }
}
