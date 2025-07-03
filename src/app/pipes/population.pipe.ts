import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population',
  standalone: true,
})
export class PopulationPipe implements PipeTransform {
  transform(value: number): string {
    return value.toLocaleString();
  }
}
