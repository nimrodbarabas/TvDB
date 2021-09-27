import { Component, OnInit ,HostListener ,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UiServicesService } from 'src/app/services/ui-services.service';
import { UiInputService } from 'src/app/services/ui-input.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  text !: string
  backgroundColorToggle : boolean = false;
  showNav : boolean = false
  subscription !: Subscription
  myStyle : string = "none"
  

  @HostListener('window:scroll') onScroll(e: Event): void { 
    if (scrollY > 100) {
      this.toggleShowBackground()
    } else {
      this.toggleHideBackground()
    }
}
  constructor( 
    private host : ElementRef,
    private router : Router,
    private uiServices : UiServicesService,
    private uiInputServices : UiInputService
    ) { 
      this.subscription = this.uiServices.onToggleShow().subscribe(value => { 
        this.backgroundColorToggle = value}
        )
       this.subscription=this.uiServices.onToggleHide().subscribe(value => {
        this.backgroundColorToggle = value
       }) 
      this.subscription = this.uiInputServices.onToggleShowNav().subscribe(value =>{
        this.showNav = value;
        }) 
       this.subscription = this.uiInputServices.onToggleHideNav().subscribe(value => {
         this.showNav = value;
       }) 
    }

  ngOnInit(): void {
    this.text=""
    this.showNav= false

  }
  ngAfterViewInit() {
    this.host.nativeElement.focus();
  }

  search(category : string){
   
      this.router.navigate(['/search'] , {queryParams : {
        name : this.text,
        category : category,
        page : '1'
      }})
      this.text = ""
      this.toggleHideBackground();
    
   
  }

  toggleShowBackground(){
   
    this.uiServices.toggleShowBackground();
  }

  toggleHideBackground(){
      this.uiServices.toggleHideBackground();
      this.uiInputServices.toggleHideNav();
  }

  toggleShowNav(){
      this.uiInputServices.toggleShowNav();
      this.uiServices.toggleShowBackground()
  }

}
