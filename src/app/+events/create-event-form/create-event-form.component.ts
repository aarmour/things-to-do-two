import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CreateEventFormModel } from './create-event-form.model';

@Component({
  selector: 'ttd-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.scss']
})
export class CreateEventFormComponent {

  eventForm: FormGroup;

  @Output()
  createEvent: EventEmitter<CreateEventFormModel> = new EventEmitter<CreateEventFormModel>();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.eventForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  onSubmit() {
    this.createEvent.emit({ name: this.eventForm.value.name });
  }

}
