import { Component, OnInit ,Input } from '@angular/core';
import { Episodes } from 'src/app/interfaces/Episodes';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() episode !:Episodes
  baseUrl  :string = "https://image.tmdb.org/t/p/original"
  constructor() { }

  ngOnInit(): void {
  }

}
