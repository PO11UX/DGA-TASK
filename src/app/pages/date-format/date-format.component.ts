import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateFormatterPipe } from 'src/shared/pipes/date-formatter.pipe';

@Component({
  selector: 'app-date-format',
  standalone: true,
  imports: [DateFormatterPipe, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule,],
  templateUrl: './date-format.component.html',
  styleUrl: './date-format.component.scss'
})
export class DateFormatComponent {
  values: string[] = [
    '2023-08-10T09:42:34.0734574Z',
    'Not a date',
    '2023-09-15T15:22:10.1234567Z'
  ];

  newValue: string = '';

  addValue(): void {
    if (this.newValue.trim()) {
      this.values.push(this.newValue.trim());
      this.newValue = '';
    }
  }
}
