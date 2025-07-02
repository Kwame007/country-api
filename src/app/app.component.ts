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
export class AppComponent {
  title = 'rest-countries';
}
