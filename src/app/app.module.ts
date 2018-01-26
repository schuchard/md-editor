import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MdComponent } from './components/md-editor/md-editor.component';
import { environment } from '../environments/environment';
import { MenuComponent } from './containers/menu/menu.component';

import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

/* development only */
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

/* ngrx */

// import {
//   StoreRouterConnectingModule,
//   RouterStateSerializer,
// } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { reducers, effects } from './store';
import { DocumentService } from './services';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTooltipModule,

    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  declarations: [AppComponent, MdComponent, MenuComponent],
  bootstrap: [AppComponent],
  providers: [DocumentService],
})
export class AppModule {}
