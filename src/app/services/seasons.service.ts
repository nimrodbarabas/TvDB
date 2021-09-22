import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SeasonsService {
  private apiKey="62c6a9d191e328cb5ff5ea4f78562f74"

  constructor(private http : HttpClient) { }

  getSeasonData(url:string , number : number) {
    return this.http.get<any>(`https://api.themoviedb.org/3${url}/season/${number}?api_key=62c6a9d191e328cb5ff5ea4f78562f74`)
  }
}
