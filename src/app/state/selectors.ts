import { createSelector } from 'reselect';

import { State } from './state';
import * as fromSnackbar from './snack-bar/selectors';
import * as fromUser from './user/selectors';

const snackBarState = (state: State) => state.snackBar;
const userState = (state: State) => state.user;

export const snackBar = {
  messages: createSelector(snackBarState, fromSnackbar.messages)
};

export const user = {
  initialized: createSelector(userState, fromUser.initialized),
  isAuthenticated: createSelector(userState, fromUser.isAuthenticated),
  profile: createSelector(userState, fromUser.profile)
};
