import { createSelector } from '@ngrx/store';

import * as fromDocument from '../reducers/document.reducer';
import * as fromState from '../reducers';

export const getDocumentState = createSelector(fromState.getRootState, (state) => state);

export const getDocumentLoading = createSelector(
  getDocumentState,
  fromDocument.getActiveDocumentLoading
);

export const getDocumentLoaded = createSelector(
  getDocumentState,
  fromDocument.getActiveDocumentLoaded
);

export const getDocumentSaved = createSelector(
  getDocumentState,
  fromDocument.getDocumentSaved
);

export const getDocumentSaving = createSelector(
  getDocumentState,
  fromDocument.getDocumentSaving
);

export const getActiveFormattedDocument = createSelector(
  getDocumentState,
  fromDocument.getActiveDocument,
  (state) => {
    return state.activeDocument.formattedDocument;
  }
);

export const getActiveRawDocument = createSelector(
  getDocumentState,
  fromDocument.getActiveDocument,
  (state) => {
    return state.activeDocument.rawDocument;
  }
);
