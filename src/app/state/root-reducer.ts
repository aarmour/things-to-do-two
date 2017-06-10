import { compose } from '@ngrx/core/compose';
import * as router from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector } from 'reselect';

import { State } from './state';
import { reducer as firebaseReducer } from './firebase/reducer';
import { reducer as userReducer } from './user/reducer';

import { environment } from '../../environments/environment';

const reducers = {
  router: router.routerReducer,
  user: userReducer,
  firebase: firebaseReducer
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
