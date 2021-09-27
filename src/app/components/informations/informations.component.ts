import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Season } from 'src/app/interfaces/Season';
import { ModalService } from 'src/app/services/modal.service';
import { Subscription } from 'rxjs';
import { Episodes } from 'src/app/interfaces/Episodes';
import { Genre } from 'src/app/interfaces/genre';
import { TvDBService } from 'src/app/services/tv-db.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css'],
})
export class InformationsComponent implements OnInit {
  baseUrl: string = 'https://image.tmdb.org/t/p/original';
  informations: any = undefined;
  genres: Genre[] = [];
  seasons!: Season[];
  subscription!: Subscription;
  modalShow: boolean = false;
  showOverview: boolean = false;
  modalContent!: Episodes;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService,
    private tvDbService: TvDBService
  ) {}

  ngOnInit() {
    this.tvDbService.getInformations(this.router.url).subscribe((res: any) => {
      this.seasons = res.seasons;

      this.genres = res.genres;
      this.informations = res;
    });
    this.subscription = this.modalService
      .onToggle()
      .subscribe((value) => (this.modalShow = value));
  }
  toggleShowOverview() {
    this.showOverview = !this.showOverview;
  }

  selectGenre(genre: Genre) {
    let type = this.router.isActive('/movie', false) ? 'movie' : 'tv';
    this.router.navigate(['/search'], {
      queryParams: {
        genre: genre.id,
        category: type,
      },
    });
  }
}
