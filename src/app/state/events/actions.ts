import { Action } from '@ngrx/store';

import { type } from '../util';
import { Event } from './event.model';

export const CREATE_EVENT = type('[Events] Create Event');
export const CREATE_EVENT_SUCCESS = type('[Events] Create Event Success');

export class CreateEventAction implements Action {
  type = CREATE_EVENT;

  constructor(public payload: Event) { }
}

export class CreateEventSuccessAction implements Action {
  type = CREATE_EVENT_SUCCESS;

  constructor(public payload: Event) { }
}

export type Actions =
  | CreateEventAction
  | CreateEventSuccessAction
  ;
