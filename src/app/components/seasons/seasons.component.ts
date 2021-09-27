import { Component, OnInit, Input } from '@angular/core';
import { Season } from 'src/app/interfaces/Season';
import { Router } from '@angular/router';
import { Episodes } from 'src/app/interfaces/Episodes';
import { ModalService } from 'src/app/services/modal.service';
import { TvDBService } from 'src/app/services/tv-db.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css'],
})
export class SeasonsComponent implements OnInit {
  @Input() season!: Season;
  episodes!: Episodes[];
  showEpisodes: boolean = false;

  constructor(
    private router: Router,
    private modalService: ModalService,
    private tvDBService: TvDBService
  ) {}

  ngOnInit(): void {}
  toggleShowEpisodes() {
    this.showEpisodes = !this.showEpisodes;
    if (this.episodes === undefined) {
      this.tvDBService
        .getSeasonData(this.router.url, this.season.season_number)
        .subscribe((res) => {
          this.episodes = res.episodes;
        });
    }
  }

  onToggleModal() {
    this.modalService.toggleShowModal();
  }
}
