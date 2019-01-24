import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';
import { map } from 'rxjs/operators';

/*
We use a resolver to do some work before "resolving a route". In other words,
before rendering a component corresponding to a route, if need to fetch some data or do
some other work so that the component renders only after that work is done, we can use a
resolver.
*/
@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve() {
    return this.eventService.getEvents();
  }
}
