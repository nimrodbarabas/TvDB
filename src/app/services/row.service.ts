import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Row } from 'src/app/interfaces/Row'

@Injectable({
  providedIn: 'root'
})
export class RowService {
  private apiKey="62c6a9d191e328cb5ff5ea4f78562f74"


  constructor(private http : HttpClient) { }

  getDataRow(rowType:string) : Observable<Row>{
    return this.http.get<Row>(rowType)
 
  }

  
}
