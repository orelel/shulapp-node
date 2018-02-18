import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-right-navbar',
  templateUrl: './top-right-navbar.component.html',
  styleUrls: ['./top-right-navbar.component.scss']
})
export class TopRightNavbarComponent implements OnInit {
  
  notification = {
    count: 6,
    title: 'This is notification title',
    items: [{
      pic: 'images/faces/face4.jpg',
      username: 'orel',
      time: '1 day ago',
      title: 'test title'
  
    },
    {
      pic: 'images/faces/face4.jpg',
      username: 'orel2',
      time: '2 days ago',
      title: 'test title 2'
  
    }]
  }
 
  constructor() { }

  ngOnInit() {
  }

}
