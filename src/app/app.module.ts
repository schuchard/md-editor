import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MdComponent } from './md-editor/md-editor.component';
import { environment } from '../environments/environment';

/* ngrx */

// import {
//   StoreRouterConnectingModule,
//   RouterStateSerializer,
// } from '@ngrx/router-store';
// import { EffectsModule } from '@ngrx/effects';
import { StoreModule, MetaReducer } from '@ngrx/store';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

/* development only */
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ metaReducers }),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  declarations: [AppComponent, MdComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
