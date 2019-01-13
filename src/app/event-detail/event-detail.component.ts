import { Session } from './../event';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: any;
  addMode: boolean = false;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    // The reason we subscribe to the params observable is that we want to know when the
    // url changed when we are in the event details component itself (e.g. /events/1 to /events/2).
    // If we didn't subscribe to this observable and just got the event id from the snapshot,
    // we wouldn't see the event detail page update as its url (i.e. event id param) changed.
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id']);
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    });
  }

  saveSession(session: Session) {
    const nextId = Math.max(...this.event.sessions.map(s => s.id)) + 1;
    session.id = nextId;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

}
