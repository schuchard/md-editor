import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

import * as marked from 'marked';

@Injectable()
export class DocumentService {
  constructor() {}

  loadDocument() {
    return of(this.exampleDocument());
  }

  compileMarkdown(value: string): string {
    return marked.parser(marked.lexer(value));
  }

  saveDocument(rawDocument: string) {
    return of({ rawDocument, formattedDocument: this.compileMarkdown(rawDocument) });
  }

  private exampleDocument() {
    // prettier-ignore
    return (
      '# Title \n' +
      '## Title\n' +
      '### Title\n' +
      '#### Title\n\n' +

      '**bold**\n\n' +

      '*italic*\n\n' +

      'inline `code`\n\n' +

      '### code block\n' +
      '```\n' +
      `const foo = () => {
        return 1;
      }\n` +

      '```\n\n' +

      '### unorderd list\n' +
      '- item 1\n' +
      '* item 2\n\n' +

      '### orderd list\n\n' +
      '1. item a\n' +
      '2. item b'
    );
  }
}
