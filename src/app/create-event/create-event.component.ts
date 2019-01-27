import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Observable } from 'rxjs';
import { Event } from '../event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty = true;
  name: string;
  date: string;
  time: string;
  price: number;
  address: string;
  city: string;
  country: string;
  onlineUrl: string;
  imageUrl: string;

  constructor(private eventService: EventService, private router: Router) { }

  saveEvent(formData) {
    console.log(formData);
    this.eventService.saveEvent(formData).subscribe((event: Event) => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  ngOnInit() {
  }

}
