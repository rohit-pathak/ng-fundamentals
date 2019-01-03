import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styles: [`
    h4:hover {
        cursor: pointer;
    }
  `]
})
export class CollapsibleWellComponent implements OnInit {
  collapse: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
