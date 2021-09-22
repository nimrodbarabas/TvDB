import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationsComponent } from '../components/informations/informations.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SeasonsComponent } from '../components/seasons/seasons.component';
import { EpisodeComponent } from '../components/episode/episode.component';


@NgModule({
  declarations: [
    InformationsComponent,
    SeasonsComponent,
    EpisodeComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
