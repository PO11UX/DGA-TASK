import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'WorkExperience',
    loadComponent: () =>
      import('./pages/work-experience/work-experience.component').then((m) => m.WorkExperienceComponent),
    providers: [],
  },
  {
    path: 'MovieList',
    loadComponent: () =>
      import('./pages/movie-list/movie-list.component').then((m) => m.MovieListComponent),
    providers: [],
  },
  {
    path: 'DateFormat',
    loadComponent: () =>
      import('./pages/date-format/date-format.component').then((m) => m.DateFormatComponent),
    providers: [],
  },
  {
    path: 'Calendar',
    loadComponent: () =>
      import('./pages/calendar/calendar.component').then((m) => m.CalendarComponent),
    providers: [],
  },
  {
    path: 'Search',
    loadComponent: () =>
      import('./pages/search/search.component').then((m) => m.SearchComponent),
    providers: [],
  },
  { path: '', redirectTo: 'WorkExperience', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/work-experience/work-experience.component').then(
        (m) => m.WorkExperienceComponent
      ),
  },
];
