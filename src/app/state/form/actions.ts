import { Action } from '@ngrx/store';

import { type } from '../util';

export const SAVE_FORM = type('[Form] Save Form');

export class SaveFormAction implements Action {
  type = SAVE_FORM;

  constructor(public payload: { key: string, value: any }) { }
}

export type Actions =
  | SaveFormAction
  ;
