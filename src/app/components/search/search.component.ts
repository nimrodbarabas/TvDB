import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Search, SearchResponse } from 'src/app/interfaces/Search';
import { Router } from '@angular/router';
import { Genre, GenreListRespone } from 'src/app/interfaces/genre';

import { TvDBService } from 'src/app/services/tv-db.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  response!: SearchResponse;
  search: Search[] = [];
  query: string = '';
  type!: string;
  currentPage: string = '1';
  genre!: Genre;

  constructor(
    private route: ActivatedRoute,
    private tvDbService: TvDBService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: Params) => {
      this.tvDbService
        .getSearchData(
          params.params.name,
          params.params.category,
          params.params.genre,
          params.params.page
        )
        .subscribe((res: SearchResponse) => {
          this.response = res;
          this.search = res.results;
          this.query = params.params.name;
          this.type = params.params.category;
          if (params.params.page) {
            this.currentPage = params.params.page;
          }

          this.redirect(this.currentPage, this.response.total_pages);
        });
      if (params.params.genre) {
        this.tvDbService
          .getGenresList(params.params.category)
          .subscribe((res: GenreListRespone) => {
            let genreFound = res.genres.find(
              (genres) => genres.id == params.params.genre
            );
            if (genreFound) {
              this.genre = genreFound;
            }
          });
      }
    });
  }

  onClickBefore() {
    this.navigateBackwards();
  }

  onClickNext() {
    this.navigateForward();
  }

  navigateForward(): void {
    if (Number(this.currentPage) < this.response.total_pages) {
      this.router.navigate(['/search'], {
        queryParams: {
          name: this.query,
          category: this.type,
          genre: this.genre.id,
          page: Number(this.currentPage) + 1,
        },
      });
    }
  }

  navigateBackwards(): void {
    if (Number(this.currentPage) > 1) {
      this.router.navigate(['/search'], {
        queryParams: {
          name: this.query,
          category: this.type,
          genre: this.genre.id,
          page: Number(this.currentPage) - 1,
        },
      });
    }
  }
  redirect(currentPage: string, totalPage: number) {
    if (Number(currentPage) > totalPage) {
      this.router.navigate(['/search'], {
        queryParams: {
          name: this.query,
          category: this.type,
          page: 1,
        },
      });
    }
  }
}
