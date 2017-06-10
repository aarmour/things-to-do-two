import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
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
    .switchMap((action) => {
      let list = lists[action.payload.url];
      if (typeof list === 'undefined') {
        list = lists[action.payload.url] = this.db.list(action.payload.url);
      }

      return Observable.fromPromise(list.push(action.payload.value))
        .map((item: { key: string }) => new fbActions.PushListItemSuccessAction({ key: item.key, value: action.payload.value }));
    });

  constructor(private actions: Actions, private db: AngularFireDatabase) { }
}
