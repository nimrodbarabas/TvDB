
import { Injectable  } from '@angular/core';
import { Banner } from '../interfaces/Banner';
import {HttpClient} from '@angular/common/http'
import Requests  from "../../app/requests"



@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private apiKey="62c6a9d191e328cb5ff5ea4f78562f74"


  
  constructor(private http : HttpClient) { }

  getMovies(){
    return this.http.get<any>(`https://api.themoviedb.org/3//trending/all/week?api_key=${this.apiKey}&with_networks=213`)
    
  }

  getDataRow(rowType:string){
    return this.http.get<any>(rowType)
 
  }
}
