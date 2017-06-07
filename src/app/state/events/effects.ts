import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs/Observable';

import * as events from './actions';
import { Event } from './event.model';

import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

@Injectable()
export class EventsEffects {

  events: FirebaseListObservable<any>;

  @Effect()
  create: Observable<Action> = this.actions
    .ofType(events.CREATE_EVENT)
    .switchMap((action) => Observable.fromPromise(this.events.push(action.payload))
      .map((event: { key: string }) => Object.assign({}, action.payload, { id: event.key }))
      .map((payload: Event) => new events.CreateEventSuccessAction(payload)));

  constructor(private actions: Actions, private db: AngularFireDatabase) {
    this.events = this.db.list('/events');
  }

}
