import { Component, OnInit, Input } from '@angular/core';
import { Search } from 'src/app/interfaces/Search';
import { Router } from '@angular/router';
import { UiServicesService } from '../../services/ui-services.service';
import { UiInputService } from 'src/app/services/ui-input.service';
@Component({
  selector: 'app-nav-search-item',
  templateUrl: './nav-search-item.component.html',
  styleUrls: ['./nav-search-item.component.css'],
})
export class NavSearchItemComponent implements OnInit {
  baseUrl: string = 'https://image.tmdb.org/t/p/original';
  @Input() item!: Search;

  constructor(
    private router: Router,
    private uiService: UiServicesService,
    private uiInputService: UiInputService
  ) {}

  ngOnInit(): void {}
  navigate() {
    this.uiService.toggleHideBackground();
    this.uiInputService.onToggleHideNav();
    let link = [`/${this.item.media_type}`, this.item.id];
    this.router.navigate(link);
  }
}
