import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiServicesService {
  private showBackground: boolean = false;

  private subject = new Subject<any>();

  constructor() {}

  toggleShowBackground(): void {
    this.showBackground = true;
    this.subject.next(this.showBackground);
  }

  onToggleShow(): Observable<any> {
    return this.subject.asObservable();
  }

  toggleHideBackground(): void {
    this.showBackground = false;
    this.subject.next(this.showBackground);
  }

  onToggleHide(): Observable<any> {
    return this.subject.asObservable();
  }
}
