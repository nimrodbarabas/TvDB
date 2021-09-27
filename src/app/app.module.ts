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
import { FormsModule } from '@angular/forms';
import { NavSearchComponent } from './components/nav-search/nav-search.component';
import { NavSearchItemComponent } from './components/nav-search-item/nav-search-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BannerComponent,
    RowComponent,
    RowItemsComponent,
    NavComponent,
    NavSearchComponent,
    NavSearchItemComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MoviesModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
