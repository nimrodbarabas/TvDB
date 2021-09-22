import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { RowComponent } from './components/row/row.component';
import { RowItemsComponent } from './components/row-items/row-items.component';
import { MoviesModule } from './movies/movies.module';
import { NavComponent } from './components/nav/nav.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BannerComponent,
    RowComponent,
    RowItemsComponent,
    NavComponent,
  

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MoviesModule,
    AppRoutingModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
