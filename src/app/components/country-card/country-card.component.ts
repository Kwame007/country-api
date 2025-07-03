import { Component, Input } from '@angular/core';
import { Country } from '../../models/countries.models';
import { PopulationPipe } from '../../pipes/population.pipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [PopulationPipe, CommonModule, RouterModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent {
  @Input() country!: Country;

  @Input() index?: number;

  @Input() selectCountry: (country: Country) => void = () => {};
}

function selectLoading(state: object): boolean {
  throw new Error('Function not implemented.');
}
