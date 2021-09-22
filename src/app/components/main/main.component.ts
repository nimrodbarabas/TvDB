import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
import  Request  from '../../../app/requests';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  trending:string = Request.fetchTrending
  netflix:string = Request.fetchNetflixOriginals
  topRated:string = Request.fetchTopRated
  action:string = Request.fetchActionMovies
  comedy:string = Request.fetchComedyMovies
  horror:string = Request.fetchHorrorMovies
  romance:string = Request.fetchRomanceMovies
  documentaries:string =Request.fetchDocumentariesMovies
  large : string = '200px'
  small : string = '150px'

  constructor() { }

  ngOnInit(): void {
   
  }

}
