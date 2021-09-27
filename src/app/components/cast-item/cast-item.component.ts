import { Component, OnInit, Input } from '@angular/core';
import { Cast } from 'src/app/interfaces/Cast';

@Component({
  selector: 'app-cast-item',
  templateUrl: './cast-item.component.html',
  styleUrls: ['./cast-item.component.css'],
})
export class CastItemComponent implements OnInit {
  baseUrl: string = 'https://image.tmdb.org/t/p/original';
  @Input() cast!: Cast;

  constructor() {}

  ngOnInit(): void {}
}
