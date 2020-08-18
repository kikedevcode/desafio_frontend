import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin } from 'rxjs';
import { FilmsService } from './../../../core/services/films/films.service';
import { CharactersService } from './../../../core/services/characters/characters.service';
import { Film } from './../../../core/models/film/film.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  film: Film;

  public characters;

  public columnDefs = [
    {headerName: 'Name', field: 'name', filter: true },
    {headerName: 'Hair Color', field: 'hair_color', filter: true },
    {headerName: 'Gender', field: 'gender', filter: true},
    {headerName: 'Height', field: 'height', filter: true}
  ];

/*   public page: number; */

  constructor(
    private route: ActivatedRoute,
    private filmsService: FilmsService,
    private charactersService: CharactersService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params)
      const id = params.id;
      console.log(id);
      this.fetchFilm(id);
    });
  }

  // tslint:disable-next-line: typedef
  fetchFilm(id: any) {
    this.filmsService.getFilm(id)
    .subscribe(film => {
      this.film = film.characters;
      this.getCharactersData(this.film);
      /* console.log(film.characters); */
    });
  }

  // tslint:disable-next-line: typedef
  getCharactersData(url: any) {
    let serviceList: any = [];

    url.forEach(url => {
      serviceList.push(this.charactersService.getCharacter(url));
      /* console.log(`Hello ${url}`); */
    });

    const multiCall = forkJoin(serviceList);

    multiCall.subscribe(characters => {
      console.log(characters);
      this.characters = characters;
    });
  }

}
