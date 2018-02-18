import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss']
})
export class NavDropdownComponent implements OnInit {
  @Input() count: number;
  @Input() title: string;
  @Input() items: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
