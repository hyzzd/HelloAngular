import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected httpClient: HttpClient) { }

  getAll(path: string): Observable<any[]> {
    return this.httpClient.get(`${environment.apiUrl}${path}`)
      .pipe(
        map(
          response => response as any[]
        )
      );
  }

  getById(path: string, Id: number): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}${path}/${Id}`)
      .pipe(
        map(
          response => response as any
        )
      )
  }

  //create

  //update

  //delete
}
