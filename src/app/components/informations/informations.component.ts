import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router  , ParamMap} from '@angular/router';
import { RowService } from 'src/app/services/row.service';
import { InformationService } from 'src/app/services/information.service';
import { Season } from 'src/app/interfaces/Season';

import { Subscription } from 'rxjs';


@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {
  baseUrl  :string = "https://image.tmdb.org/t/p/original"
  informations !:any;
  genre :string[] = []
  seasons !: Season[] 

  showOverview : boolean = false
  
  constructor(
    private router: Router,
    private informationService : InformationService,
   
    )
     { }

  ngOnInit() {

     
      this.informationService.getInformations(this.router.url).subscribe((res:any)=>{
        this.seasons=res.seasons
      res.genres.map((el:any)=>this.genre.push(el.name))
      this.informations = res
      console.log(this.seasons)
    })
  }
    toggleShowOverview(){
     
     this.showOverview = !this.showOverview
    }

  

}
