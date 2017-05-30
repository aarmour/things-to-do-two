import { NgModule, ModuleWithProviders } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { rootReducer } from './root-reducer';

@NgModule({
  imports: [
    StoreModule.provideStore(rootReducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ]
})
export class StateRootModule { }

@NgModule()
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: StateRootModule };
  }
}
