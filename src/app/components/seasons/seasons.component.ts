import { Component, OnInit ,Input } from '@angular/core';
import { Season } from 'src/app/interfaces/Season';
import { SeasonsService } from 'src/app/services/seasons.service';
import { Router } from '@angular/router';
import { Episodes } from 'src/app/interfaces/Episodes';



@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  @Input() season !:Season
  episodes !: Episodes[] 
  showEpisodes : boolean = false

  constructor(
    private seasonsService : SeasonsService,
    private router : Router
    ) { }

  ngOnInit(): void {
    console.log(this.episodes)
    
  }
  toggleShowEpisodes (){
    this.showEpisodes = !this.showEpisodes
    if(this.episodes===undefined){
      this.seasonsService.getSeasonData(this.router.url, this.season.season_number).subscribe((res)=>{
        this.episodes = res.episodes
        console.log("ok")
      })
    }
      
    
    
  }

}
