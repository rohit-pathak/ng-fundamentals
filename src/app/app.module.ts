import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { DurationPipe } from './duration.pipe';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { JQ_TOKEN } from './jquery.service';
import { LocationValidatorDirective } from './location-validator.directive';
import { ModalTriggerDirective } from './modal-trigger.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { Toastr, TOASTR_TOKEN } from './toastr.service';
import { UpvoteComponent } from './upvote/upvote.component';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent,
    NotFoundComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // Note that you don't need to explicitly include service here as the {providedIn: 'root'} option
  // of the @Injectable() decorator takes care of that (Angular 6+)
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
