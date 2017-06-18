import { RouterReducerState } from '@ngrx/router-store';

import { State as UserState } from './user/state';

export interface State {
  router: RouterReducerState;
  user: UserState;
}
