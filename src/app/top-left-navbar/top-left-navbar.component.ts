import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-left-navbar',
  templateUrl: './top-left-navbar.component.html',
  styleUrls: ['./top-left-navbar.component.scss']

})
export class TopLeftNavbarComponent implements OnInit {
  items = [new TopLeftNavbarItem('Inbox','/inbox','mdi-email-outline')];
  constructor() { }

  ngOnInit() {  
  }

}

class TopLeftNavbarItem{
  private activeClass;
  constructor(private name:string, private href:string,
    private className:string, private isActive:boolean = false){
      this.activeClass = isActive ? 'active' : '';
  }
}
