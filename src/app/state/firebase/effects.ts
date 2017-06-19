import { Injectable } from '@angular/core';

import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import {
  AngularFireDatabase
} from 'angularfire2/database';

import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs/Observable';

import * as fbActions from './actions';

const lists = { };

@Injectable()
export class FirebaseEffects {

  @Effect()
  pushList: Observable<Action> = this.actions
    .ofType(fbActions.PUSH_LIST_ITEM)
    .map(toPayload)
    .switchMap((payload) => {
      let list = lists[payload.url];
      if (typeof list === 'undefined') {
        list = lists[payload.url] = this.db.list(payload.url);
      }

      return Observable.fromPromise(list.push(payload.value))
        .map((item: { key: string }) => new fbActions.PushListItemSuccessAction({ key: item.key, value: payload.value }));
    });

  constructor(private actions: Actions, private db: AngularFireDatabase) { }
}
