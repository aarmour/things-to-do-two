import { mergeAll } from 'ramda';

import * as events from './actions';
import { State } from './state';

const initialState: State = {
  entities: {}
};

export function reducer(state: State = initialState, action: events.Actions): State {
  switch (action.type) {
    case events.CREATE_EVENT_SUCCESS: {
      return mergeAll([{ }, state, { entities: { [action.payload.id]: action.payload } }]) as State;
    }

    default: {
      return state;
    }
  }
}
