import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { UserRoutingModule } from './user-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    UserRoutingModule
  ],
  declarations: [ProfilePageComponent]
})
export class UserModule { }
