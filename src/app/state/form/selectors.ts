import { USER_PROFILE_FORM } from './constants';
import { State } from './state';

export const profileForm = (state: State) => state.entities[USER_PROFILE_FORM] || { };
