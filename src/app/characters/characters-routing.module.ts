import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './components/characters/characters.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  },
  {
    path: ':id',
    component: CharacterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
