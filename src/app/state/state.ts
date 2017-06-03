import * as router from '@ngrx/router-store';

import { State as UserState } from './user/state';

export interface State {
  router: router.RouterState;
  user: UserState;
}
