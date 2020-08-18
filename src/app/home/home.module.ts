import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FilmListComponent } from './components/film-list/film-list.component';


@NgModule({
  declarations: [HomeComponent, FilmListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AgGridModule
  ]
})
export class HomeModule { }
