import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Banner, BannerResponse } from 'src/app/interfaces/Banner';
import { TvDBService } from 'src/app/services/tv-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  subscription!: Subscription;
  currentBanner!: Banner[];
  baseUrl: string = 'https://image.tmdb.org/t/p/original/';
  arrayLength: number = 0;
  index: number = 0;
  constructor(private tvDbService: TvDBService, private router: Router) {}

  ngOnInit(): void {
    this.tvDbService.getBannerMovies().subscribe((res: BannerResponse) => {
      this.currentBanner = res.results;
      this.arrayLength = res.results.length;
    });
    setInterval(() => {
      if (this.index === this.arrayLength) {
        this.index = 0;
      } else {
        this.index++;
      }
    }, 5000);
  }

  clicked() {
    let link = [
      `/${this.currentBanner[this.index].media_type}`,
      this.currentBanner[this.index].id,
    ];
    this.router.navigate(link);
  }
}
