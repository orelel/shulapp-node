import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
