import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Character } from './../../models/character/character.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
    ) { }

  // tslint:disable-next-line: typedef
  getAllCharacters() {
    return this.http.get<Character>(`${environment.url_api}people`);
  }

  // tslint:disable-next-line: typedef
  getCharacter(url: any) {
    return this.http.get<Character>(`${url}`);
  }
}
