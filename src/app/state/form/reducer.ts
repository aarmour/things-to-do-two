import { path, assocPath, merge } from 'ramda';

import * as form from './actions';

const initialState = {
  entities: { }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case form.FETCH_FORM_SUCCESS: {
      const { key, value } = action.payload;
      return assocPath(
        ['entities', key],
        value,
        state
      );
    }

    case form.SAVE_FORM: {
      const key = action.payload.key;
      return assocPath(
        ['entities', key],
        merge(
          path<string[]>(['entities', key], state),
          action.payload.value
        ),
        state
      );
    }

    default: {
      return state;
    }
  }
}
