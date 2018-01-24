import * as fromDocument from '../actions';

export interface DocumentState {
  activeDocument: any;
  activeDocumentLoaded: boolean;
  activeDocumentLoading: boolean;
}

export const initialState: DocumentState = {
  activeDocument: null,
  activeDocumentLoaded: false,
  activeDocumentLoading: false,
};

export const getActiveDocument = (state: DocumentState) => state.activeDocument;
export const getActiveDocumentLoaded = (state: DocumentState) => state.activeDocumentLoaded;
export const getActiveDocumentLoading = (state: DocumentState) => state.activeDocumentLoading;

export function reducer(state = initialState, action: fromDocument.DocumentActions) {
  switch (action.type) {
    case fromDocument.LOAD_DOCUMENT: {
      return {
        ...state,
        activeDocumentLoading: true,
      };
    }

    case fromDocument.LOAD_DOCUMENT_FAIL: {
      return {
        ...state,
        activeDocumentLoaded: false,
        activeDocumentLoading: false,
      };
    }

    case fromDocument.LOAD_DOCUMENT_SUCCESS: {
      const document = action.payload;
      return {
        ...state,
        activeDocument: document,
        activeDocumentLoaded: true,
        activeDocumentLoading: false,
      };
    }

    default:
      break;
  }
}
