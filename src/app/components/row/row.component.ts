import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Row, RowResponse } from 'src/app/interfaces/Row';
import { TvDBService } from 'src/app/services/tv-db.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent implements OnInit {
  @Input() title!: string;
  @Input() url!: string;
  @Input() size!: string;
  @Input() type: string = '';
  rowItems: Row[] = [];
  subscription!: Subscription;

  constructor(private tvDbService: TvDBService) {}

  ngOnInit(): void {
    this.tvDbService.getDataRow(this.url).subscribe((res: RowResponse) => {
      this.rowItems = res.results;
    });
  }
}
