import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharactersComponent } from './components/characters/characters.component';

import { JoinPipe } from './../shared/pipes/join/join.pipe';


@NgModule({
  declarations: [CharacterListComponent, CharactersComponent, JoinPipe],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    AgGridModule
  ]
})
export class CharactersModule { }
