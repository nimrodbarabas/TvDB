import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiInputService {
  private showNav : boolean = false
  private subject = new Subject<any>();
  
  constructor() { }
  toggleShowNav():void{
    this.showNav = true ;
    this.subject.next(this.showNav)
  }

  onToggleShowNav():Observable<any>{
    return this.subject.asObservable()
  }

  toggleHideNav():void{
    this.showNav = false;
    this.subject.next(this.showNav)
  }

  onToggleHideNav():Observable<any>{
    return this.subject.asObservable();
  }
}
