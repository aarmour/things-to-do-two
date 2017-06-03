import * as router from '@ngrx/router-store';

import * as user from './user';

export interface State {
  router: router.RouterState;
  user: user.State;
}
