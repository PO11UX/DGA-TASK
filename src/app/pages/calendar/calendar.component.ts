import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, getDay, startOfWeek, endOfWeek } from 'date-fns';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  currentMonth: Date = new Date();
  daysInMonth: Date[] = [];
  currentDay: Date = new Date();
  holidays: Date[] = [
    new Date(2024, 6, 15),
    new Date(2024, 6, 25)
  ];

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    const start = startOfMonth(this.currentMonth);
    const end = endOfMonth(this.currentMonth);
    const startDate = startOfWeek(start, { weekStartsOn: 0 });
    const endDate = endOfWeek(end, { weekStartsOn: 0 });

    this.daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });
  }

  isToday(day: Date): boolean {
    return isSameDay(day, this.currentDay);
  }

  isHoliday(day: Date): boolean {
    return this.holidays.some(holiday => isSameDay(day, holiday));
  }

  isWeekend(day: Date): boolean {
    const dayOfWeek = getDay(day);
    return dayOfWeek === 0 || dayOfWeek === 6;
  }

  isCurrentMonth(day: Date): boolean {
    return day.getMonth() === this.currentMonth.getMonth();
  }
}
