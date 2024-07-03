import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'dateFormatter',
  standalone: true
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: any): string {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      return format(date, 'HH:mm:ss MMM dd yyyy');
    }
    return value;
  }
}
