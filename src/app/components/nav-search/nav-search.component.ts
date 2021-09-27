import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Search, SearchResponse } from 'src/app/interfaces/Search';
import { TvDBService } from 'src/app/services/tv-db.service';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css'],
})
export class NavSearchComponent implements OnInit {
  @Input() text!: string;
  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  searchItems: Search[] = [];
  response!: SearchResponse;

  constructor(private tvDbService: TvDBService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.getMovies();
  }

  search(type: string) {
    this.onSearch.emit(type);
  }

  getMovies() {
    this.tvDbService
      .getSearchData(this.text, 'multi')
      .subscribe((res: SearchResponse) => {
        this.searchItems = res.results
          .filter((el) => el.media_type != 'person')
          .slice(0, 3);
      });
  }
}
