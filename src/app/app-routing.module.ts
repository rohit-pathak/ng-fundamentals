import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventRouteActivatorService } from './event-route-activator.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventListResolverService } from './event-list-resolver.service';

// An Angular best practice is to load and configure the router in a separate, top-level module
// that is dedicated to routing and imported by the root AppModule.
// ng generate module app-routing --flat --module=app

// Note that this file was generated by default

const routes: Routes = [
  { path: 'events', component: EventListComponent, resolve: {events: EventListResolverService} },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: [EventRouteActivatorService] },
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService] },
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
