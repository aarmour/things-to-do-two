import { Component, OnInit } from '@angular/core';

import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { State } from '../../state/state';
import * as userActions from '../../state/user/actions';
import * as selectors from '../../state/selectors';

@Component({
  selector: 'ttd-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  isAuthenticated: Observable<Object>;
  profile: Observable<Object>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.isAuthenticated = this.store.select(selectors.user.isAuthenticated);
    this.profile = this.store.select(selectors.user.profile);
  }

  login() {
    this.store.dispatch(new userActions.LoginAction());
  }

  logout() {
    this.store.dispatch(new userActions.LogoutAction());
  }

}
