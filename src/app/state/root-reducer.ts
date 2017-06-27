import { compose } from '@ngrx/core/compose';
import * as router from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector } from 'reselect';

import { State } from './state';
import { reducer as firebaseReducer } from './firebase/reducer';
import { reducer as formReducer } from './form/reducer';
import { reducer as snackBarReducer } from './snack-bar/reducer';
import { reducer as userReducer } from './user/reducer';

import { environment } from '../../environments/environment';

const reducers = {
  firebase: firebaseReducer,
  form: formReducer,
  router: router.routerReducer,
  snackBar: snackBarReducer,
  user: userReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function rootReducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
