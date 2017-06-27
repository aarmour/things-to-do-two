import { Injectable } from '@angular/core';

import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../../core/user/user.service';

import * as form from './actions';
import * as snackBar from '../snack-bar/actions';
import { USER_PROFILE_FORM } from './constants';
import { State } from '../state';

@Injectable()
export class FormEffects {

  @Effect()
  saveUserProfileForm: Observable<Action> = this.actions
    .ofType(form.SAVE_FORM)
    .map(toPayload)
    .filter((payload: { key: string }) => payload.key === USER_PROFILE_FORM)
    .switchMap((payload: { value: { gender: number, birthdate: Date } }) => {
      return this.userService.saveProfile(payload.value)
        .map(() => new snackBar.PushMessageAction({ message: 'Profile saved' }));
    })
    .catch(() => Observable.of(new snackBar.PushMessageAction({ message: 'Profile could not be saved!'})));

  constructor(private actions: Actions, private store: Store<State>, private userService: UserService) { }

}
