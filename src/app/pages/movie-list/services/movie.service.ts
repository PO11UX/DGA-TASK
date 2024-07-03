import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://online-movie-database.p.rapidapi.com/title/v2/find';
  
  private http = inject(HttpClient);

  searchMovies(title: string): Observable<any> {
    const params = {
      title: title,
      limit: '20',
      paginationKey: '0',
      sortArg: 'moviemeter,asc'
    };
    return this.http.get(this.apiUrl, { params: params });
  }
}
