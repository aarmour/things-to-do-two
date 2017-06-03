import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { State } from '../root-reducer';
import * as user from './actions';

@Injectable()
export class UserEffects {

  @Effect({ dispatch: false })
  login: Observable<Action> = this.actions
    .ofType(user.LOGIN)
    .switchMap(() => {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      return Observable.of({ });
    });

  @Effect({ dispatch: false })
  logout: Observable<Action> = this.actions
    .ofType(user.LOGOUT)
    .switchMap(() => {
      this.afAuth.auth.signOut();
      return Observable.of({ });
    });

  constructor(private actions: Actions, private afAuth: AngularFireAuth, private store: Store<State>) {
    this.afAuth.authState
      .subscribe((firebaseUser: firebase.User) => {
        if (firebaseUser) {
          this.store.dispatch(new user.LoginSuccessAction({
            displayName: firebaseUser.displayName,
            email: firebaseUser.email,
            emailVerified: firebaseUser.emailVerified,
            isAnonymous: firebaseUser.isAnonymous,
            phoneNumber: firebaseUser.phoneNumber,
            photoURL: firebaseUser.photoURL,
            uid: firebaseUser.uid
          }));
      } else {
          this.store.dispatch(new user.LogoutSuccessAction());
        }
      });
  }

}
