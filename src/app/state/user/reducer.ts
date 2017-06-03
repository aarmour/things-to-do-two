import * as user from './actions';
import { State } from './state';

const initialState: State = {
  isAuthenticated: false,
  profile: null
};

export function reducer(state: State = initialState, action: user.Actions): State {
  switch(action.type) {
    case user.LOGIN_SUCCESS: {
      return Object.assign({ }, state, { isAuthenticated: true, profile: (action as user.LoginSuccessAction).payload });
    }

    case user.LOGOUT_SUCCESS: {
      return Object.assign({ }, state, { isAuthenticated: false, profile: null });
    }

    default: {
      return state;
    }
  }
}
