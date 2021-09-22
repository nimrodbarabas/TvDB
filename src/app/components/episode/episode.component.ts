import { Component, OnInit , Input} from '@angular/core';
import { Episodes } from 'src/app/interfaces/Episodes';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  @Input() episode !: Episodes
  baseUrl  :string = "https://image.tmdb.org/t/p/original"

  constructor() { }

  ngOnInit(): void {
  }

}
