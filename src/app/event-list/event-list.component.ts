import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: any[];

  constructor() { }

  ngOnInit() {
    this.events = [
      {name: 'NgConf', date: '1/2/2019', location: {city: 'Atlanta'}},
      {name: 'NFJS', date: '4/2/2019', location: {city: 'New York'}},
      {name: 'Google IO', date: '4/16/2019', location: {city: 'San Francisco'}}
    ]
  }

}
