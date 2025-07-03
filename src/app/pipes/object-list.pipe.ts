import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectList',
  standalone: true,
})
export class ObjectListPipe implements PipeTransform {
  transform(value: any, type: 'currencies' | 'languages'): string {
    if (!value) return '';
    if (type === 'currencies') {
      // value is an object: { USD: { name: 'United States dollar', symbol: '$' }, ... }
      return Object.values(value)
        .map((c: any) => c.name + (c.symbol ? ` (${c.symbol})` : ''))
        .join(', ');
    }
    if (type === 'languages') {
      // value is an object: { eng: 'English', fra: 'French', ... }
      return Object.values(value).join(', ');
    }
    return '';
  }
}
