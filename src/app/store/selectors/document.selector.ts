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

export const getActiveRawDocument = createSelector(
  getDocumentState,
  fromDocument.getActiveDocument,
  (state) => {
    return state.activeDocument.rawDocument;
  }
);
