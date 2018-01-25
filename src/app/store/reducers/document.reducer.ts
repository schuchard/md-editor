import * as fromDocument from '../actions';

export interface ActiveDocument {
  formattedDocument: string;
  rawDocument: string;
}

export interface DocumentState {
  activeDocument: ActiveDocument | null;
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
      const doc = action.payload;
      return {
        ...state,
        activeDocument: {
          formattedDocument: doc.formattedDocument,
          rawDocument: doc.rawDocument,
        },
        activeDocumentLoaded: true,
        activeDocumentLoading: false,
      };
    }

    default:
      break;
  }
}
