import { JQ_TOKEN } from './../jquery.service';
import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() title;
  @Input() modalId;
  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal() {
    this.$(this.containerEl.nativeElement).modal('hide');
  }

}
