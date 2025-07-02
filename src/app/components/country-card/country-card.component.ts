import { Component, Input } from '@angular/core';
import { Country } from '../../models/countries.models';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent {
  @Input() country!: Country;
}
