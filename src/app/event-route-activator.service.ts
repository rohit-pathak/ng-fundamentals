import { CreateEventComponent } from './create-event/create-event.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanDeactivate } from '@angular/router';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate, CanDeactivate<CreateEventComponent> {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(snapshot: ActivatedRouteSnapshot) {
    let exists = this.eventService.getEvents().some(e => e.id === +snapshot.params['id']);
    if (!exists) this.router.navigate(['/not-found']);

    return exists;
  }

  canDeactivate(component: CreateEventComponent) {
    if (component.isDirty) {
      return window.confirm("You have not saved this event, do you really want to continue?");
    }
    return true;
  }
}
