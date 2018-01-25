import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromStore from './store';
import { ActiveDocument } from './store/reducers/document.reducer';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-md',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  activeDocument$: Observable<string> = of();
  // compiledMarkdown: string;
  startingValue = '';

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.activeDocument$ = this.store.select(fromStore.getActiveRawDocument);

    this.store.dispatch(new fromStore.LoadDocument());
    // this.startingValue = this.getPlaceHolder();

    // this.compiledMarkdown = this.compileMarkdown(this.startingValue);
  }

  onValueChanged(value: string) {
    // this.compiledMarkdown = this.compileMarkdown(value);
  }
}
