import { Component, OnInit } from '@angular/core';

import { Film } from './../../../core/models/film/film.model';

import { FilmsService } from './../../../core/services/films/films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

public columnDefs = [
    {headerName: 'Title', field: 'title' },
    {headerName: 'Episode N°', field: 'episode_id' },
    {headerName: 'Director', field: 'director'}
];

public films;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.getFilmsList();
  }

  getFilmsList() {
    this.filmsService.getAllFilms()
    .subscribe(films => {
      this.films = films.results;
      console.log(this.films);
    });
  }

}
