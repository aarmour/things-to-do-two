import { Action } from '@ngrx/store';

import { type } from '../util';

export const PUSH_MESSAGE = type('[Snack Bar] Push Message');
export const POP_MESSAGE = type('[Snack Bar] Pop Message');

export class PushMessageAction implements Action {
  type = PUSH_MESSAGE;

  constructor(public payload: { message: string }) { }
}

export class PopMessageAction implements Action {
  type = POP_MESSAGE;
}

export type Actions =
  | PushMessageAction
  | PopMessageAction
  ;
