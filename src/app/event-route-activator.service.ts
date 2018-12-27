import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(snapshot: ActivatedRouteSnapshot) {
    let exists = this.eventService.getEvents().some(e => e.id === +snapshot.params['id']);
    if (!exists) this.router.navigate(['/not-found']);

    return exists;
  }
}
