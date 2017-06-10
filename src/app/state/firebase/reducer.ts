import { mergeAll } from 'ramda';

import * as firebase from './actions';
import { State } from './state';

const initialState: State = {
  entities: { }
};

export function reducer(state: State = initialState, action: firebase.Actions): State {
  switch (action.type) {
    case firebase.PUSH_LIST_ITEM_SUCCESS: {
      return mergeAll([{ }, state, { entities: { [action.payload.key]: action.payload } }]) as State;
    }

    default: {
      return state;
    }
  }
}
