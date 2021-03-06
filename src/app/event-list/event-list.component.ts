import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: any[];

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this data in the route comes from the resolver
    this.events = this.route.snapshot.data['events'];
  }

}
