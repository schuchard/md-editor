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
 * save documents
 */
export const SAVE_DOCUMENT = '[DOCUMENT] Save Document';
export const SAVE_DOCUMENT_FAIL = '[DOCUMENT] Save Document Fail';
export const SAVE_DOCUMENT_SUCCESS = '[DOCUMENT] Save Document Success';

export class SaveDocument implements Action {
  readonly type = SAVE_DOCUMENT;
  constructor(public payload: string) {}
}

export class SaveDocumentFail implements Action {
  readonly type = SAVE_DOCUMENT_FAIL;
  constructor(public payload: any) {}
}

export class SaveDocumentSuccess implements Action {
  readonly type = SAVE_DOCUMENT_SUCCESS;
  constructor(public payload: any) {}
}

export type DocumentActions =
  | LoadDocument
  | LoadDocumentFail
  | LoadDocumentSuccess
  | SaveDocument
  | SaveDocumentFail
  | SaveDocumentSuccess;
