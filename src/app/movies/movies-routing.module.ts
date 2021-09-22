import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationsComponent } from '../components/informations/informations.component';

const routes: Routes = [
  {path : 'movie' , redirectTo: '', pathMatch:'full'},
  {path : 'movie/:id' , component:InformationsComponent},
  {path : 'tv' , redirectTo: '' , pathMatch : 'full'},
  {path : 'tv/:id' , component : InformationsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
