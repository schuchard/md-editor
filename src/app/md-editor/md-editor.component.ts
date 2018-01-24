import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-md-editor',
  template: `
    <div id="editor">
      <textarea [placeholder]="placeHolder" (keyup)="onValueChange($event)"></textarea>
      <div [innerHtml]="compiled"></div>
    </div>
  `,
  styleUrls: ['./md-editor.component.scss']
})
export class MdComponent {
  @Input() compiled: string;
  @Input() placeHolder: string;

  @Output() valueChanged = new EventEmitter<string>();

  onValueChange(e) {
    const body = e.target.value;

    if (!body) {
      // reset to initial state
      return this.valueChanged.emit(this.placeHolder);
    } else {
      this.valueChanged.emit(body);
    }
  }
}
