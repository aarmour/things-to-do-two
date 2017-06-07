import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from '../../state/state';
import * as eventActions from '../../state/events/actions';

import { CreateEventFormModel } from '../create-event-form/create-event-form.model';

@Component({
  selector: 'ttd-create-event-page',
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.scss']
})
export class CreateEventPageComponent {

  constructor(private store: Store<State>) { }

  onCreateEvent(data: CreateEventFormModel) {
    this.store.dispatch(new eventActions.CreateEventAction(data));
  }

}
