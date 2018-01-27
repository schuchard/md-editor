import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromStore from './store';

import { DocumentService } from './services';

@Component({
  selector: 'app-md',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeFormattedDocument$: Observable<string>;
  activeRawDocument$: Observable<string>;

  constructor(private store: Store<fromStore.State>, private documentService: DocumentService) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadDocument());

    this.activeFormattedDocument$ = this.store.select(fromStore.getActiveFormattedDocument);
    this.activeRawDocument$ = this.store.select(fromStore.getActiveRawDocument);
  }

  onValueChanged(newValue: string) {
    this.store.dispatch(
      new fromStore.SaveDocument(this.documentService.formatDocumentForStore(newValue))
    );
  }
}
