import { NgModule, ModuleWithProviders } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { rootReducer } from './root-reducer';
import { effects } from './effects';

@NgModule({
  imports: [
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument()
  ]
})
export class StateRootModule { }

@NgModule()
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: StateRootModule };
  }
}
