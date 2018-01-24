import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MdComponent } from './components/md-editor/md-editor.component';
import { environment } from '../environments/environment';
import { MenuComponent } from './containers/menu/menu.component';

/* development only */
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

/* ngrx */

// import {
//   StoreRouterConnectingModule,
//   RouterStateSerializer,
// } from '@ngrx/router-store';
// import { EffectsModule } from '@ngrx/effects';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { reducers } from './store';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  declarations: [AppComponent, MdComponent, MenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
