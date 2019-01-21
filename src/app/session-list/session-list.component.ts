import { AuthService } from './../user/auth.service';
import { Session } from './../event';
import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { EventEmitter } from 'protractor';
import { EventService } from '../event.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: Session[];
  @Input() levelFilter: string;
  @Input() sortField: string;
  @Input() eventId: number;
  visibleSessions: Session[];


  constructor(private auth: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.sessions) {
      this.visibleSessions = this.levelFilter === 'all' 
        ? this.sessions.slice(0)
        : this.sessions.filter(s => s.level.toLocaleLowerCase() === this.levelFilter.toLocaleLowerCase());
      this.visibleSessions.sort(this.getCompareFunction())
    }
  }

  getCompareFunction(): (a: Session, b: Session) => number {
    if (this.sortField === 'votes') return (a, b) => b.voters.length - a.voters.length;
    else return (a, b) => a.name.localeCompare(b.name);
  }

  toggleVote(session) {
    if (this.userHasVoted(session)) {
      this.eventService.removeVoter(this.eventId, this.auth.currentUser.userName, session);
    } else {
      this.eventService.addVoter(this.eventId, this.auth.currentUser.userName, session);
    }
    // this.visibleSessions.sort(this.getCompareFunction());
  }

  userHasVoted(session): boolean {
    return this.eventService.userHasVoted(this.auth.currentUser.userName, session);
  }

}
