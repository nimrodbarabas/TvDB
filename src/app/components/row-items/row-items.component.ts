import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-row-items',
  templateUrl: './row-items.component.html',
  styleUrls: ['./row-items.component.css'],
})
export class RowItemsComponent implements OnInit {
  @Input() rowItem!: any;
  @Input() size!: string;
  @Input() type!: string;

  baseUrl: string = 'https://image.tmdb.org/t/p/original';
  imageUrl: string = `${this.baseUrl}`;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigate() {
    if (this.rowItem.media_type) {
      let link = [`/${this.rowItem.media_type}`, this.rowItem.id];
      this.router.navigate(link);
    } else {
      let link = [`/${this.type}`, this.rowItem.id];
      this.router.navigate(link);
    }
  }
}
