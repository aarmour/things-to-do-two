import { path, assocPath, merge } from 'ramda';

import * as form from './actions';

const initialState = { };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case form.SAVE_FORM:
      const key = action.payload.key;
      // return assocPath(
      //   propPath,
      //   merge(
      //     path<string[]>(propPath, state),
      //     action.payload.value
      //   ),
      //   state
      // );
      return assocPath(
        ['entities', key],
        merge(
          path<string[]>(['entities', key], state),
          action.payload.value
        ),
        state
      );

    default: {
      return state;
    }
  }
}
