import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';

import { State } from '../../state/state';
import * as userActions from '../../state/user/actions';
import * as userSelectors from '../../state/user/selectors';

@Component({
  selector: 'ttd-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent implements OnInit {

  isAuthInitialized: Observable<boolean>;
  isAuthenticated: Observable<Object>;
  profile: Observable<Object>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.isAuthInitialized = this.store.select(userSelectors.initialized);
    this.isAuthenticated = this.store.select(userSelectors.isAuthenticated);
    this.profile = this.store.select(userSelectors.profile);
  }

  login() {
    this.store.dispatch(new userActions.LoginAction());
  }

  logout() {
    this.store.dispatch(new userActions.LogoutAction());
  }

}
