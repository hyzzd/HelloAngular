import { Injectable } from '@angular/core';
import { Genre } from '../shared/models/genre';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private apiService: ApiService) { }

  getAllGenres() : Observable<Genre[]> {
    return this.apiService.getAll('genres');
  }
}
