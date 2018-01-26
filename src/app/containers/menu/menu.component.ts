import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  documentSaved: Observable<boolean>;
  documentSaving: Observable<boolean>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.documentSaved = this.store.select(fromStore.getDocumentSaved);
    this.documentSaving = this.store.select(fromStore.getDocumentSaving);
  }
}
