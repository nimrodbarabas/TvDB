import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CastResponse } from 'src/app/interfaces/Cast';
import { GenreListRespone } from '../interfaces/genre';
import { SearchResponse } from '../interfaces/Search';
import { BannerResponse } from '../interfaces/Banner';
@Injectable({
  providedIn: 'root',
})
export class TvDBService {
  private api_key = environment.API_KEY;
  private base_url = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  //Banner Data

  getBannerMovies(): Observable<BannerResponse> {
    return this.http.get<BannerResponse>(
      `${this.base_url}/trending/all/week?api_key=${this.api_key}&with_networks=213`
    );
  }

  //Row Data

  getDataRow(rowType: string): Observable<BannerResponse> {
    return this.http.get<BannerResponse>(rowType);
  }

  //Cast Data

  getDataCast(url: string): Observable<CastResponse> {
    return this.http.get<CastResponse>(
      `${this.base_url}/${url}/credits?api_key=${this.api_key}&language=en-US`
    );
  }

  //Genre Data

  getGenresList(type: string): Observable<GenreListRespone> {
    return this.http.get<GenreListRespone>(
      `${this.base_url}/genre/${type}/list?api_key=${this.api_key}&language=en-US`
    );
  }

  //Movie/Tv Information-Data

  getInformations(url: string): Observable<any> {
    return this.http.get(
      `${this.base_url}/${url}?api_key=${this.api_key}&language=en-US`
    );
  }

  //Search

  getSearchData(
    query: string,
    type: string,
    genre?: string,
    page: string = '1'
  ): Observable<SearchResponse> {
    if (!genre) {
      return this.http.get<SearchResponse>(
        `${this.base_url}/search/${type}?api_key=${this.api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`
      );
    }
    return this.http.get<SearchResponse>(
      `${this.base_url}/discover/${type}?api_key=${this.api_key}&with_genres=${genre}&page=${page}&include_adult=false`
    );
  }

  //Tv Season Data

  getSeasonData(url: string, number: number) {
    return this.http.get<any>(
      `${this.base_url}${url}/season/${number}?api_key=${this.api_key}`
    );
  }
}
