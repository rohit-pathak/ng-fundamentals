import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const EVENTS = [
  {
    id: 1, name: 'Angular Connect', imageUrl: '/assets/images/angularconnect-shield.png', date: '9/26/2036', time: '10am', location: { address: '1 London Rd', city: 'London', country: 'England' },
    sessions: [{ "id": 0, "name": "eu consectetur", "presenter": "Rosalyn Alexander", "duration": 2, "level": "labore", "abstract": "Pariatur ipsum Lorem nisi eu velit sint. Fugiat tempor ut exercitation in. Sit magna culpa tempor ullamco duis aliqua non enim nulla sint nulla.", "voters": [] }, { "id": 1, "name": "laborum elit", "presenter": "Ray Reilly", "duration": 2, "level": "non", "abstract": "Consectetur velit do reprehenderit occaecat ipsum laboris aliquip laboris. Sit ut anim magna voluptate sint esse tempor eu laborum ex exercitation commodo. Eu eu aliqua incididunt nisi ad aliquip ipsum eu pariatur. Deserunt culpa laborum occaecat cillum veniam pariatur Lorem irure proident. Nostrud irure veniam aute adipisicing quis cupidatat veniam irure occaecat ullamco consectetur velit exercitation.", "voters": [] }, { "id": 2, "name": "aute voluptate", "presenter": "Mcdaniel Davidson", "duration": 2, "level": "aute", "abstract": "Qui sint mollit id proident cillum commodo minim proident eu officia. Ut eiusmod quis elit ipsum duis incididunt duis adipisicing aliquip mollit velit ullamco. Laborum anim cillum laboris quis do. Anim ipsum irure nostrud do commodo reprehenderit.", "voters": [] }, { "id": 3, "name": "excepteur labore", "presenter": "Jocelyn Robertson", "duration": 3, "level": "cupidatat", "abstract": "Culpa consectetur sint labore nulla laborum voluptate labore ex aliquip eiusmod cillum non commodo aliqua. Non consequat velit sunt ut dolor do laboris mollit elit. Velit excepteur voluptate qui enim aliqua do minim consequat cupidatat consequat ex irure et Lorem. Exercitation excepteur Lorem est in.", "voters": [] }, { "id": 4, "name": "dolore minim", "presenter": "Gay Preston", "duration": 1, "level": "nulla", "abstract": "Tempor nostrud voluptate amet ut ipsum id mollit mollit labore veniam excepteur incididunt quis elit. Occaecat tempor veniam velit laboris pariatur cillum occaecat. Minim consequat enim exercitation magna quis quis adipisicing veniam occaecat et in ut magna. Sunt nostrud sint commodo in pariatur laboris nisi magna.", "voters": [] }]
  },
  {
    id: 2, name: 'ng-nl', imageUrl: '/assets/images/ng-nl.png', date: '4/15/2037', time: '9am', location: { address: '127 DT ', city: 'Amsterdam', country: 'NL' },
    sessions: [{ "id": 0, "name": "consectetur ut", "presenter": "Rosetta Rowland", "duration": 1, "level": "cupidatat", "abstract": "Officia Lorem ex nisi occaecat aliquip quis irure elit fugiat in duis. Aliqua commodo esse ipsum culpa ad proident duis consequat Lorem cupidatat aliquip Lorem voluptate elit. Est nostrud pariatur exercitation cillum. Excepteur irure ad ea aliquip eu dolor cupidatat ipsum eu. Tempor anim nulla nostrud ut cillum ad ex commodo labore dolor ea deserunt sunt.", "voters": [] }, { "id": 1, "name": "eu consequat", "presenter": "Salazar Hahn", "duration": 2, "level": "ut", "abstract": "Ipsum ex non voluptate aliqua qui tempor nisi cillum anim aute voluptate duis duis anim. Nisi minim aliquip nostrud quis et. Pariatur amet non amet enim quis quis exercitation id aliqua elit reprehenderit. Eu fugiat officia dolor ut exercitation deserunt id. Sint esse quis labore officia laborum irure sit tempor cillum eiusmod pariatur deserunt tempor. Aliquip eiusmod enim est exercitation est culpa.", "voters": [] }, { "id": 2, "name": "cupidatat ipsum", "presenter": "Watkins Hinton", "duration": 3, "level": "in", "abstract": "Do mollit nisi culpa et non laborum nostrud voluptate dolore adipisicing. Culpa ea anim reprehenderit elit aute eu magna. Voluptate reprehenderit ipsum sunt esse est nisi ipsum consequat.", "voters": [] }]
  },
  {
    id: 3, name: 'ng-conf 2037', imageUrl: '/assets/images/ng-conf.png', date: '4/15/2037', time: '9am', location: { address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA' },
    sessions: [{ "id": 0, "name": "commodo irure", "presenter": "Norman Paul", "duration": 3, "level": "eiusmod", "abstract": "Dolor aliqua exercitation voluptate enim ipsum. Adipisicing aliquip adipisicing in excepteur. Lorem elit proident nisi enim do excepteur nisi minim minim.", "voters": [] }, { "id": 1, "name": "aute ea", "presenter": "Lauri Christensen", "duration": 2, "level": "commodo", "abstract": "Duis esse minim velit amet nulla est mollit excepteur Lorem. Qui sunt ipsum in exercitation excepteur laboris dolor et ad fugiat culpa ipsum. Do enim esse mollit occaecat voluptate nulla aliqua nisi dolore ex elit dolore occaecat. Cupidatat cillum veniam cupidatat incididunt veniam commodo culpa aliquip nulla amet aliqua. Minim pariatur ut sit sint sit in irure quis laboris tempor nisi pariatur dolore.", "voters": [] }, { "id": 2, "name": "anim adipisicing", "presenter": "Cleo Frye", "duration": 2, "level": "nisi", "abstract": "Eu esse proident mollit magna irure enim nostrud culpa dolor non. Excepteur ut velit consectetur voluptate duis. Laboris eiusmod cupidatat fugiat elit irure laboris do. In reprehenderit laboris eu deserunt aliquip excepteur consequat incididunt quis exercitation aliqua duis laboris. Aliquip magna ad velit sint ullamco nulla veniam laborum fugiat do dolore. Officia veniam proident aliqua dolor ullamco pariatur elit aute adipisicing ad minim eiusmod id.", "voters": [] }]
  },
  {
    id: 4, name: 'UN Angular Summit', imageUrl: '/assets/images/basic-shield.png', date: '6/10/2037', time: '8am', location: { address: 'The UN Angular Center', city: 'New York', country: 'USA' },
    sessions: [{"id":0,"name":"cupidatat officia","presenter":"Mitchell Stephens","duration":2,"level":"excepteur","abstract":"Qui enim adipisicing ut et duis tempor laborum nostrud sunt do quis non est commodo. Nulla tempor voluptate excepteur ullamco adipisicing laborum. Anim aliqua est excepteur esse. Occaecat do magna adipisicing dolore anim cupidatat aute dolore. Irure aliqua ea elit mollit ea nulla labore excepteur eu id dolor aliqua mollit et. Cillum deserunt anim deserunt ea consectetur minim aliqua proident Lorem ipsum in anim velit magna. Ea sint occaecat labore enim tempor consequat.","voters":[]},{"id":1,"name":"commodo sint","presenter":"Moran Tucker","duration":2,"level":"labore","abstract":"Enim id veniam non exercitation ex labore officia laboris amet in nostrud. Adipisicing cillum excepteur deserunt esse est non. Anim in fugiat sint in cillum minim mollit enim ut officia aliquip. Labore aute dolor cillum dolor nostrud non tempor. Incididunt velit occaecat in duis sint sit do sit Lorem ex. Ea elit do irure ut voluptate enim occaecat magna ipsum Lorem reprehenderit enim irure minim.","voters":[]}] },
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

  updateEvent(event) {
    let i = EVENTS.findIndex(e => e.id === event.id);
    EVENTS[i] = event;
  }
}
