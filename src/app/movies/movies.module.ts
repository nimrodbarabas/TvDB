import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationsComponent } from '../components/informations/informations.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SeasonsComponent } from '../components/seasons/seasons.component';
import { EpisodeComponent } from '../components/episode/episode.component';
import { CastComponent } from '../components/cast/cast.component';
import { CastItemComponent } from '../components/cast-item/cast-item.component';
import { SearchComponent } from '../components/search/search.component';
import { SearchItemComponent } from '../components/search-item/search-item.component';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  declarations: [
    InformationsComponent,
    SeasonsComponent,
    EpisodeComponent,
    CastComponent,
    CastItemComponent,
    SearchComponent,
    SearchItemComponent,
    ModalComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
