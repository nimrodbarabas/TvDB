
import { Injectable  } from '@angular/core';
import {catchError , retry} from 'rxjs/operators'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  private apiKey="62c6a9d191e328cb5ff5ea4f78562f74"

  constructor(private http : HttpClient) { }

  getInformations(url:string) : Observable<object>{
    return this.http.get(`https://api.themoviedb.org/3/${url}?api_key=${this.apiKey}&language=en-US`)
  }
}
