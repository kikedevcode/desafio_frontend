import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Film } from './../../models/film/film.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(
    private http: HttpClient
    ) { }

  // tslint:disable-next-line: typedef
  getAllFilms()
  {
    return this.http.get<Film>(`${environment.url_api}films`);
  }

  // tslint:disable-next-line: typedef
  getFilm(id: any)
  {
    return this.http.get<Film>(`${environment.url_api}films/${id}`);
  }
}
