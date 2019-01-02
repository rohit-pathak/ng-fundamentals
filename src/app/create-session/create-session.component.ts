import { Session } from './../event';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { restrictedWords } from '../custom-validators';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() save = new EventEmitter()
  @Output() cancel = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required, 
      Validators.maxLength(400), 
      restrictedWords(['foo', 'bar'])]);
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formData) {
    let session: Session = {
      id: undefined,
      name: formData.name,
      presenter: formData.presenter,
      duration: formData.duration,
      level: formData.level,
      abstract: formData.abstract,
      voters: []
    };
    this.save.emit(session);
  }

  cancelCreate() {
    this.cancel.emit();
  }

}
