import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';

import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { State } from './state/state';
import * as selectors from './state/selectors';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(private router: Router, private store: Store<State>) { }

  canLoad(route: Route): Observable<boolean> {
    return this.waitForAuthToInitialize()
      .switchMap(() => this.store.select(selectors.user.isAuthenticated))
      .take(1)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      });
  }

  waitForAuthToInitialize() {
    return this.store.select(selectors.user.initialized)
      .filter(initialized => initialized)
      .take(1);
  }

}
