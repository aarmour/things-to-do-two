import { Action } from '@ngrx/store';

import { type } from '../util';

export const PUSH_LIST_ITEM = type('[Firebase] Push List Item');
export const PUSH_LIST_ITEM_SUCCESS = type('[Firebase] Push List Item Success');
export const QUERY_LIST = type('[Firebase] Query List');
export const QUERY_LIST_SUCCESS = type('[Firebase] Query List Success');

export class PushListItemAction implements Action {
  type = PUSH_LIST_ITEM;

  constructor(public payload: { url: string, value: any }) { }
}

export class PushListItemSuccessAction implements Action {
  type = PUSH_LIST_ITEM_SUCCESS;

  constructor(public payload) { }
}

export class QueryListAction implements Action {
  type = QUERY_LIST;

  constructor(public payload) { }
}

export class QueryListSuccessAction implements Action {
  type = QUERY_LIST_SUCCESS;

  constructor(public payload) { }
}

export type Actions =
  | PushListItemAction
  | PushListItemSuccessAction
  | QueryListAction
  | QueryListSuccessAction
  ;
