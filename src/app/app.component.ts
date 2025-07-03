import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './services/country.service';
import { CommonModule } from '@angular/common';
import { Country } from './models/countries.models';
import { CountriesListComponent } from './components/countries-list/countries-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CountriesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rest-countries';
  private countryService = inject(CountryService);

  countries: Country[] = [];
  country: Country[] = [];
  countryList: Country[] = [];

  loadingCountries = false;
  loadingCountry = false;
  loadingCountryList = false;

  errorCountries: string | null = null;
  errorCountry: string | null = null;
  errorCountryList: string | null = null;

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries() {
    this.loadingCountries = true;
    this.errorCountries = null;
    this.countryService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
        this.loadingCountries = false;
      },
      error: (err) => {
        this.errorCountries = err?.message || 'An error occurred';
        this.loadingCountries = false;
      }
    });
  }

  fetchCountry(code: string) {
    this.loadingCountry = true;
    this.errorCountry = null;
    this.countryService.getCountry(code).subscribe({
      next: (data) => {
        this.country = data;
        this.loadingCountry = false;
      },
      error: (err) => {
        this.errorCountry = err?.message || 'An error occurred';
        this.loadingCountry = false;
      }
    });
  }

  fetchCountryList(list: string[]) {
    this.loadingCountryList = true;
    this.errorCountryList = null;
    this.countryService.getCountryList(list).subscribe({
      next: (data) => {
        this.countryList = data;
        this.loadingCountryList = false;
      },
      error: (err) => {
        this.errorCountryList = err?.message || 'An error occurred';
        this.loadingCountryList = false;
      }
    });
  }
}
