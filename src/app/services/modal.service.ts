import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Season } from '../interfaces/Season';
import { Episodes } from '../interfaces/Episodes';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalShow: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleShowModal(): void {
    (this.modalShow = !this.modalShow), this.subject.next(this.modalShow);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
