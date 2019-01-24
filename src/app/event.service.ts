import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Event, Session } from './event';

const OPTIONS = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('/api/events')
      .pipe(catchError(this.handleError<Event[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<Event> {
    return this.http.get<Event>('/api/events/' + id)
      .pipe(catchError(this.handleError<Event>('getEvent')));
  }

  saveEvent(event): Observable<Event> {
    return this.http.post<Event>('/api/events', event, OPTIONS)
      .pipe(catchError(this.handleError<Event>('saveEvent')));
  }

  searchSessions(term: string): Observable<Session[]> {
    return this.http.get<Session[]>('/api/sessions/search?search=' + term)
      .pipe(catchError(this.handleError<Session[]>('searchSessions', [])));
  }

  addVoter(eventId: number, user: string, session: Session) {
    session.voters.push(user);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${user}`;
    this.http.post(url, {}, OPTIONS)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe(); // we don't care to be notified so we subscribe here itself
  }

  removeVoter(eventId: number, user: string, session: Session) {
    session.voters = session.voters.filter(v => v !== user);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${user}`;
    this.http.delete(url)
      .pipe(catchError(this.handleError('deleteVoter')))
      .subscribe();
  }

  userHasVoted(user: string, session: Session) {
    return session.voters.some(v => v === user);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
