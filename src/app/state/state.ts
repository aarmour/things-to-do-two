import * as router from '@ngrx/router-store';

import { State as EventsState } from './events/state';
import { State as FirebaseState } from './firebase/state';
import { State as FormState } from './form/state';
import { State as SnackBarState } from './snack-bar/state';
import { State as UserState } from './user/state';

export interface State {
  events: EventsState;
  firebase: FirebaseState;
  form: FormState;
  router: router.RouterState;
  snackBar: SnackBarState;
  user: UserState;
}
