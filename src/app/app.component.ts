import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromStore from './store';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-md',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeFormattedDocument$: Observable<string> = of();
  activeRawDocument$: Observable<string>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadDocument());

    this.activeFormattedDocument$ = this.store.select(fromStore.getActiveFormattedDocument);
    this.activeRawDocument$ = this.store.select(fromStore.getActiveRawDocument);
  }

  onValueChanged(value: string) {
    this.store.dispatch(new fromStore.SaveDocument(value));
  }
}
