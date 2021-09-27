import { Component, OnInit, Input } from '@angular/core';
import { Search } from 'src/app/interfaces/Search';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
})
export class SearchItemComponent implements OnInit {
  baseUrl: string = 'https://image.tmdb.org/t/p/original';
  @Input() item!: Search;
  @Input() type!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    let link = [`/${this.type}`, this.item.id];
    this.router.navigate(link);
  }
}
