import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { MdComponent } from './components/md-editor/md-editor.component';
import { MenuComponent } from './containers/menu/menu.component';

// modules
import { NgMaterialModule } from './ngMaterial.module';

// development only
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// ngrx
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
    ReactiveFormsModule,
    NgMaterialModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  declarations: [AppComponent, MdComponent, MenuComponent],
  bootstrap: [AppComponent],
  providers: [DocumentService],
})
export class AppModule {}
