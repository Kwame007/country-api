import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectList',
  standalone: true,
})
export class ObjectListPipe implements PipeTransform {
  transform(value: any, type: 'currencies' | 'languages'): string {
    if (!value) return '';
    if (type === 'currencies') {
      return Object.values(value)
        .map((c: any) => c.name + (c.symbol ? ` (${c.symbol})` : ''))
        .join(', ');
    }
    if (type === 'languages') {
      return Object.values(value).join(', ');
    }
    return '';
  }
}
