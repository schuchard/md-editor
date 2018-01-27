import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-md-editor',
  template: `
    <div id="editor">
      <textarea
      [formControl]="text"
      [placeholder]="placeHolder"
      ></textarea>
      <div [innerHtml]="compiled"></div>
    </div>
  `,
  styleUrls: ['./md-editor.component.css'],
})
export class MdComponent implements OnInit, OnDestroy {
  @Input() compiled: string;
  @Input() placeHolder: string;

  @Output() valueChanged: EventEmitter<string> = new EventEmitter();

  text = new FormControl();
  sub: Subscription;

  ngOnInit() {
    this.sub = this.text.valueChanges
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((text) => this.valueChanged.emit(text));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
