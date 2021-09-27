import { Component, OnInit , Input ,Output , EventEmitter} from '@angular/core';
import { Episodes } from 'src/app/interfaces/Episodes';
import { ModalService } from 'src/app/services/modal.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  @Output() onToggleModal:EventEmitter<any> = new EventEmitter();
  @Input() episode !: Episodes
  baseUrl  :string = "https://image.tmdb.org/t/p/original"
  showModal : boolean = false
  subscription !: Subscription
  constructor(private modalService : ModalService) { }

  ngOnInit(): void {
    this.subscription = this.modalService.onToggle().subscribe((value) => this.showModal = value)
  }

 onClick(){

  
    this.onToggleModal.emit()
  }

  closeModal(){
   
    this.onToggleModal.emit()
  }

}
