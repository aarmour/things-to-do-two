import * as user from './actions';

export interface State {
  isAuthenticated: boolean;
  profile: user.UserInfo;
}
