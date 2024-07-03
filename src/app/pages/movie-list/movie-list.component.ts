import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, FormsModule, CommonModule, MatInputModule, MatButtonModule,],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent {
  movies$!: Observable<any[]>;
  searchTerm: string = '';
  movieService = inject(MovieService)

  search(): void {
    this.movies$ = this.movieService.searchMovies(this.searchTerm);

  }
}
