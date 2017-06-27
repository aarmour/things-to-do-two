import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    AccountMenuComponent
  ],
  declarations: [
    AccountMenuComponent,
    NotFoundPageComponent
  ],
  providers: [UserService]
})
export class CoreModule { }
