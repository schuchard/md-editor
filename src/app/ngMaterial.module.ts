import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatToolbarModule, MatProgressSpinnerModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule, MatToolbarModule, MatProgressSpinnerModule, MatTooltipModule],
  exports: [BrowserAnimationsModule, MatToolbarModule, MatProgressSpinnerModule, MatTooltipModule],
  providers: [],
})
export class NgMaterialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgMaterialModule,
    };
  }
}
