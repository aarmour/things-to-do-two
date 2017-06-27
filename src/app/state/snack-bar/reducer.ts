import * as snackBar from './actions';
import { State } from './state';

const initialState: State = {
  messages: []
};

export function reducer(state: State = initialState, action: snackBar.Actions): State {
  switch (action.type) {
    case snackBar.PUSH_MESSAGE: {
      const message = (action as snackBar.PushMessageAction).payload.message;
      return Object.assign(
        { },
        state,
        { messages: [...state.messages, message] }
      );
    }

    case snackBar.POP_MESSAGE: {
      return Object.assign(
        { },
        state,
        { messages: state.messages.slice(1) }
      );
    }

    default: {
      return state;
    }
  }
}
