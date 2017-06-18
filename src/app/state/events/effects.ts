import { Injectable } from '@angular/core';

import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import * as fbActions from '../firebase/actions';
import * as events from './actions';
import { Event } from './event.model';

@Injectable()
export class EventsEffects {

  @Effect()
  create: Observable<Action> = this.actions
    .ofType(events.CREATE_EVENT)
    .map(toPayload)
    .switchMap((event: Event) => Observable.of(new fbActions.PushListItemAction({ url: '/events', value: event })));

  constructor(private actions: Actions) { }

}
