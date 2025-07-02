import { Component, Input } from '@angular/core';
import { Country } from '../../models/countries.models';
import { CountryCardComponent } from '../country-card/country-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries-list',
  imports: [CountryCardComponent,CommonModule],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent {
  @Input() countries: Country[] = [];
}
