import { Component, OnInit ,Input } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
import { Subscription } from 'rxjs';
import { Row } from 'src/app/interfaces/Row'

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() title!:string
  @Input() url!:string
  @Input() size !: string
  @Input() type : string = ""
  rowItems  !: Row 
  subscription !: Subscription;
  
 

  constructor(private bannerService : BannerService) { }

  ngOnInit(): void {
    console.log("type" ,this.type)
    this.bannerService.getDataRow(this.url).subscribe((res)=> {
      this.rowItems=res

      })
  }

}
