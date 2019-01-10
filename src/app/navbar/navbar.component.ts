import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';
import { Session } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm: string;
  foundSessions: Session[];

  constructor(private authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(term) {
    this.eventService.searchSessions(term).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(sessions);
    })
  }

}
