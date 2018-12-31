import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const EVENTS = [
  { id: 1, name: 'Angular Connect', imageUrl: '/assets/images/angularconnect-shield.png', date: '9/26/2036', time: '10am', location: { address: '1 London Rd', city: 'London', country: 'England' } },
  { id: 2, name: 'ng-nl', imageUrl: '/assets/images/ng-nl.png', date: '4/15/2037', time: '9am', location: { address: '127 DT ', city: 'Amsterdam', country: 'NL' } },
  { id: 3, name: 'ng-conf 2037', imageUrl: '/assets/images/ng-conf.png', date: '4/15/2037', time: '9am', location: { address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA' } },
  { id: 4, name: 'UN Angular Summit', imageUrl: '/assets/images/basic-shield.png', date: '6/10/2037', time: '8am', location: { address: 'The UN Angular Center', city: 'New York', country: 'USA' } },
];

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents() {
    let subject = new Subject<any[]>();
    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 500);
    return subject;
  }

  getEvent(id: number): any {
    return EVENTS.find(e => e.id === id);
  }

  saveEvent(event) {
    event.id = 999;
    event.sessions = [];
    EVENTS.push(event);
  }
}
