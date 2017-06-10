import { Action } from '@ngrx/store';

import { type } from '../util';
import { Event } from './event.model';

export const CREATE_EVENT = type('[Events] Create Event');

export class CreateEventAction implements Action {
  type = CREATE_EVENT;

  constructor(public payload: Event) { }
}

export type Actions =
  | CreateEventAction
  ;
