import { createSelector } from 'reselect';

import { USER_PROFILE_FORM } from './constants';
import { State } from '../state';
import { State as FormState } from './state';

export const form = (state: State) => state.form;

export const profileForm = createSelector(form, (state: FormState) => state.entities[USER_PROFILE_FORM] || { });
