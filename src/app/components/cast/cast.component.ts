import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cast, CastResponse } from 'src/app/interfaces/Cast';
import { TvDBService } from 'src/app/services/tv-db.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css'],
})
export class CastComponent implements OnInit {
  cast!: Cast[];
  response!: CastResponse;
  constructor(private router: Router, private tvDbService: TvDBService) {}

  ngOnInit(): void {
    this.tvDbService
      .getDataCast(this.router.url)
      .subscribe((res: CastResponse) => {
        this.response = res;
        this.cast = res.cast;
      });
  }
}
