import { Action } from '@ngrx/store';

/**
 * load documents
 */
export const LOAD_DOCUMENT = '[DOCUMENT] Load Document';
export const LOAD_DOCUMENT_FAIL = '[DOCUMENT] Load Document Fail';
export const LOAD_DOCUMENT_SUCCESS = '[DOCUMENT] Load Document Success';

export class LoadDocument implements Action {
  readonly type = LOAD_DOCUMENT;
}

export class LoadDocumentFail implements Action {
  readonly type = LOAD_DOCUMENT_FAIL;
  constructor(public payload: any) {}
}

export class LoadDocumentSuccess implements Action {
  readonly type = LOAD_DOCUMENT_SUCCESS;
  constructor(public payload: any) {}
}

/**
 * update documents
 */
export const UPDATE_DOCUMENT = '[DOCUMENT] Update Document';
export const UPDATE_DOCUMENT_FAIL = '[DOCUMENT] Update Document Fail';
export const UPDATE_DOCUMENT_SUCCESS = '[DOCUMENT] Update Document Success';

export class UpdateDocument implements Action {
  readonly type = UPDATE_DOCUMENT;
}

export class UpdateDocumentFail implements Action {
  readonly type = UPDATE_DOCUMENT_FAIL;
  constructor(public payload: any) {}
}

export class UpdateDocumentSuccess implements Action {
  readonly type = UPDATE_DOCUMENT_SUCCESS;
  constructor(public payload: any) {}
}

export type DocumentActions =
  | LoadDocument
  | LoadDocumentFail
  | LoadDocumentSuccess
  | UpdateDocument
  | UpdateDocumentFail
  | UpdateDocumentSuccess;
