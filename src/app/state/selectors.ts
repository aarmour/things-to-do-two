import { createSelector } from 'reselect';

import { State } from './state';
import * as fromUser from './user/selectors';

const userState = (state: State) => state.user;

export const user = {
  isAuthenticated: createSelector(userState, fromUser.isAuthenticated),
  profile: createSelector(userState, fromUser.profile)
};
