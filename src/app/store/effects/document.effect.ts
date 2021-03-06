import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError, debounceTime } from 'rxjs/operators';

import * as documentActions from '../actions/document.action';
import { DocumentService } from '../../services';

@Injectable()
export class DocumentEffects {
  constructor(
    private actions$: Actions,
    private documentService: DocumentService,
  ) {}

  @Effect()
  loadDocument$ = this.actions$.ofType(documentActions.LOAD_DOCUMENT).pipe(
    switchMap(() => {
      return this.documentService.loadDocument().pipe(
        map((rawDocument) => {
          const formattedDocument = this.documentService.compileMarkdown(rawDocument);
          return new documentActions.LoadDocumentSuccess({ rawDocument, formattedDocument });
        }),
        catchError((err) => of(new documentActions.LoadDocumentFail(err)))
      );
    })
  );

  @Effect()
  saveDocument$ = this.actions$.ofType(documentActions.SAVE_DOCUMENT).pipe(
    debounceTime(600),
    map((action: documentActions.SaveDocument) => action.payload),
    switchMap((payload) => {
      return this.documentService
        .saveDocument(payload.rawDocument)
        .pipe(
          map((response) => new documentActions.SaveDocumentSuccess(response)),
          catchError((err) => of(new documentActions.SaveDocumentFail(err)))
        );
    })
  );
}
