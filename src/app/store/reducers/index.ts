import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromDocuments from './document.reducer';

export interface State {
  documents: fromDocuments.DocumentState;
}

export const reducers: ActionReducerMap<State> = {
  documents: fromDocuments.reducer,
};

export const getDocumentState = createFeatureSelector<State>('documents');
