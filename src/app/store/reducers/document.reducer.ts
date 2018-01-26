import * as fromDocument from '../actions';

export interface ActiveDocument {
  formattedDocument: string;
  rawDocument: string;
}

export interface DocumentState {
  activeDocument: ActiveDocument | null;
  activeDocumentLoaded: boolean;
  activeDocumentLoading: boolean;
  documentSaving: boolean;
  documentSaved: boolean;
}

export const initialState: DocumentState = {
  activeDocument: {
    formattedDocument: null,
    rawDocument: null,
  },
  activeDocumentLoaded: false,
  activeDocumentLoading: false,
  documentSaving: false,
  documentSaved: false,
};

export const getActiveDocument = (state: DocumentState) => state.activeDocument;
export const getActiveDocumentLoaded = (state: DocumentState) => state.activeDocumentLoaded;
export const getActiveDocumentLoading = (state: DocumentState) => state.activeDocumentLoading;

const setActiveDocument = function(payload) {
  return {
    formattedDocument: payload.formattedDocument,
    rawDocument: payload.rawDocument,
  };
};

export function reducer(state = initialState, action: fromDocument.DocumentActions) {
  switch (action.type) {
    case fromDocument.LOAD_DOCUMENT: {
      return {
        ...state,
        activeDocumentLoading: true,
        activeDocumentLoaded: false,
      };
    }

    case fromDocument.LOAD_DOCUMENT_FAIL: {
      return {
        ...state,
        activeDocumentLoading: false,
        activeDocumentLoaded: false,
      };
    }

    case fromDocument.LOAD_DOCUMENT_SUCCESS: {
      return {
        ...state,
        activeDocument: setActiveDocument(action.payload),
        activeDocumentLoading: false,
        activeDocumentLoaded: true,
      };
    }

    case fromDocument.SAVE_DOCUMENT: {
      return {
        ...state,
        documentSaving: true,
        documentSaved: false,
      };
    }

    case fromDocument.SAVE_DOCUMENT_FAIL: {
      return {
        ...state,
        documentSaving: false,
        documentSaved: false,
      };
    }

    case fromDocument.SAVE_DOCUMENT_SUCCESS: {
      const doc = action.payload;
      return {
        ...state,
        activeDocument: setActiveDocument(action.payload),
        documentSaving: false,
        documentSaved: true,
      };
    }

    default:
      break;
  }
}
