import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
import { Subscription } from 'rxjs';
import { Banner } from 'src/app/interfaces/Banner';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  subscription !: Subscription;
  banner !: any
  baseUrl  = 'https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg';

  constructor(private bannerService : BannerService) { }

  ngOnInit(): void {
    this.bannerService.getMovies().subscribe((res:any) =>{ 
     
      this.banner=res.results[0] 
   })
    
  }

}
