import { Action } from '@ngrx/store';

import { type } from '../util';

export const FETCH_FORM = type('[Form] Fetch Form');
export const FETCH_FORM_SUCCESS = type('[Form] Fetch Form Success');
export const SAVE_FORM = type('[Form] Save Form');

export class FetchFormAction implements Action {
  type = FETCH_FORM;

  constructor(public payload: { key: string }) { }
}

export class FetchFormSuccessAction implements Action {
  type = FETCH_FORM_SUCCESS;

  constructor(public payload: { key: string, value: any }) { }
}

export class SaveFormAction implements Action {
  type = SAVE_FORM;

  constructor(public payload: { key: string, value: any }) { }
}

export type Actions =
  | FetchFormAction
  | SaveFormAction
  ;
