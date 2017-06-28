import { createSelector } from 'reselect';

import { State } from '../state';
import { State as SnackBarState } from './state';

const snackBar = (state: State) => state.snackBar;

export const messages = createSelector(snackBar, (state: SnackBarState) => state.messages);
